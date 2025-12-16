export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
