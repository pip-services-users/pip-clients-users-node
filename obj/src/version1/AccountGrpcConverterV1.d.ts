import { DataPage } from 'pip-services3-commons-node';
import { AccountV1 } from './AccountV1';
export declare class AccountGrpcConverterV1 {
    static fromError(err: any): any;
    static toError(obj: any): any;
    static setMap(map: any, values: any): void;
    static getMap(map: any): any;
    private static toJson;
    private static fromJson;
    static fromAccount(account: AccountV1): any;
    static toAccount(obj: any): AccountV1;
    static fromAccountPage(page: DataPage<AccountV1>): any;
    static toAccountPage(obj: any): DataPage<AccountV1>;
}