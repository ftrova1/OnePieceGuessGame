import { CharacterRow } from "./CharacterRow";
import { Answer } from "./SilhouetteGuess";

export function GuessedAnswers({ answers }: { answers: Answer[] }) {
  return (
    <div className="mt-4 w-1/3 answers-container flex flex-col-reverse">
      {answers.map((answer) => (
        <div
          key={answer.characterName}
          className={`w-full rounded-medium text-4xl font-bold m-1 p-2 flex flex-row justify-start items-start cursor-default gap-1 border-black border-4 ${
            answer.isCorrect ? "bg-correct" : "bg-incorrect"
          }`}
        >
          <CharacterRow
            label={answer.characterName}
            value={answer.characterName}
          ></CharacterRow>
        </div>
      ))}
    </div>
  );
}
