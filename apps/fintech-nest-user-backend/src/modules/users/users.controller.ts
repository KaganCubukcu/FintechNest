import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: string): User {
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() user: User): void {
        this.usersService.createUser(user);
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
