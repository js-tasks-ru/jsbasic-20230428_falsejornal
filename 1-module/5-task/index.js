function truncate(str, maxlength) {
  if (str.length > maxlength)
  {
    return str= str.slice(0 , --maxlength)+ '…';
  }
    return str;
}
