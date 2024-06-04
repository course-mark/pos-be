import { Response } from 'express';
import puppeteer from 'puppeteer';

export async function generateCustomPdfBuffer(htmlString: string, res: Response) {
  const browser = await puppeteer.launch({
    // args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(htmlString);
  const pdfBuffer = await page.pdf({ format: 'a4' });
  await browser.close();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
  res.send(pdfBuffer);
}
