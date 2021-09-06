package orakuma.demo.utils;

public class SystemProps {
	public static boolean isOS(String pattern) {
		return System.getProperty("os.name").toLowerCase().startsWith(pattern);
	}
}
