import type { ReactElement } from "react";
import style from "./CardActions.module.css";

type Props = {
  children: ReactElement;
};

export const CardActions = ({ children }: Props) => {
  return <div className={style.wrapper}>{children}</div>;
};
