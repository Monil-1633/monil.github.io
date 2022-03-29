    var a = 0;b = 0;c = 0;d = 0;e = 0;f = 0;
    var M_price = 8;C_price = 10;Mt_price = 6;Mac_price = 9;P_price = 11;
    var M = 0;
    var totalprice1,totalprice2,totalprice3,totalprice4,totalprice5,gst;
    var unittotal,sum,grandtotal;
    var Pi1 = 'Margeritta';
    var Pi2 = '8 Cheese';
    var Pi3 = '4 Meat';
    var Pi4 = 'Macroni';
    var Pi5 = 'Pasta';
    

function atC1()
{
   a = prompt('How many Margeritta Pizza do you want?',' ');
   a = a.trim(); 
    
    while(isNaN(a) || a === '' || a === null) 
    {
        
        a = prompt('Please enter in number only!');
    }
    
   
    a = parseInt(a); 


    document.getElementById('val1').innerHTML = a;  
    document.getElementById('P1').innerHTML = Pi1;
    
 
 }

 function atC2()
{
   b = prompt('How many 8 Cheese Pizza do you want?',' ');
   b = b.trim(); 
    while(isNaN(b) || b === '' || b === null) 
    {
        
        b = prompt('Please enter in number only!');
    }
    b = parseInt(b); 
    document.getElementById('val2').innerHTML = b; 
    document.getElementById('P2').innerHTML = Pi2;

    

    
   
 }
    
function atC3()
{
   c = prompt('How many 4 Meat Pizza do you want?',' ');
   c = c.trim(); 
    while(isNaN(c) || c === '' || c === null) 
        
    {
         c = prompt('Please enter in number only!');
    }
    c = parseInt(c); 
    document.getElementById('val3').innerHTML = c; 
    document.getElementById('P3').innerHTML = Pi3;

    
 }

 function atC4()
{
   d = prompt('How many Macroni Pizza do you want?',' ');
   d = d.trim(); 
    while(isNaN(d) || d === '' || d === null) 
    {
        
        d = prompt('Please enter in number only!');
    }
    d = parseInt(d); 
    document.getElementById('val4').innerHTML = d; 
    document.getElementById('P4').innerHTML = Pi4;
    
 }
   
 
  
function atC5()
{
   e = prompt('How many Pasta Pizza do you want?',' ');
   e = e.trim(); 
    while(isNaN(e) || e === '' || e === null) 
    {
        
        e = prompt('Please enter in number only!');
    }
    e = parseInt(e); 
    document.getElementById('val5').innerHTML = e;
    document.getElementById('P5').innerHTML = Pi5;
 
    
    
 }
 
function gst(){

f = prompt('Please Enter Your Name!');

while(f == '' || f == null)
{
    f = prompt('Please Enter your Name:');
}

totalprice1 = M_price * a;
totalprice2 = C_price * b;
totalprice3 = Mt_price * c;
totalprice4 = Mac_price * d;
totalprice5 = P_price * e;



unittotal = a + b + c + d + e; 

sum = totalprice1+totalprice2+totalprice3+totalprice4+totalprice5; 

gst = sum*0.13;

    grandtotal = sum + gst;


    document.getElementById('valA').innerHTML = a;
    document.getElementById('valB').innerHTML = b;
    document.getElementById('valC').innerHTML = c;
    document.getElementById('valD').innerHTML = d;
    document.getElementById('valE').innerHTML = e;
    document.getElementById('val6').innerHTML = f;
    document.getElementById('M_price').innerHTML = totalprice1;
    document.getElementById('C_price').innerHTML = totalprice2;
    document.getElementById('Mt_price').innerHTML = totalprice3;
    document.getElementById('Mac_price').innerHTML = totalprice4;
    document.getElementById('P_price').innerHTML=totalprice5;
    document.getElementById('unittotal').innerHTML = unittotal;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('gst').innerHTML = gst;
    document.getElementById('grandtotal').innerHTML = grandtotal;
}
