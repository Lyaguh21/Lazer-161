import "../styles/globals.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
