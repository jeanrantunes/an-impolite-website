import type { ReactElement } from "react";
import "../styles/globals.css";
import { Header } from "../components/Header";

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>An impolite website</title>
      </head>
      <body>
        <Header />
        <main style={{ position: "relative" }}>{children}</main>
      </body>
    </html>
  );
}
