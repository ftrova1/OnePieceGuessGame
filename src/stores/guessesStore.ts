import { create } from "zustand";
import { persist } from "zustand/middleware";
import answers from "../datasets/answerIds.json";
import options from "../datasets/charactersData.json";
import Character from "../types/character";
import useHighScoresStore from "./highScoresStore";

interface GuessesState {
  questionIndex: number;
  guessedCharacters: Character[];
  isGameFinished: boolean;
  silhouetteBlurAmount: number;
  setQuestionIndex: (index: number) => void;
  addGuess: (characterName: string) => void;
  removaAllGuesses: () => void;
}

const useGuessesStore = create<GuessesState>()(
  persist(
    (set, get) => ({
      questionIndex: 0,
      guessedCharacters: [],
      isGameFinished: false,
      silhouetteBlurAmount: 15,
      setQuestionIndex: (index) => set({ questionIndex: index }),
      addGuess: (characterName) => {
        // Prevent duplicate guesses
        if (
          get().guessedCharacters.some(
            (character) =>
              character.name.toLowerCase() === characterName.toLowerCase()
          )
        ) {
          return;
        }
        set((state) => ({
          guessedCharacters: [
            ...state.guessedCharacters,
            options.filter(
              (entry) =>
                entry.name.toLowerCase() === characterName.toLowerCase()
            )[0],
          ],
        }));
        if (
          characterName.toLowerCase() ==
          options
            .filter((option) => option.id === answers[get().questionIndex])[0]
            .name.toLowerCase()
        ) {
          set(() => ({
            isGameFinished: true,
            silhouetteBlurAmount: 0,
          }));
          useHighScoresStore
            .getState()
            .addScore(get().questionIndex, get().guessedCharacters.length);
        } else {
          set((state) => ({
            isGameFinished: false,
            silhouetteBlurAmount: state.silhouetteBlurAmount * (1 - 0.1),
          }));
        }
      },
      removaAllGuesses: () => set({ guessedCharacters: [] }),
    }),
    {
      name: "guesses-store",
    }
  )
);

export default useGuessesStore;
