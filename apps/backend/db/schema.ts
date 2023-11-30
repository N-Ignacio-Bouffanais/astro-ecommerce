import {
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email'),
  password: text('password'),
  role: text('role').$type<'admin' | 'customer'>(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
