package orakuma.demo.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class APIAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	private RequestCache requestCache = new HttpSessionRequestCache();

	public void setRequestCache(RequestCache requestCache) {
		this.requestCache = requestCache;
	}

	public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			Authentication authentication) {
		SavedRequest savedRequest = requestCache.getRequest(httpServletRequest, httpServletResponse);
		if (savedRequest == null) {
			clearAuthenticationAttributes(httpServletRequest);
			return;
		}
		String targetUrlParam = getTargetUrlParameter();
		if (isAlwaysUseDefaultTargetUrl()
				|| (targetUrlParam != null && StringUtils.hasText(httpServletRequest.getParameter(targetUrlParam)))) {
			requestCache.removeRequest(httpServletRequest, httpServletResponse);
			clearAuthenticationAttributes(httpServletRequest);
			return;
		}
		clearAuthenticationAttributes(httpServletRequest);
	}
}