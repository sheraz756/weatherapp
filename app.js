function onCheck()
{
    let temp = parseInt(document.querySelector("#temp").value);
    if(temp<10)
    {
        document.querySelector("#result").innerHTML = "its too cold wear double jacket outside:";
    }
   else if(temp<20)
    {
        document.querySelector("#result").innerHTML = "its cold wear a jacket";
    }
   else if(temp<30)
    {
        document.querySelector("#result").innerHTML = "no need of jacket:";
    }
   else if(temp<40)
    {
        document.querySelector("#result").innerHTML = "be carefull its heat out side:";
    }
  else if(temp<50)
    {
        document.querySelector("#result").innerHTML = "avoid for going outside its too much heat:";
    }
   else if(temp>50)
    {
        document.querySelector("#result").innerHTML = "don't go to out side it will be danger:";
    }
}