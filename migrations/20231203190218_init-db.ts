import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("characters", (table) => {
    table.string("id", 25).primary;
    table.string("name", 255).notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("appearedAt").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("characters");
}
