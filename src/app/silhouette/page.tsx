"use client";

import Background from "@/components/Background";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SilhouetteGuess } from "@/components/SilhouetteGuess";
import { NextUIProvider } from "@nextui-org/react";

export default function SilhouetteMode() {
  return (
    <NextUIProvider>
      <>
        <Background>
          <MaxWidthWrapper className="mb-12 mt-28 sm:mt-20 flex flex-col items-center text-center">
            <div className="mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="text-4xl font-semibold text-gray-700">Guess Who!</p>
            </div>
            <SilhouetteGuess />
          </MaxWidthWrapper>
        </Background>
      </>
    </NextUIProvider>
  );
}
