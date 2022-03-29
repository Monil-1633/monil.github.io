var nameoutput;
var emailoutput;
var cardoutput = 0;
var incomeoutput = 0;
var totalincome = 0;
var otherincome = 0;
var totalincometax = 0;
var incometaxpaid = 0;
var TIT = 0;
var ITP = 0;
var TI = 0;
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
 var formEI = document.getElementById('mcard').value;
 var formOI = document.getElementById('ycard').value;
 var formITP = document.getElementById('icard').value;
    
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

var phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

if (formNumber == '' || formName == null) {
    error += 'Please Enter the Phone Number <br>';
}

else{
    if (!phoneRegex.test(formNumber)) {
        error += 'Invalid Phone Number <br>';
    }
}

if (formEI == '' || formEI == null) {
    error += 'Employement Income is Mandatory! <br>'
}

else{

}

if (formITP == '' || formITP == null) {
    error += 'Income Tax Paid is Mandatory! <br>'
}

else{
    
}

if (formEI < 60000) {
    TIT = formEI * 0.2;
}

else{

}

if (formEI >= 60000 && formEI <= 90000) {
    TIT = formEI * 0.25;
}

else{

}

if (formEI > 90000) {
    TIT = formEI * 0.34;
}

ITP = TIT - formITP;
TI = formOI + formEI;


if(error){
    {   
        document.getElementById('error').innerHTML = error;
    }

}


else{
    document.getElementById('error').innerHTML = '';

    totalincome = formEI + formOI;
    
    nameoutput = (`Name:  ${formName}`);
    emailoutput = (`Email: ${formEmail}`); 
    totalincome = formEI + formOI;
    incomeoutput = (`Employement Income: $${formEI}`);
    otherincome = (`Other Income : $${formOI}`);
    totalincome = (`Total Income :$${TI}`)
    totalincometax = (`Total Income Tax :$${TIT}`)
    incometaxpaid = (`Income Tax Paid : $${formITP}`);
    incometaxpayable = (`Income Tax Payable : $${ITP}`);
    output += `<h2>Calculations</h2>
    ${nameoutput}</br></br>
    ${emailoutput}</br></br>
    ${incomeoutput}</br></br>
    ${otherincome}</br></br> 
    ${totalincometax}</br></br>
    ${incometaxpaid}</br></br>
    ${incometaxpayable}`;
    
    
    document.getElementById('formResult').innerHTML = output;   
  }
     return false;

}