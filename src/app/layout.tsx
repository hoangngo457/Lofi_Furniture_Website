import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import HeaderLayout from "@/component/header";
import FooterLayout from "@/component/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ margin: "0", padding: "0" }}>
        <NextIntlClientProvider messages={messages}>
          <HeaderLayout />
          <div>{children}</div>
          <FooterLayout />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
