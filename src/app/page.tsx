import Image from "next/image";
export default function Page() {
  return (
    <>
      <h1>An impolite website</h1>
      <Image
        src="https://api.memegen.link/images/buzz/This_website_is_suppose_to_be_funny/so_enjoy_it.gif"
        width={700}
        height={475}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="git with message: This website is suppose to be funny, so enjoy it."
      />
    </>
  );
}
