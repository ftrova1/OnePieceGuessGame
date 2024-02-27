import Character from "@/types/character";
import { getAnswerIdToday } from "@/utils/timeUtilities";
import "animate.css";
import { CharacterRow } from "./CharacterRow";
import options from "@/datasets/charactersData.json";

type GuessedAnswersProps = {
  guessedCharacters: Character[];
};

const correctAnswerId = getAnswerIdToday();

export function GuessedAnswers({ guessedCharacters }: GuessedAnswersProps) {
  const correctAnswer: Character = options.filter(
    (option) => option.id === correctAnswerId
  )[0];
  return (
    <div className="mb-10 mt-4 w-1/3 answers-container flex flex-col-reverse">
      {guessedCharacters.map((character) => (
        <div
          key={character.name}
          className={`w-full rounded-medium text-4xl font-bold m-1 p-2 flex flex-row justify-start items-start cursor-default gap-1 border-black border-4 ${
            character.id === correctAnswer.id
              ? "bg-correct animate__animated animate__tada"
              : "bg-incorrect"
          }`}
        >
          <CharacterRow character={character}></CharacterRow>
        </div>
      ))}
    </div>
  );
}
