// document.getElementById("firstName").addEventListener("blur", function(event) {
//     var value = document.getElementById("firstName").value;
//     if (value == "") {
//         document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
//     } else {
//         document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
//     }
// });


/***************  MAIN FUNCTION  ****************/
(function() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const checkoutBtn = document.getElementById('checkout');

    // firstName
    firstName.addEventListener('change', function(event){
        var value = document.getElementById("firstName").value;
        if (value == "") {
            document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
        } else {
            document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
        }

        // if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // lastName
    lastName.addEventListener('change', function(event){
        var value = document.getElementById("lastName").value;
        if (value == "") {
            document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
        } else {
            document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
        }

        // if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // email 
    email.addEventListener('change', function(event){
        var email = document.getElementById("email").value;
        if (email == "") {
            document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        } else {
            document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
        }

        // if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email);

        if(fname && lname && mail) {
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // checkout btn
    checkoutBtn.addEventListener('click', function(){
        document.getElementsByClassName('modal')[0].innerHTML = `<center><h1> Checkout Complete! </h1></center>`;
    });


    // products actions
    // remove item
    let removeBtn = document.getElementsByClassName('remove-item');
    let myFunction = function(event) {
        event.preventDefault();
        let target = event.target;
        let targetPrice = target.parentElement.parentElement.children[4].innerHTML;
        deleteRow(target);
        updatePrice(targetPrice);
        
    };

    // add click events for remove buttons
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', myFunction, false);
    }

})();
/********************* END MAIN FUNCTION **********************/


/********** HELP FUNCTIONS **********/
function checkName(name) {
    let letters = "^[a-zA-Z]*$";
    if (name.length > 4 && name.match(letters)){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const deleteRow = (target) => {
    target.parentElement.parentElement.style.display = "none";
}

const updatePrice = (targetPrice) => {
    let total = document.getElementsByClassName('total')[0];
    total.innerHTML = total.innerHTML - targetPrice;
}
