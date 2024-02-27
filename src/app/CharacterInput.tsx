"use client";

import Character from "@/types/character";
import React, { cache, useEffect, useState } from "react";
import { fetchCharacters } from "./actions";

type CharacterInputProps = {
  handleGuessSubmission: (characterName: string) => void;
  guessedCharacters: Character[];
};

type Option = {
  id: number;
  createdAt: string;
  name: string;
  imgPayload: string;
};

const CharacterInput = ({
  handleGuessSubmission,
  guessedCharacters,
}: CharacterInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  useEffect(() => {
    const fetchOptions = cache(async () => {
      const options = await fetchCharacters();
      setOptions(options);
    });

    fetchOptions();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const filteredOptions = options.filter(
      (option) =>
        // Remove characters that are already guessed from the suggestions
        !guessedCharacters.some((character) => character.id === option.id) &&
        // Filter options based on the input value
        option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
    setShowOptions(true);
  };

  const handleOnFocus = () => {
    const guessesRemovedOptions = filteredOptions.filter(
      (option) =>
        // Remove hereos that are already guessed from the suggestions
        !guessedCharacters.some((character) => character.id === option.id)
    );
    setFilteredOptions(guessesRemovedOptions);
    setShowOptions(true);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      options.filter(
        (option) => option.name.toLowerCase() === inputValue.toLowerCase()
      ).length > 0
    ) {
      const guessText = inputValue;
      setInputValue("");
      setShowOptions(false);
      handleGuessSubmission(guessText);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (
      options.filter(
        (option) => option.name.toLowerCase() === inputValue.toLowerCase()
      ).length > 0
    ) {
      const guessText = inputValue;
      setInputValue("");
      setShowOptions(false);
      handleGuessSubmission(guessText);
    } else {
      console.log("Invalid character name!");
      return;
    }
    event.preventDefault();
  };

  const handleOptionMouseDown = (event: React.MouseEvent<HTMLLIElement>) => {
    const optionValue = event.currentTarget.getAttribute("data-value")!;
    setInputValue(optionValue);
    if (
      options.filter(
        (option) => option.name.toLowerCase() === optionValue.toLowerCase()
      ).length > 0
    ) {
      const guessText = optionValue;
      setInputValue("");
      setShowOptions(false);
      handleGuessSubmission(guessText);
    } else {
      // console.log("Invalid character name!");
      return;
    }
    event.preventDefault();
  };

  const handleInputBlur = () => {
    setShowOptions(false);
  };

  return (
    <div className="w-64 sm:w-80 relative select-container mb-10 mt-8 mx-auto font-bold">
      <input
        type="text"
        value={inputValue}
        placeholder="Type character's name..."
        onChange={handleInputChange}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
        onBlur={handleInputBlur}
        className="w-full h-12 px-4 py-2 border-2 bg-white border-gray-700 text-slate-950 rounded-full shadow-sm focus:outline-none focus:ring-amber-600 focus:border-amber-600 sm:text-sm md:text-2xl font-bold"
      />
      <div className="absolute top-2 right-2">
        <a onClick={handleButtonClick}>
          <svg
            className="fill-slate-700 hover:fill-slate-950 active:fill-amber-600 w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
        </a>
      </div>
      {showOptions && (
        <ul className="absolute z-20 w-full py-1 mt-1 overflow-auto bg-transparent rounded-md shadow-lg max-h-60 flex flex-col items-center">
          {filteredOptions
            .sort((a, b) => ("" + a.name).localeCompare(b.name))
            .map((option) => (
              <li
                key={option.id}
                data-value={option.name}
                onMouseDown={handleOptionMouseDown}
                className="rounded-lg w-full m-0 p-2 flex flex-row justify-start items-start gap-1 border-2 border-black bg-white hover:bg-slate-500
                    text-4xl font-bold cursor-pointer"
              >
                <img
                  src={`${option.imgPayload}`}
                  alt={option.name}
                  className="border-2 border-black rounded-md"
                ></img>
                {option.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterInput;
function fetchBlogPost() {
  throw new Error("Function not implemented.");
}

function setFilteredOptions(filteredOptions: any) {
  throw new Error("Function not implemented.");
}

function setShowOptions(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setInputValue(arg0: string) {
  throw new Error("Function not implemented.");
}

function handleGuessSubmission(guessText: any) {
  throw new Error("Function not implemented.");
}
