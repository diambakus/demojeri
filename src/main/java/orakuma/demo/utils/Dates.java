package orakuma.demo.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Dates {

	private static final SimpleDateFormat FORMAT = new SimpleDateFormat("dd.MM.yyyy");
	private static final Logger logger = LoggerFactory.getLogger(Dates.class);

	public static String getValidUntil(String issueDate) {
		try {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(FORMAT.parse(issueDate));
			calendar.add(Calendar.YEAR, 5);
			calendar.add(Calendar.DAY_OF_MONTH, -1);
			return FORMAT.format(calendar.getTime());
		} catch (ParseException e) {
			logger.error("Error parsing issue date");
			return issueDate;
		}
	}

	public static String generateIssueDate() {
		Calendar calendar = Calendar.getInstance();
		return FORMAT.format(calendar.getTime());
	}

	public static String formatDate(long value) {
		if (value == 0l)
			return null;
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(value);
		String year = fillZeros(calendar.get(Calendar.YEAR), 4);
		String month = fillZeros(calendar.get(Calendar.MONTH) + 1, 2);
		String day = fillZeros(calendar.get(Calendar.DAY_OF_MONTH), 2);
		return year + "-" + month + "-" + day;
	}

	private static String fillZeros(int value, int total) {
		String s = Integer.toString(value);
		while (s.length() < total) {
			s = "0" + s;
		}
		return s;
	}

}
