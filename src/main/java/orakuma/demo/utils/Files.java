package orakuma.demo.utils;

import java.io.File;

public class Files {

	public static final String logTag = "DEVEL";

	public static boolean deleteDirectory(String dirName) {
		File rootDir = new File(dirName);
		if (!rootDir.exists())
			return false;
		String[] files = rootDir.list();
		for (String file : files) {
			File currentFile = new File(rootDir.getPath(), file);
			currentFile.delete();
		}
		rootDir.delete();
		return true;
	}

	public static boolean exists(String directory, String filename) {
		File rootDir = new File(directory);
		if (!rootDir.exists())
			return false;
		String[] files = rootDir.list();
		for (String file : files)
			if (file.equals(filename))
				return true;
		return false;
	}

	public static String customFormat(String message) {
		return String.format("%s: %s", logTag, message);
	}
}
