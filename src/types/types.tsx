export interface IUserAddress {
    street: string;
    city: string;
    suite: string;
}


export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IUserAddress
}