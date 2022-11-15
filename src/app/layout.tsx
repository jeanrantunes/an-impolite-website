import { Header } from "../components/Header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>An impolite page</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
