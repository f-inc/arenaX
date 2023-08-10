import "../styles/globals.css";

export const metadata = {
  title: "ArenaX",
  description:
    "The Bay Area’s premier sports tech hackathon. Hosted by Founders, Inc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
