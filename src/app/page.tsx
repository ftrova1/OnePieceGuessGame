"use client";

import Background from "@/components/Background";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import { StrictMode } from "react";

export default function MainMenu() {
  return (
    <NextUIProvider>
      <StrictMode>
        <Background>
          <MaxWidthWrapper className="mb-12 mt-28 sm:mt-20 flex flex-col items-center text-center">
            <div className="mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="text-4xl font-semibold text-gray-700">Guess Who!</p>
            </div>
            <div id="menu" className="top animate__animated animate__fadeIn">
              <div className="buttons-container">
                <Link href="/classic" shallow>
                  <div className="button-game cursor-pointer">
                    <img src="/images/menu_sign.png" width="100%"></img>
                    <div className="button-title">Classico</div>
                    <div className="button-description">
                      Un indizio ad ogni tentativo
                    </div>
                  </div>
                </Link>
                <Link href="/silhouette" shallow>
                  <div className="button-game cursor-pointer">
                    <img src="/images/menu_sign.png" width="100%"></img>
                    <div className="button-title">Silhouette</div>
                    <div className="button-description">
                      Altra modalità a caso
                    </div>
                  </div>
                </Link>
                <div className="button-game cursor-pointer">
                  <img src="/images/menu_sign.png" width="100%"></img>
                  <div className="button-title">Trafalgar</div>
                  <div className="button-description">Non so cosa scrivere</div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </Background>
      </StrictMode>
    </NextUIProvider>
  );
}
