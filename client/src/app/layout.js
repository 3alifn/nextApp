
export const metadata = {
    title: 'Todo App',
    description: 'A Demo Todo App',
    icons: { icon: "/logo.png" },
  }

import "./globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }