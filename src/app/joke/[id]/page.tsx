import SpeechButton from "../../../components/SpeechButton";
import { Card, CardActions } from "../../../components/Card";
import Link from "next/link";

async function getData(id: string) {
  try {
    const response = await fetch(`https://icanhazdadjoke.com/j/${id}`, {
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

export default async function JokeDetail({
  params,
}: {
  params: { id: string };
}) {
  const { joke } = await getData(params?.id);
  return (
    <Card>
      <>
        <h3>{joke}</h3>
        <CardActions>
          <>
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
