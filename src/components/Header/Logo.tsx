import Image from "next/image";
import logo from "../../svg/logo.svg";

export const Logo = () => {
  return <Image src="/logo.svg" alt="Website logo" width={50} height={50} />;
};
