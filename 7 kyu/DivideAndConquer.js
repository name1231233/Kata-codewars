function divCon(x){
  let sum = 0;
  
  x.forEach(item => {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string') {
      sum -= parseInt(item, 10);
    }
  });
  
  return sum;
}
