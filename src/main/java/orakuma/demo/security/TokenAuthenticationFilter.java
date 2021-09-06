package orakuma.demo.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

@Component
final class TokenAuthenticationFilter extends OncePerRequestFilter {
	private static final String BEARER = "Bearer";
	private static final String AUTHORIZATION = "Authorization";
	private TokenSecurityService tokenSecurityService;
	private UserDetailsService userDetailsServices;

	@Autowired
	public TokenAuthenticationFilter(TokenSecurityService tokenSecurityService,
			UserDetailsService userDetailsServices) {
		this.tokenSecurityService = tokenSecurityService;
		this.userDetailsServices = userDetailsServices;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			String token = getToken(request);
			UserDetails details = getUserDetails(token);
			if (tokenSecurityService.validateToken(token, details)) {
				setAuthentication(request, details);
			}
			filterChain.doFilter(request, response);
		} catch (ExpiredJwtException e) {
			response.sendRedirect("/login");
		}
	}

	private String getToken(HttpServletRequest request) {
		String header = request.getHeader(AUTHORIZATION);
		if (header == null || !header.startsWith(BEARER))
			return null;
		return header.substring(BEARER.length() + 1);
	}

	private UserDetails getUserDetails(String token) {
		if (token == null)
			return null;
		String username = tokenSecurityService.extractUsername(token);
		if (username == null || SecurityContextHolder.getContext().getAuthentication() != null)
			return null;
		return userDetailsServices.loadUserByUsername(username);
	}

	private void setAuthentication(HttpServletRequest request, UserDetails details) {
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(details, null,
				details.getAuthorities());
		token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
		SecurityContextHolder.getContext().setAuthentication(token);
	}

}
