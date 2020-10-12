export class Transfer {
  constructor(
    public issuerFirstName: string,
    public issuerLastName: string,
    public recipientFirstName: string,
    public recipientLastName: string,
    public amount: number) {
  }
}
