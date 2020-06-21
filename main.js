//== Task 21-25 ===//

function greetUser() {
    var txt;
    var fname = prompt("Please enter First Name:", "Your Name");
    var lname = prompt("Please enter Last Name:", "Your Name");
      var fullName = fname + lname;
    if (fullName == null || fname == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + fname + "" + lname + "! How are you today?";
    }
    document.getElementById("greet").innerHTML = txt;
  }
  
  function myFavmbl() {
  
  var mbl = prompt("Enter Your Favorite Moblie Name:", "Your Fav Mbl Name");
    var n = mbl.length;
    
   document.getElementById("mob").innerHTML = " My Favorite Phone is: " + mbl + "<br />"+ "Length Of The String: "+ n;
  }
  
  function myIndex() {
    var str = "Pakistani";
    var n = str.indexOf("n");
   document.getElementById("check").innerHTML = " String: " + str + "<br />"+ "Index of n is: "+ n;
   }
   
   function myIndextwo() {
    var str = "Hello World!";
    var l = str.lastIndexOf("l");
   document.getElementById("chek").innerHTML = " String: " + str + "<br />"+ "Index of l is: "+ l;
   }
   
   function myIndexvalue() {
    var str = "Pakistani";
    var res = str.charAt(3)
    document.getElementById("click").innerHTML = " String: " + str + "<br />"+ " Character Of Index 3rd is: " + res;
  }
   
   function myCnt() {
  var fname = prompt("Please enter First Name:", "Your Name");
    var lname = prompt("Please enter Last Name:", "Your Name");
    var children = fname.concat(lname); 
    document.getElementById("rep").innerHTML = " Hello " + children + " How are you today?";
  }
   
   
   function myRep() {
    var str = " Hyderabad " ; 
    var res = str.replace("Hyder", "Islam");
    document.getElementById("rp").innerHTML = " City: " + str + "<br />"+ "After Replacement: "+ res;
  }
  
  
  function myRep2() {
    var str = " Ali and Sami are best friends.They play cricket and football together." ; 
    var res = str.replace(/and/g, "&");
    document.getElementById("rp2").innerHTML = " Before Replacement: " + str + "<br />"+ "After Replacement: "+ res;
  }
  
  
  function myUpcase() {
  var str = prompt("Please Enter Any String:", "lowercase");
  var res = str.toUpperCase();
    document.getElementById("up").innerHTML =  " User input: " + str + " <br/ >" + "Upper case: " +  res;
  }
   
  function titleCase() {
       var string = prompt("challenge no. 11 Please Enter String :", "lowercase for titlecase");
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
           sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
   document.write("User input: " + string + " <br/> ");
     document.write("Title case: " + sentence.join(" "));
     return sentence;
     }
     titleCase(""); 
  
     function myDot() {
      var str = '35.36';
           document.write("Number: "+str);
           
           var res = str.replace(/\./g,'');
           document.write("<br>Result: "+res);
  
    document.getElementById("dot").innerHTML = numberAsString;
  }
  
  function myLastchr() {
    var str = "Pakistan";
    var res = str.charAt(str.length-1);
    document.getElementById("clk").innerHTML = "  Userinput: " + str + "<br />"+ " Last character of input is: " + res;
  }
   
   function myMaths() {
    var value = prompt("Please enter positive floating point number:", "3.45214");
  
    document.getElementById("Maths").innerHTML = " Number: " + value + "<br />"+ " Round off value: " + Math.round(value) + "<br /> Floor value: " + Math.floor(value) + "<br /> ceil value:	" +  Math.ceil(value);
  }
  
  function myMaths2() {
    var value = prompt("Please enter the negative floating point	number :", "-2.673");
  
    document.getElementById("Maths2").innerHTML = " Number: " + value + "<br />"+ " Round off value: " + Math.round(value) + "<br /> Floor value: " + Math.floor(value) + "<br /> ceil value:	" +  Math.ceil(value);
  }
  
  function myAbsl() {
    var value = prompt("Please enter absolute value:", "-4");
  
    document.getElementById("abss").innerHTML = " The absoluste value " + value + " is:  " + Math.abs(value);
  }
  
  function getRndInteger() {
  var diceRoll = Math.floor( Math.random() * 6 ) +1;
  alert('Random diec value: ' + diceRoll);
  var dice = "Random dice value is: " + diceRoll ;
    return dice;
  }
  
  function getRnd() {
  var coinRoll = Math.floor( Math.random() * 2 ) +1;
  var coin = coinRoll;
  
  if  (coin == 2) {
  alert(coinRoll + ' Random coin value is Head ');
  
  }
   else if (coin == 1) {
   alert(coinRoll + ' Random coin value is Tails');
   }
   
    return coinRoll;
  }
  
  function getRndnum() {
  var ranNum = Math.floor(Math.random() * 100);
  alert(' Random Number between 1 till 100 is ' + ranNum );
    return ranNum;
  }
  
  function getRndsecnum() {
  var secNum = prompt("Please enter number between 1- 10:", "Your Number");
  var sec = 6;
  
  if  (secNum == sec) {
  alert(' congratulate your number match');
  
  }
   else {
   alert(' Try Again! ');
   }
   
  }
  //==Task 31 - 34 ===//
  
  function myMonth() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
  
    var d = new Date();
    var n = month[d.getMonth()];
    document.getElementById("month").innerHTML = "Current Month is: " + n;
  }
  
  function myDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = "Today is " + n;
  }
  
  function myFavday() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    
    if ( n = weekday[6] || weekday[0] ) {
    
      document.getElementById("fday").innerHTML = "It's Fun day!";
    
    }
  else {
  
      document.getElementById("fday").innerHTML = "Today is " + n;
  
  }
  
  }
  
  //===Task 35-40===//
  
  function currentDatetime() {
  
  var today = new Date();
  
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dateTime = date+' '+time;
  
   document.getElementById('dmt').innerHTML = dateTime;
  }
  
  
  function add(){
  var a,b,c;
  a=Number(document.getElementById("first").value);
  b=Number(document.getElementById("second").value);
  c= a + b;
  document.getElementById("answer").value= c;
  }
  
  function mySquare() {
  
    var value = prompt("Please enter Number for Square:", "Your Number");
  
    document.getElementById("sq").innerHTML = value + " Square is equal to : " + Math.pow(value, 2);
  }
  
  function factorialize(num) {
      if (num === 0 || num === 1)
          return 1;
      for (var i = num - 1; i >= 1; i--) {
          num *= i;
      }
      return num;
  }
  
    document.getElementById("fac").innerHTML = "The Factorial Number of 5! is: "  + factorialize(5);
  
  function myCount() {
  var num1 = prompt("Please enter Number1:", "Your Number");
  var num2 = prompt("Please enter Number2:", "Your Number");
  
    var text = "";
    var i;
    for (i = num1; i <= num2; i++) {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("cnt").innerHTML = text;
  }
  
  function myHypo() {
  var a = prompt("Please Enter Base Of Triangle:", "in cm ");
  var b = prompt("Please Enter Perpendicular Of Triangle: ", "in cm");
  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  
   
    document.getElementById("hyp").innerHTML = " Formula: Hypotenuse2 = Base2 + Perpendicular2 <br/> <br /> The Hypoth is: " + a + "cm + " + b + "cm = " + c + "cm";
  } 
  
  function myArear() {
  var w = prompt("Please Enter Weight Of Rectangle:", "Value");
  var h = prompt("Please Enter Height Of Rectangle: ", "Variable");
  var a = w * h ;
  
   
    document.getElementById("area").innerHTML = " Formula: A = width * height <br/> <br /> The Area Of A Rectangle is: " + w + " * " + h + " = " + a;
  } 
  
  //== Console  palindrome or not ==//
  function check_Palindrome(str_entry){
     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
      var ccount = 0;
      if(cstr==="") {
          console.log("Nothing found!");
          return false;
      }
      if ((cstr.length) % 2 === 0) {
          ccount = (cstr.length) / 2;
      } else {
          if (cstr.length === 1) {
              console.log("Entry is a palindrome.");
              return true;
          } else {
              ccount = (cstr.length - 1) / 2;
          }
      }
      for (var x = 0; x < ccount; x++) {
          if (cstr[x] != cstr.slice(-1-x)[0]) {
              console.log("Entry is not a palindrome.");
              return false;
          }
      }
      console.log("The entry is a palindrome.");
      return true;
  }
  check_Palindrome('madam');
  check_Palindrome('nurses run');
  check_Palindrome('fox');
  
  function uppercase(str)
  {
    var array1 = str.split(' ');
    var newarray1 = [];
      
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
  }
  console.log(uppercase("the quick brown fox"));
  
  
  function find_longest_word(str)
  {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
  
    for(var x = 1 ; x < array1.length ; x++)
    {
      if(result.length < array1[x].length)
      {
      result = array1[x];
      } 
    }
    return result;
  }
  console.log(find_longest_word('Web Development Tutorial'));
  
  function calcCircumference() {
  var a = 2;
  var pi = 3.14159265359;
  var r = prompt("Please Enter Radius Of Circle:", "Radius ");
  var c = a * pi * r;
  
  document.getElementById("calc").innerHTML = " Formula: Circumference of circle = 2πr <br/> <br /> The Circumference of circle is: " + a + "π" + r + " = " + c ;
  } 
  
  
  function calcArea() {
  var pi = 3.14159265359;
  var r = prompt("Please Enter Radius Of Circle:", "Radius ");
  var c = pi * Math.pow(r, 2);
  
  document.getElementById("calcA").innerHTML = " Formula: Area of circle = πr<small>2</small> <br/> <br /> The Area of circle is: π" + r + "<small>2</small> = " + c;
  } 