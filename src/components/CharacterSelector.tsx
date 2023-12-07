import { checkGuessedCharacter } from "@/app/actions";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Key } from "react";
import { CharacterRow } from "./CharacterRow";

const options = [
  {
    label: "Chopper",
    value: "chopper",
  },
  {
    label: "Nami",
    value: "nami",
  },
  {
    label: "Luffy",
    value: "luffy",
  },
  {
    label: "Zoro",
    value: "zoro",
  },
];

export function CharacterSelector({
  addAnswer,
  gameFinished,
}: {
  addAnswer: any;
  gameFinished: boolean;
}) {
  const onSelectionChange = async (guessedName: Key) => {
    if (guessedName == null) return;
    guessedName = guessedName.toString();
    const isCorrect = await checkGuessedCharacter(guessedName);
    const answer = {
      characterName: guessedName,
      isCorrect: isCorrect,
    };
    addAnswer(answer);
  };

  return (
    <div className="select-container mb-10 mt-8">
      <Autocomplete
        clearIcon={null}
        selectorIcon={null}
        isDisabled={gameFinished}
        className="max-w-fit mx-auto font-bold"
        label=""
        placeholder="Type a character's name..."
        showScrollIndicators
        onSelectionChange={onSelectionChange}
        name="guessedName"
        aria-label="Character's name"
        id="guessedName"
        menuTrigger="input"
        inputProps={{
          classNames: {
            input:
              "mx-auto text-black text-3xl flex space-x-2 overflow-hidden outline-none text-left",
            inputWrapper:
              "rounded-full items-center border-2 border-black bg-white px-7 py-2 ",
          },
        }}
        popoverProps={{
          offset: 0,
        }}
        listboxProps={{
          classNames: {
            emptyContent:
              "rounded-medium w-full m-0 p-2 flex flex-row justify-start items-start cursor-default gap-1 border-2 border-black bg-white text-2xl font-bold",
          },
          hideSelectedIcon: true,
          itemClasses: {
            base: ["rounded-medium", "data-[hover=true]:bg-default-400"],
          },
        }}
      >
        {options.map((option) => (
          <AutocompleteItem
            key={option.label}
            value={option.value}
            textValue={option.label}
            className="w-full m-0 p-2 flex flex-row justify-start items-start cursor-default gap-1 border-2 border-black bg-white"
          >
            <CharacterRow
              label={option.label}
              value={option.value}
            ></CharacterRow>
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
