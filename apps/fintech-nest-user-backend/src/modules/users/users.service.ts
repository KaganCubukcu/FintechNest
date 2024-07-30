import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './Dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }
    
    getUser(id: string): User {
        return this.users.find(user => user.id === id) || null;
    }
    
    createUser(createUserDto: CreateUserDto): User {
       const newUser: User = {
        ...createUserDto,
        id: uuidv4(),
        lastLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
       }
       this.users.push(newUser);
       return newUser;
    }

    updateUser(id: string, updatedUser: Partial<User>): User {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return null;
        }
        const user = this.users[userIndex];
        this.users[userIndex] = { ...user, ...updatedUser, id: user.id };
        return this.users[userIndex];
    }

    removeUser(id: string): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return false;
        }
        this.users.splice(userIndex, 1);
        return true;
    }

    findByEmail(email: string): User {
        return this.users.find(user => user.email === email) || null;
    }

}
