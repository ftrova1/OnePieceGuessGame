import Image from "next/image";

export function CharacterRow({ character }: { character: any }) {
  return (
    <div className="flex items-center">
      <Image
        id={`charImg_${character.id}`}
        alt={`${character.name}`}
        width={40}
        height={40}
        src={`${character.imgPayload}`}
        className="border-2 border-black rounded-md"
      />
      <div className="flex flex-col ml-3">
        <span className="text-4xl font-bold">{character.name}</span>
      </div>
    </div>
  );
}
