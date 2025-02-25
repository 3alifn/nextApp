
export const metadata = {
    title: 'Todo App',
    description: 'A Demo Todo App',
  }

import "../styles/global.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }