import { Card, CardActions } from "../../../components/Card";
import SpeechButton from "../../../components/SpeechButton";
import Link from "next/link";

async function getData() {
  try {
    const params = new URLSearchParams({
      lang: "en",
      type: "json",
    });

    const response = await fetch(
      `https://evilinsult.coasdasdm/generate_insult.php?${params}`
    ).then((response) => response.json());
    return { ...response };
  } catch (error) {
    console.error(error);
    return { insult: null };
  }
}

export default async function RandomInsults() {
  const { insult, number } = await getData();

  return (
    <Card>
      <>
        <h3>{insult}</h3>
        <CardActions>
          <>
            <SpeechButton textToSpeech={insult}>
              Listen this insult
            </SpeechButton>

            <Link href="/insult/random" as="/insult/random">
              Generate a new insult
            </Link>
          </>
        </CardActions>
      </>
    </Card>
  );
}
