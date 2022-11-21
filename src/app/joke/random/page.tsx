import { Card, CardActions } from "../../../components/Card";
import SpeechButton from "../../../components/SpeechButton";
import Link from "next/link";

async function getData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    }).then((response) => response.json());
    return { ...response };
  } catch (error) {
    console.error(error);
    return { joke: null };
  }
}

export default async function RandomJokes() {
  const { joke, id } = await getData();

  return (
    <Card>
      <>
        <h3>{joke}</h3>
        <CardActions>
          <>
            <Link href={`/joke/${id}`}>Permalink</Link>
            <SpeechButton textToSpeech={joke}>Listen this joke</SpeechButton>

            <Link href="/joke/random" as="/joke/random">
              Generate a new joke
            </Link>
          </>
        </CardActions>
      </>
    </Card>
  );
}
