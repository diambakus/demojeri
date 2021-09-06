package orakuma.demo.security;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import orakuma.demo.model.Role;
import orakuma.demo.model.User;

public class CurrentUser extends org.springframework.security.core.userdetails.User implements UserDetails {

	public User user;

	private static final long serialVersionUID = -8689259416927532072L;

	/**
	 * Construct the <code>User</code> with the details required by
	 * {@link org.springframework.security.authentication.dao.DaoAuthenticationProvider}.
	 *
	 * @param username
	 *            the username presented to the
	 *            <code>DaoAuthenticationProvider</code>
	 * @param password
	 *            the password that should be presented to the
	 *            <code>DaoAuthenticationProvider</code>
	 * @param enabled
	 *            the value should be updated(to <code>true</code>) by admin.
	 *            Otherwise, remains <code>false</code>
	 * @param accountNonExpired
	 *            set to <code>true</code> if the account has not expired
	 * @param credentialsNonExpired
	 *            set to <code>true</code> if the credentials have not expired
	 * @param accountNonLocked
	 *            set to <code>true</code> if the account is not locked
	 * @param authorities
	 *            the authorities that should be granted to the caller if they
	 *            presented the correct username and password and the user is
	 *            enabled. Not null.
	 */
	public CurrentUser(User user) {
		super(user.getUsername(), user.getPassword(), true, true, true, true,
				AuthorityUtils.createAuthorityList(user.getRole().toString()));
		this.user = user;
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return this.user.getPassword();
	}

	@Override
	public String getUsername() {
		return this.user.getUsername();
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public boolean isUserAdminFor(User u) {
		if (u == null)
			return false;
		if (u == user || u.getId() == user.getId())
			return true;
		if (user.getRole() == Role.ROLE_ADMIN)
			return true;
		if (user.getRole() == Role.ROLE_ORGANIZATION_ADMIN)
			return user.getOrganization().getId() == u.getOrganization().getId();
		return false;
	}
	
	public boolean isOrganizationAdmin(long orgId) {
		if (user.getRole() == Role.ROLE_ADMIN)
			return true;
		if (user.getOrganization() == null)
			return false;
		return orgId == user.getOrganization().getId();
	}

	
}