"use client";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { withSpeechSynthesis } from "../hocs/withSpeechSynthesis";

type Props = {
  textToSpeech: string;
  children: ReactElement;
  handleVoice: (text: string) => void;
};

const SpeechButton = ({ textToSpeech, children, handleVoice }: Props) => {
  const [label, setLabel] = useState(null);

  useEffect(() => {
    setLabel(children);
  }, [children]);
  return <button onClick={() => handleVoice(textToSpeech)}>{label}</button>;
};

export default withSpeechSynthesis(SpeechButton);
