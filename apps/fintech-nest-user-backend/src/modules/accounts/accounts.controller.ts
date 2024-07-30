import { Get, Post, Put, Delete, Param, Body, Controller } from '@nestjs/common';
import { Account } from './account.interface';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get(':id')
    getUserAccount(@Param('id') id: string): Account {
        return this.accountsService.getUserAccount(id);
    }

    @Get('user/:userId')
    getUserAccounts(@Param('userId') userId: string): Account[] {
        return this.accountsService.getUserAccounts(userId);
    }

    @Post('user/:userId')
    async createAccount(@Param('userId') userId: string): Promise<Account> {
        return this.accountsService.createAccount(userId);
    }

    @Put(':id/balance')
    updateBalance(@Param('id') id: string, @Body('balance') balance: number): Account {
        return this.accountsService.updateBalance(id, balance);
    }

    @Delete(':id')
    closeAccount(@Param('id') id: string): boolean {
        return this.accountsService.closeAccount(id);
    }
}

