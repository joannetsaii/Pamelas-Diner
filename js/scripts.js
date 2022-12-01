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


// Alert pops up after user clicks on "Reserve Today" button
function reserveAlert1() {
    alert("Please call Pamela's Diner to reserve: (412) 281-6366 as we only accept reservations via phone call.");
}

function reserveAlert2() {
    alert("Please call Pamela's Diner to reserve: (412) 683-4066 as we only accept reservations via phone call.");
}

function reserveAlert3() {
    alert("Please call Pamela's Diner to reserve: (412) 683-1003 as we only accept reservations via phone call.");
}

function reserveAlert4() {
    alert("Please call Pamela's Diner to reserve: (412) 343-3344 as we only accept reservations via phone call.");
}

