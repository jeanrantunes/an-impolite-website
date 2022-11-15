import React from "react";
const LAUNCH = "ha ha ha ha ha ha ha";
const RATE = 0.9;

export const withSpeechSynthesis = (Component: React.ElementType) => {
  const isClient = typeof window !== "undefined";

  const HoC = (props: any) => {
    if (!isClient || !("speechSynthesis" in window)) {
      return <Component />;
    }

    const synth = window?.speechSynthesis;

    function laugh() {
      const utterThis = new SpeechSynthesisUtterance(LAUNCH);
      synth.speak(utterThis);
    }

    function handleVoice(text: string) {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.rate = RATE;

      synth.speak(utterThis);
      laugh();
    }

    return <Component handleVoice={handleVoice} {...props} />;
  };

  return HoC;
};
