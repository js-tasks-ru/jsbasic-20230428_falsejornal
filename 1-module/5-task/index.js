function truncate(str, maxlength) {
  if (str.length > maxlength)
  {
    let short_str= str.slice(0 , --maxlength);
    
    return short_str + '…';
  }
  else
  {
    return str;
  }
}
