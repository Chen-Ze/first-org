import {fnCond, paradigm} from './paradigm';

describe('paradigm', () => {
  it('should work', () => {
    expect(paradigm()).toEqual([1,2,3]);
  });
  it('should get temp correct', () => {
    expect(fnCond(0)).toEqual('water freezes at 0°C');
    expect(fnCond(50)).toEqual('nothing special happens at 50°C');
    expect(fnCond(100)).toEqual('water boils at 100°C');
  });
});
