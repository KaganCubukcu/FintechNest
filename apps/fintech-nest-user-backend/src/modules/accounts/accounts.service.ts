import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Account } from './account.interface';

@Injectable()
export class AccountsService {
    private readonly accounts: Account[] = [];

    async createAccount(userId: string): Promise<Account> {
        const newAccount: Account = {
            id: uuidv4(),
            userId,
            accountNumber: Math.random().toString(36).slice(2, 10).toUpperCase(),
            balance: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.accounts.push(newAccount);
        return newAccount;
    }
}
