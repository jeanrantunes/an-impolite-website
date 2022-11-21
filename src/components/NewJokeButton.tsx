"use client";

import { useRouter } from "next/router";

export const NewJokeButton = () => {
  const router = useRouter();
  return <button onClick={() => router?.reload()}>Generate a new one</button>;
};
