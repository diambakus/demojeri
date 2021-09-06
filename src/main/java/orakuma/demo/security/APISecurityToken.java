package orakuma.demo.security;

public class APISecurityToken {

	public String token;
	public long expires;
	
	public APISecurityToken(String token, long expires) {
		this.token = token;
		this.expires = expires;
	}

}
