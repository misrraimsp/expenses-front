import { Transfer } from './transfer';

xdescribe('Transfer', () => {
  it('should create an instance', () => {
    expect(new Transfer('ifn', 'iln', 'rfn', 'rln', 1)).toBeTruthy();
  });
});
