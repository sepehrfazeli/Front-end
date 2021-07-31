function fac(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * fac(num - 1);
  }
}

const xx = (x,length) => {
  let result = 1  - x ;
  for (let index = 2; index < length+1; index++) {
    const pn = index % 2 === 0 ? 1 : -1;
    result += pn * (Math.pow(x,index)/fac(index))
  }
  return result;
};

console.log(xx(1,5))
