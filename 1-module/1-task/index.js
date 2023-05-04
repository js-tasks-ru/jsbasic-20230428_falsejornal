function factorial(n) {
  let factorial= 1;
  
  if(n === 0 || n === 1) 
  {
    return factorial;
  }
  else
  {
      let count= 1;
      factorial*= n
      while(count < n)
      {
          factorial*= n - count;
          ++count;
      }
      return factorial;
  }
}
