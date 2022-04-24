export interface IUser {
    username: string,
    password: string,
    email?: string,
    repeatPassword?: string,
    gender?: string,
    isAdmin?: boolean
}
