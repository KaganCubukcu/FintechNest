import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { CreateUserDto } from './Dto/create-user.dto';
import { AccountsService } from '../accounts/accounts.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly accountsService: AccountsService) {}

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: string): User {
        return this.usersService.getUser(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
       const newUser = this.usersService.createUser(createUserDto);
       const newAccount = await this.accountsService.createAccount(newUser.id);
       return { user: newUser, account: newAccount };
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updatedUser: Partial<User>): User {
        return this.usersService.updateUser(id, updatedUser);
    }

    @Delete(':id')
    removeUser(@Param('id') id: string): boolean {
        return this.usersService.removeUser(id);
    }
}
