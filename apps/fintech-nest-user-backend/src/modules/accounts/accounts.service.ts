import { Injectable, NotFoundException } from '@nestjs/common';
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
    getUserAccount(accoundId: string): Account {
        const account = this.accounts.find(account => account.id === accoundId);
        if (!account) throw new NotFoundException('Account not found');
        return account;
    }

    getUserAccounts(userId: string): Account[] {
        return this.accounts.filter(account => account.userId === userId);
    }

    updateBalance(accountId: string, amount: number): Account {
        const account = this.accounts.find(account => account.id === accountId);
        if (!account) throw new NotFoundException('Account not found');
        account.balance += amount;
        account.updatedAt = new Date();
        return account;
    }

    closeAccount(accountId: string): boolean {
        const index = this.accounts.findIndex(account => account.id === accountId);
        if (index !== -1) {
            this.accounts.splice(index, 1);
            return true;
        }
        throw new NotFoundException('Account not found');
    }
}
