"use server";
import supabase from "@/lib/supabase-browser";
import Character from "@/types/character";
import "server-only";

export const fetchCharacters = async () => {
  const { data } = await supabase.from("characters").select();

  let result: Character[] = [];
  if (data && data.length > 0) {
    result = data.map((c) => ({
      id: c.id,
      name: c.name!,
      createdAt: c.created_at,
      imgPayload: c.img_payload!,
    }));
  }
  return result;
};
