import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AccountsService } from '../accounts/accounts.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AccountsService]
})
export class UsersModule {}
