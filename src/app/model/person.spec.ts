import { Person } from './person';

xdescribe('Person', () => {
  it('should create an instance', () => {
    expect(new Person('firstname', 'lastname')).toBeTruthy();
  });
});
