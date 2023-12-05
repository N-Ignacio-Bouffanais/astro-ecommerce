import { Module, Global } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';

@Global()
@Module({
  providers: [DrizzleService],
})
export class DrizzleModule {}
