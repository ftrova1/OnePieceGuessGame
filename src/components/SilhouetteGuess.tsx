"use client";

import CharacterInput from "@/app/CharacterInput";
import useGuessesStore from "@/stores/guessesStore";
import Character from "@/types/character";
import { getAnswerIndexToday } from "@/utils/timeUtilities";
import { GuessedAnswers } from "./GuessedAnswers";
import { SilhouetteForm } from "./SilhouetteForm";

const dayIndex = getAnswerIndexToday();

export function SilhouetteGuess() {
  // Reset local storage if the date has changed
  const localQuestionIndex = useGuessesStore((state) => state.questionIndex);
  const setQuestionIndex = useGuessesStore((state) => state.setQuestionIndex);
  const removaAllGuesses = useGuessesStore((state) => state.removaAllGuesses);
  if (dayIndex !== localQuestionIndex) {
    setQuestionIndex(dayIndex);
    removaAllGuesses();
  }

  const blurAmount: number = useGuessesStore((state) => {
    return state.silhouetteBlurAmount;
  });
  const guessedCharacters: Character[] = useGuessesStore(
    (state) => state.guessedCharacters
  );

  const handleCharacterGuess = useGuessesStore((state) => state.addGuess);

  return (
    <>
      <div className="flex-col bg-red-500 border-2 border-gray-200 text-center text-white items-center justify-center p-4">
        <SilhouetteForm blurAmount={blurAmount} />
      </div>
      <div className="select-container mb-10 mt-8">
        <CharacterInput
          handleGuessSubmission={handleCharacterGuess}
          guessedCharacters={guessedCharacters}
        />
      </div>
      <GuessedAnswers guessedCharacters={guessedCharacters} />
    </>
  );
}
