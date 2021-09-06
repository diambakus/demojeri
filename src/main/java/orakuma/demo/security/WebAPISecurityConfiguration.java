package orakuma.demo.security;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebAPISecurityConfiguration extends WebSecurityConfigurerAdapter {

	private UserDetailsService userDetailsService;
	private PasswordEncoder passwordEncoder;
	private APIAuthenticationEntryPoint apiAuthenticationEntryPoint;
	private TokenAuthenticationFilter tokenAuthenticationFilter;

	@Autowired
	public WebAPISecurityConfiguration(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder,
			APIAuthenticationEntryPoint apiAuthenticationEntryPoint,
			TokenAuthenticationFilter tokenAuthenticationFilter) {
		this.userDetailsService = userDetailsService;
		this.passwordEncoder = passwordEncoder;
		this.apiAuthenticationEntryPoint = apiAuthenticationEntryPoint;
		this.tokenAuthenticationFilter = tokenAuthenticationFilter;
	}

	/**
	 * 1. Warns Spring security to no longer create or use HTTP Session for
	 * storing authentication object - stateless
	 * 
	 * 2. Disable CSRF
	 * 
	 * 3. Spring security automatically registers login to the endpoint /login.
	 * We also configure successHandler (200) and failureHandler(401 -
	 * unauthorized)
	 * 
	 * 4. Whenever a client tries to request a protected endpoint the an
	 * exception is thrown 5. Every endpoint should be protected, except login
	 * and resources folder
	 */
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
				.sessionManagement().sessionCreationPolicy(STATELESS)
				.and().csrf().disable()
				.exceptionHandling().authenticationEntryPoint(apiAuthenticationEntryPoint).and()
				.antMatcher("/api/**").authorizeRequests()
				.antMatchers("/api/public/login").permitAll()
				.antMatchers("/api/public/reset-password").permitAll()
				.anyRequest().authenticated().and()
				.anonymous().authorities("ROLE_ANON").and()
				.logout();
		httpSecurity.addFilterBefore(tokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
	}
}
