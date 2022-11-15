"use client";

import { withSpeechSynthesis } from "../hocs/withSpeechSynthesis";

type Props = {
  text: string;
  handleVoice: (text: string) => void;
};

const SpeechButton = ({ text, handleVoice }: Props) => {
  return <button onClick={() => handleVoice(text)}>Listen the joke</button>;
};

export default withSpeechSynthesis(SpeechButton);
