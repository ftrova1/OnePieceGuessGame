import CharacterInput from "@/app/CharacterInput";
import useGuessesStore from "@/stores/guessesStore";
import Character from "@/types/character";

export default function CharacterSelector() {
  const guessedCharacters: Character[] = useGuessesStore(
    (state) => state.guessedCharacters
  );
  const handleCharacterGuess = useGuessesStore((state) => state.addGuess);

  return (
    <div className="select-container mb-10 mt-8">
      {/* <CharacterInput
        handleGuessSubmission={handleCharacterGuess}
        guessedCharacters={guessedCharacters}
      /> */}
    </div>
  );
}
