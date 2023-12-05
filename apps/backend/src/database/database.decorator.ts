import { Inject } from '@nestjs/common';

export const DATABASE_CONNECTION_KEY = 'KEY_1KJ342KJ32KHF343';

export function InjectDatabase() {
  return Inject(DATABASE_CONNECTION_KEY);
}
