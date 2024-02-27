import { getAnswerIdToday } from "@/utils/timeUtilities";
import Image from "next/image";

const correctAnswerId = getAnswerIdToday();

export function SilhouetteForm({ blurAmount }: { blurAmount: number }) {
  return (
    <>
      <p className="text-3xl drop-shadow-2xl mt-2">
        Guess today's <span className="text-5xl text-">One Piece</span>{" "}
        character!
      </p>
      <p className="text-2xl drop-shadow-2xl my-2">Which character is this?</p>
      <div className="mt-4 h-64 relative mx-4 my-2 rounded-full">
        <Image
          src={`https://lyfugntetmkheskodbot.supabase.co/storage/v1/object/public/OPGuessGame/silhouette/${correctAnswerId}.webp`}
          // src={`${correctAnswer.imgPayload}`}
          alt="Character's silhouette"
          fill
          className="max-w-fit max-h-fit rounded-xl m-auto border-2 border-black"
          sizes="100vw"
          style={{ filter: `blur(${blurAmount}px)` }}
        />
      </div>
    </>
  );
}
