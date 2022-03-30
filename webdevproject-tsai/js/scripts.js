function validate() {
    /* zipcode */
    var txtZip = $("#zipcode").val();
    var zipcode = new String(txtZip);
    if (zipcode.length > 0) { /* if zipcode not entered, skip validation */
        if (((zipcode.length != 5) || isNAN(zipcode))) {
            alert("Zipcode is not valid. Zipcode has to be a five-digit number.");
            return false;
        }
    }
    
    /* email */
    // var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var txtEmail = $("#email").val();
    // var email = new String(txtEmail);
    // if (!email.match(emailFormat)) {
    //     alert("Email is not valid.");
    //     return false;
    // }
}

function submitAlert() {
    alert("Thank you for joining Pamela's Diner!");
}
