package orakuma.demo.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;

import orakuma.demo.model.User;

public class Password {

	private static final List<Character> DIGITS;
	private static final List<Character> LOWERCASE;
	private static final List<Character> UPPERCASE;
	private static PasswordEncoder passwordEncoder;

	static {
		DIGITS = new ArrayList<>();
		for (int i = 48; i <= 57; i++)
			DIGITS.add((char) i);
		LOWERCASE = new ArrayList<>();
		for (int i = 97; i <= 122; i++)
			LOWERCASE.add((char) i);
		UPPERCASE = new ArrayList<>();
		for (int i = 65; i <= 90; i++)
			UPPERCASE.add((char) i);
	}

	public static void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		Password.passwordEncoder = passwordEncoder;
	}

	private Password() {
	}

	/**
	 * Password must be at least: 3(lowercase)+3(uppercase)+1(special)+1(digit)
	 * For each set, we do shuffle and take subset
	 * 
	 * @return generated password
	 */
	public static String generate() {
		List<Character> newCharArray = List.copyOf(DIGITS);
		Collections.shuffle(newCharArray);
		Character digitSelected = newCharArray.get(0);
		newCharArray = List.copyOf(LOWERCASE);
		Collections.shuffle(newCharArray);
		List<Character> lowercasesSelected = newCharArray.subList(0, 4);
		newCharArray = List.copyOf(UPPERCASE);
		Collections.shuffle(newCharArray);
		List<Character> uppercasesSelected = newCharArray.subList(0, 3);
		lowercasesSelected.add(digitSelected);
		lowercasesSelected.addAll(uppercasesSelected);
		Collections.shuffle(lowercasesSelected);
		String password = "";
		for (Character item : lowercasesSelected)
			password += item;
		return password;
	}

	public static boolean isValid(String password) {
		if (password == null || password.length() < 8)
			return false;
		if (!checkOccurrences(password, DIGITS, 1))
			return false;
		if (!checkOccurrences(password, LOWERCASE, 1))
			return false;
		if (!checkOccurrences(password, UPPERCASE, 1))
			return false;
		return true;
	}

	private static boolean checkOccurrences(String password, List<Character> list, int minimum) {
		int occurrences = 0;
		for (Character c : list) {
			occurrences += countMatches(password, c);
		}
		return occurrences >= minimum;
	}

	private static int countMatches(String password, char c) {
		int count = 0;
		for (char p : password.toCharArray()) {
			if (p == c) {
				count++;
			}
		}
		return count;
	}

	public static String encode(String password) {
		return passwordEncoder.encode(password);
	}

	public static boolean arePasswordsMatch(User user, String password) {
		return passwordEncoder.matches(password, user.getPassword());
	}

}