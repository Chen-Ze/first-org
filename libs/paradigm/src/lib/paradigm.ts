import * as R from 'ramda';

export function paradigm() {
  const iden = R.map(R.identity, [1,2,3]);

  return iden;
}

export const fnCond = R.cond([
  [R.equals(0),   R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T,              (temp: number) => 'nothing special happens at ' + temp + '°C']
]);

