package orakuma.demo.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	private MailSender mailSender;

	@Autowired
	public EmailService(MailSender mailSender) {
		this.mailSender = mailSender;
	}

	public void send(String text, String to) {

		SimpleMailMessage message = new SimpleMailMessage();
		message.setSubject("FRED: Passwort vergessen");
		message.setSentDate(new Date());
		message.setText(text);
		message.setFrom("fred@greendelta.com");
		message.setTo(to);
		try {
			this.mailSender.send(message);
		} catch (MailException me) {
			System.err.println(me.getMessage());
		}
	}
}
