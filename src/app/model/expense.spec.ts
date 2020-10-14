import { Expense } from './expense';

xdescribe('Expense', () => {
  it('should create an instance', () => {
    expect(new Expense( 1, 1, 'test')).toBeTruthy();
  });
});
