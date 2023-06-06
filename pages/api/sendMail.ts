// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message, subject } = req.body;
  try {
    await sendgrid.send({
      to: 'kontakt@hno-kuehn.de',
      from: 'Website Kontaktfomular <website@hno-kuehn.de>',
      replyTo: email,
      subject: `Anliegen von ${name} über Website Kontaktformular`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
          ${
            subject ? `<p style="font-size: 14px">Anliegen: ${subject}</p>` : ''
          }
          <p style="font-size: 14px">Nachricht:</p>
          <p style="font-size: 12px">${message}</p>
          <p style="font-size: 12px">Antworten an: ${email}</p>
        </body>
      </html>`,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Email could not be sent' });
  }

  return res.status(200).json({});
}
