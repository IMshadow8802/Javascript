function repeatStringNumTimes(str, num)
{

    var repeatedString = "";
    if(num > 0)
    {
        for(i=0;i<num;i++)
        {
          repeatedString += str;
        }    
    }
  return repeatedString ;
}

console.log
(repeatStringNumTimes("abc", 3));
