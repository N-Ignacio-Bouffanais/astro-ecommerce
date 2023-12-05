import { Module, Global } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { DATABASE_CONNECTION_KEY } from './database.decorator';
import { DatabaseService } from './database.service';
import { schema } from 'src/database/schema';

@Global()
@Module({
  providers: [
    DatabaseService,
    {
      provide: DATABASE_CONNECTION_KEY,
      inject: [DatabaseService],
      useFactory: async (
        databaseService: DatabaseService,
      ): Promise<PostgresJsDatabase<typeof schema>> => {
        return databaseService.getDB();
      },
    },
  ],
})
export class DatabaseModule {}
