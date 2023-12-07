"use server";

export async function checkGuessedCharacter(guessedName: string) {
  return guessedName.toLowerCase() == "chopper";
  //   try {
  //     await sql`
  //       INSERT INTO todos (text)
  //       VALUES (${data.todo})
  //     `;

  //     revalidatePath("/");
  //     return { message: `Added todo ${data.todo}` };
  //   } catch (e) {
  //     return { message: "Failed to create todo" };
  //   }
}
