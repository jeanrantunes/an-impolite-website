import SpeechButton from "../../components/SpeechButton";

async function getData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    }).then((response) => response.json());
    return { joke: response.joke };
  } catch (error) {
    console.error(error);
    return { joke: null };
  }
}

export default async function RandomJokes() {
  const { joke } = await getData();
  return (
    <>
      <p>{joke}</p>
      <SpeechButton text={joke} />
    </>
  );
}
