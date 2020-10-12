
export class Expense {

  constructor(
    public amount: number,
    public payerId: number,
    public description: string,
    public id?: number,
    public payerFirstName?: string,
    public payerLastName?: string,
    public date?: string) {}
}
