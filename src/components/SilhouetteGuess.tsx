"use client";

import { useEffect, useState } from "react";
import { CharacterSelector } from "./CharacterSelector";
import { GuessedAnswers } from "./GuessedAnswers";
import { SilhouetteForm } from "./SilhouetteForm";

export type Answer = {
  characterName: string;
  isCorrect: boolean;
};

export function SilhouetteGuess() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [blurAmount, setBlurAmount] = useState<number>(15);

  const addAnswer = (answer: Answer) => {
    if (answer.characterName == answers.at(-1)?.characterName) return;
    setAnswers((prev) => [...prev, answer]);
    setGameFinished(answer.isCorrect);
    setBlurAmount(blurAmount - blurAmount * 0.1);
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  useEffect(() => {
    const savedAnswers = localStorage.getItem("answers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    if (gameFinished) setBlurAmount(0);
  }, [gameFinished]);

  return (
    <>
      <div className="flex-col bg-red-500 border-2 border-gray-200 text-center text-white items-center justify-center p-4">
        <SilhouetteForm blurAmount={blurAmount} />
      </div>
      <CharacterSelector addAnswer={addAnswer} gameFinished={gameFinished} />
      <GuessedAnswers answers={answers} />
    </>
  );
}
