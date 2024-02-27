"use client";

import answers from "@/datasets/answerIds.json";
import options from "@/datasets/charactersData.json";
import useGuessesStore from "@/stores/guessesStore";
import Character from "@/types/character";
import { getAnswerIdToday, getAnswerIndexToday } from "@/utils/timeUtilities";
import { useEffect } from "react";
import CharacterInput from "../CharacterInput";

const dayIndex = getAnswerIndexToday();
const correctAnswerId = getAnswerIdToday();

export default function ClassicMode() {
  useEffect(() => {
    localStorage.removeItem("guesses-store");
    localStorage.removeItem("high-scores-store");
    localStorage.removeItem("guesses-store-alpha");
    localStorage.removeItem("high-scores-store-alpha");
  }, []);

  const characters = options as Character[];
  const guessedCharacters: Character[] = useGuessesStore(
    (state) => state.guessedCharacters
  );
  const handleCharacterGuess = useGuessesStore((state) => state.addGuess);

  // Reset local storage if the date has changed
  const localQuestionIndex = useGuessesStore((state) => state.questionIndex);
  const setQuestionIndex = useGuessesStore((state) => state.setQuestionIndex);
  const removaAllGuesses = useGuessesStore((state) => state.removaAllGuesses);
  if (dayIndex !== localQuestionIndex) {
    setQuestionIndex(dayIndex);
    removaAllGuesses();
  }

  if (dayIndex < 0) {
    return (
      <div className="app h-full w-full min-h-screen text-white mt-8 text-center text-3xl">
        <em className="text-2xl text-red-600 font-extrabold">OPDLE</em>
        &nbsp;&nbsp;Season 1 coming soon!
        {/* <CountdownClock /> */}
      </div>
    );
  }
  return (
    <div className="app h-full w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="relative">
        {/* <PatchNotes /> */}
        <p>Patch Notes</p>
      </div>
      <header className="mb-4 pt-5 flex place-content-center">
        {/* <img src={DotadleLogo} alt="Dotadle Logo" /> */}
        <p>Logo</p>
      </header>
      {guessedCharacters.length === 0 && (
        <div className="container mx-auto p-2 border border-slate-200 bg-slate-800 w-80 rounded-md">
          <h2 className="text-slate-200 text-center font-bold text-xl">
            Guess today's One Piece character!
          </h2>
          <p className="text-slate-400 text-center font-semibold text-lg">
            Type any character to begin.
          </p>
        </div>
      )}
      {guessedCharacters.some(
        (character) =>
          character.id ==
          characters.filter((option) => option.id === correctAnswerId)[0].id
      ) && (
        <h2 className="mt-4 text-slate-200 text-2xl font-bold flex place-content-center">
          <p>VictoryModal</p>
          {/* <VictoryModal /> */}
        </h2>
      )}
      {
        // Display the input field only if the correct answer is not guessed yet
        !guessedCharacters.some(
          (character) =>
            character.id ==
            characters.filter((options) => options.id === correctAnswerId)[0].id
        ) && (
          <CharacterInput
            handleGuessSubmission={handleCharacterGuess}
            guessedCharacters={guessedCharacters}
          />
        )
      }
      {/* <GameBoard guessedCharacters={guessedCharacters} /> */}
      <div className="container mx-auto mb-2 p-2 border border-slate-200 bg-slate-800 w-80 rounded-md">
        <h2 className="text-slate-200 text-center font-bold text-xl">
          Color Guide
        </h2>
        <div className="flex justify-center items-center p-1">
          <p>Boxes</p>
          {/* <Box color={Colors.CORRECT} content="Correct" />
          <Box
            color={Colors.PARTIAL}
            content="Partially Correct"
            isMultiline={true}
          />
          <Box color={Colors.INCORRECT} content="Incorrect" /> */}
        </div>
      </div>
      {dayIndex !== 0 && (
        <p className="text-slate-300 text-center font-semibold text-md">
          Yesterday's character was{" "}
          <em className="text-sm text-amber-500">#{dayIndex}&nbsp;&nbsp;</em>
          <strong className="text-green-500 text-lg">
            {
              characters.filter(
                (option) => option.id === answers[dayIndex - 1]
              )[0]?.name
            }
          </strong>
        </p>
      )}
      <footer className="mt-auto p-2 text-slate-300 text-sm text-center">
        <strong className="text-sm font-bold">DOTADLE</strong> — Created by{" "}
        <a
          className="text-amber-600 hover:text-amber-500"
          href="https://github.com/leskaa"
        >
          @leskaa
        </a>{" "}
        <br />
        Heavily inspired by{" "}
        <a
          className="text-cyan-600 hover:text-cyan-500"
          href="https://loldle.net/"
        >
          LoLdle.net
        </a>{" "}
        —{" "}
        <a
          className="text-amber-600 hover:text-amber-500"
          href="https://www.reddit.com/r/DotA2/comments/2b2tjb/dota_2_background_incorporating_the_107_heroes/"
        >
          Background Attribution
        </a>
      </footer>
    </div>
    // <NextUIProvider>
    //   <>
    //     <Background>
    //       <MaxWidthWrapper className="mb-12 mt-28 sm:mt-20 flex flex-col items-center text-center">
    //         <div className="mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
    //           <p className="text-4xl font-semibold text-gray-700">Guess Who!</p>
    //         </div>
    //         <SilhouetteGuess />
    //       </MaxWidthWrapper>
    //     </Background>
    //   </>
    // </NextUIProvider>
  );
}
