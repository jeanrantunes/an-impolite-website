import style from "./Card.module.css";
import type { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const Card = ({ children }: Props) => {
  return <div className={style.box}>{children}</div>;
};
