import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';
import { IAccountsClientV1 } from './IAccountsClientV1';
import { IAccountsBusinessLogic } from 'pip-services-accounts-node';
import { AccountV1 } from './AccountV1';
export declare class AccountsDirectClientV1 extends DirectClient<IAccountsBusinessLogic> implements IAccountsClientV1 {
    constructor();
    getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<AccountV1>) => void): void;
    getAccountById(correlationId: string, id: string, callback: (err: any, account: AccountV1) => void): void;
    getAccountByLogin(correlationId: string, login: string, callback: (err: any, account: AccountV1) => void): void;
    getAccountByIdOrLogin(correlationId: string, idOrLogin: string, callback: (err: any, account: AccountV1) => void): void;
    createAccount(correlationId: string, account: AccountV1, callback: (err: any, account: AccountV1) => void): void;
    updateAccount(correlationId: string, account: AccountV1, callback: (err: any, account: AccountV1) => void): void;
    deleteAccountById(correlationId: string, id: string, callback: (err: any, account: AccountV1) => void): void;
}
