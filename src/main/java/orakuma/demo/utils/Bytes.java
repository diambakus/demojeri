package orakuma.demo.utils;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class Bytes {

	public static void toImageFile(byte[] imageBytes, String directory, String name) {
		if (imageBytes == null || imageBytes.length == 0)
			return;
		String base64String = new String(imageBytes);
		String base64StringSplitted = base64String.split(",")[1];
		byte[] bA4InputStream = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64StringSplitted);
		ByteArrayInputStream bis = new ByteArrayInputStream(bA4InputStream);
		try {
			BufferedImage bImage = ImageIO.read(bis);
			ImageIO.write(bImage, "png", new File(directory + name));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}