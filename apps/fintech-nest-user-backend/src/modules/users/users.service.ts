import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }
    
    getUser(id: string): User {
        return this.users.find(user => user.id === id) || null;
    }
    
    createUser(user: User): void {
        this.users.push(user);
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
}
