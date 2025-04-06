import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Schema for the prompts table
 * - id: Auto-incrementing primary key
 * - name: Name of the prompt
 * - description: Short description of what the prompt does
 * - content: The actual prompt text
 * - created_at: Timestamp of when the prompt was created
 * - updated_at: Timestamp of when the prompt was last updated (automatically updates)
 */
export const prompts = pgTable("prompts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});
