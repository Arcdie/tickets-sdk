import { isLeft, left, Left, Either } from 'fp-ts/lib/Either';
import { getFileStat } from '../libs/fp-ts';

(async (val: Either<number, never>) => {
  const value = left(1);
  
  if (isLeft(value)) {
    value;

    if (isLeft(value)) {
      value;
    }
  }

  if (isLeft(value)) {
    console.log('value', value.left); 
  }

  /*
  const fileStat = await getFileStat('./package.json')();

  if (isLeft(fileStat)) {
    console.log('left', fileStat.left);
  } else {
    console.log('right', fileStat.right);
  }
  */
})(left(1));
