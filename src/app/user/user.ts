export class User {
  constructor(
    public id?: number,
    public firstname?: string,
    public suffix?: string,
    public lastname?: string,
    public zipcode?: string,
    public street?: string,
    public email?: string,
    public password?: string,
    public role?: string)
  { }
}
