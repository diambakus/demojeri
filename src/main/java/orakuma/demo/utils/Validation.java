package orakuma.demo.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validation {

	public static boolean isUsername(String name) {
		if (name.length() < 4)
			return false;
		String regex = "^[a-zA-Z0-9_]+$";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(name);
		return matcher.matches();
	}

	public static boolean isEmail(String email) {
		String regex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(email);
		return matcher.matches();
	}

	public static boolean isTelephone(String telephone) {
		String regex = "\\d{10}";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(telephone);
		return matcher.matches();
	}
}
