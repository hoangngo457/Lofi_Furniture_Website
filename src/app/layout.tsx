import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Container } from "@mui/material";
import HeaderLayout from "@/component/header";
import FooterLayout from "@/component/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

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
    <html lang="vi">
      <body style={{ margin: "0", padding: "0" }}>
        <NextIntlClientProvider messages={messages}>
          <HeaderLayout />
          <Container>{children}</Container>
          <FooterLayout />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
