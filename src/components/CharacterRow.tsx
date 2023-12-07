import Image from "next/image";

export function CharacterRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-2 items-start">
      <Image
        alt={`${label}`}
        width={40}
        height={40}
        src={`/images/chars/${value}.webp`}
        className="border-2 border-black rounded-md"
      />
      <div className="flex flex-col ml-3">
        <span className="text-4xl font-bold">{label}</span>
      </div>
    </div>
  );
}
