var m1 = '01';
var m2 = '02';
var m3 = '03';
var m4 = '04';
var m5 = '05';
var m6 = '06';
var m7 = '07';
var m8 = '08';
var m9 = '09';
var m10 = '10';
var m11 = '11';
var m12 = '12';
var NOVCoutput = '';
var NOCBoutput = '';
var NOKKoutput = '';
var NOCorBoutput = '';
var NCBoutput = '';
var NOSBoutput = '';
var nameoutput;
var emailoutput;
var cardoutput = 0;
var donationoutput=0;
var totaloutput=0;
var subtotal=0;
var total=0;
var totaldonation=0;
var output='';
var A1 = 0;
var A2 = 0;
var A3 = 0;
var A4 = 0;
var A5 = 0;
var A6 = 0;


var test = '';

function result(){
        
 var formName = document.getElementById('name').value;
 var formEmail = document.getElementById('email').value;
 var formNumber = document.getElementById('card').value;
 var formMonth = document.getElementById('mcard').value;
 var formYear = document.getElementById('ycard').value;
    
    var error = '';
    
    if(formName == '' || formName == null){
    error += 'Please enter the Name <br>';
}

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(formEmail == '' || formEmail == null){
        error += 'Please enter the Email <br>';
}

else{
    
if(!emailRegex.test(formEmail)){
error += 'Invalid Email address <br>';
}
}

var numberRegex = /^[0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]$/;
if(formNumber != '' || formNumber != null){
    
if(!numberRegex.test(formNumber)){
error += 'Invalid Card Number (xxxx-xxxx-xxxx-xxxx)<br>';
}

}

if(formMonth == '' || formMonth == null){ 
    
}

else{
    if(formMonth == m1 || formMonth == m2 || formMonth == m3 || formMonth == m4 || formMonth == m5 || formMonth == m6 || formMonth == m7 || 
    formMonth == m8 || formMonth == m9 || formMonth == m10 || formMonth == m11 || formMonth == m12){
        
    }
    else{
        error += 'Invalid Month Input (MM)(should be in Numeric!)<br>';
    }
}

var yearRegex = /^[0-9][0-9][0-9][0-9]$/;
if(formYear == '' || formYear == null){
    
}

else{
    if(!yearRegex.test(formYear)){
        error += 'Invalid Year Input (yyyy)<br>';
    }
}

    var a = document.getElementById('NOVC').value;
    var b = document.getElementById('NOCB').value;
    var c = document.getElementById('NOKK').value;
    var d = document.getElementById('NOCorB').value;
    var e = document.getElementById('NCB').value;
    var f = document.getElementById('NOSB').value;

if((a == '' || a == null || a == 0) && (b == '' || b == null || b == 0) && (c == '' || c == null || c == 0) &&
 (d == '' || d == null || d == 0) && (e == '' || e == null || e == 0) && (f == '' || f == null || f == 0)){
    error += 'You must buy atleast one item';
}

else{
    if(a == '' || a == null){
        }
    
    else{
        if(isNaN(a) || a == 0){
            error += 'Quantity of Vanilla Cup should be greater than 0.<br>';
    }
    }
    if(b == '' || b == null){
        
    }
    else{
        if(isNaN(b) || b == 0){
            error += 'Quantity of Chocolate Bar should be greater than 0.<br><br>';
        }
    }
    if(c == '' || c == null){
        
    }
    else{
        if(isNaN(c) || c == 0){
            error += 'Quantity of KitKat should be greater than 0.<br>';
        }
    }
    if(d == '' || d == null){
        
    }
    else{
        if(isNaN(d) || d == 0){
            error += 'Quantity of Cornetto Bar must greater than 0.<br>';
        }
    }
    if(e == '' || e == null){
        
    }
    else{
        if(isNaN(e) || e == 0){
            error += 'Quantity of Candy Bar must greater than 0.<br>';
        }
    }
    if(f == '' || f == null){
        
    }
    else{
        if(isNaN(f) || f == 0){
            error += 'Quantity of Santa Bar must greater than 0.<br>';
        }
    }
}


if(error){
    {   
        document.getElementById('error').innerHTML = error;
    }

}

else{
    document.getElementById('error').innerHTML = '';
    
    if(a == '' || a == null){
        NOVCoutput = '';
        }
    
    else{
        if(isNaN(a) || a == 0){
    NOVCoutput = '';
    }
    else{
         A1 = 2 * a;
        NOVCoutput = ( `Vanilla Cups ($2) x ${a}=  $${A1}`);
    }
    }
    
        if(b == '' || b == null){
            NOCBoutput = '';
        }
    
    else{
        if(isNaN(b) || b == 0){
    NOCBoutput = '';
    }
    else{
         A2 = 4 * b;
        NOCBoutput = `Chocolate Bars ($4) x ${b}=  $${A2}`
    }
    }
    
        if(c == '' || c == null){
            NOKKoutput = '';
        }
    
    else{
        if(isNaN(c) || c == 0){
    NOKKoutput = '';
    }
    else{
         A3 = 3 * c;
    NOKKoutput = `KitKat ($3) x ${c}=  $${A3}`
    }
    }
    
        if(d == '' || d == null){
            NOCorB = '';
        }
    
    else{
        if(isNaN(d) || d == 0){
    NOCorB = '';
    }
    else{
        A4 = 5 * d;
        NOCorBoutput = `Cornetto Bars ($5) x ${d}=  $${A4}`
    }
    }
    
        if(e == '' || e == null){
            NCBoutput = '';
        }
    
    else{
        if(isNaN(e) || e == 0){
    NCBoutput = '';
    }
    else{
         A5 = 6 * e;
        NCBoutput = `Candy Bars ($6) x ${e}=  $${A5}`
    }
    }
    
        if(f == '' || f == null){
            NOSBoutput = '';
        }
    
    else{
        if(isNaN(f) || f == 0){
            NOSBoutput = '';
    }
    else{
         A6 = 9 * f;
        NOSBoutput = `Santa Bars ($9) x ${f}=  $${A6}`
    }
    }

    
    nameoutput = (`Name:  ${formName}`);
    emailoutput = (`Email: ${formEmail}`);
    cardoutput = (`Card: xxxx-xxxx-xxxx-${formNumber[15]}${formNumber[16]}${formNumber[17]}${formNumber[18]}`);

    
    subtotal = A1 + A2 + A3 + A4 + A5 + A6 ;
    totaldonation = subtotal * 0.10;
    
    if(totaldonation > 10){
        donationoutput = (`Donation(Minimum)= ${totaldonation}`);
        total = subtotal + totaldonation;
    }
    else{
        donationoutput = (`Donation(Minimum)= $10`);
        total = subtotal + 10;
    }

    subtotal = (`Total = $${subtotal}`)
    
    totaloutput = (`Final Total=$${total}`)
    
    output += `<h2>Customer Reciept</h2>
    ${nameoutput}</br></br>
    ${emailoutput}</br></br>
    ${cardoutput}</br></br>
    ${NOVCoutput}</br></br>
    ${NOCBoutput}</br></br>
    ${NOKKoutput}</br></br>
    ${NOCorBoutput}</br></br>
    ${NCBoutput}</br></br>
    ${NOSBoutput}</br></br>
    ${subtotal}</br></br>
    ${donationoutput}</br></br>
    ${totaloutput}`;
    
    
    document.getElementById('formResult').innerHTML = output;   
  }
     return false;

}