import Link from "next/link";
import { Logo } from "./Logo";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <header className={style.header}>
          <Link href="/">
            <Logo />
          </Link>

          <nav>
            <ul className={style.links}>
              <li>
                <Link href="/joke/random">Tell me a joke</Link>
              </li>
              <li>
                <Link href="/insult/random">Insult me</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};
