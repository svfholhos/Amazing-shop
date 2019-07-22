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
        // if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if (firstName.value === "" || !fname) {
            firstName.setAttribute("style", "border: 1px solid red;");
        } else {
            firstName.setAttribute("style", "border: 1px solid #777777;");
        }

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            checkoutBtn.style.cursor = "pointer";
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // lastName
    lastName.addEventListener('change', function(event){

        // if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if (lastName.value === "" || !lname) {
            lastName.setAttribute("style", "border: 1px solid red;");
        } else {
            lastName.setAttribute("style", "border: 1px solid #777777;");
        }

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            checkoutBtn.style.cursor = "pointer";
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // email 
    email.addEventListener('change', function(event){
        // if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if (email.value === "" || !mail) {
            email.setAttribute("style", "border: 1px solid #fc031c;");
            email.style.color = "#fc031c";
        } else {
            email.setAttribute("style", "border: 1px solid #777777;");
        }

        if(fname && lname && mail) {
            checkoutBtn.disabled = false;
            checkoutBtn.style.cursor = "pointer";
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
    const removeBtn = document.getElementsByClassName('remove-item');
    const updateRow = function(event) {
        event.preventDefault();
        let target = event.target;
        let targetPrice = target.parentElement.parentElement.children[4].innerHTML;
        deleteRow(target);
        decreaseTotal(Number(targetPrice));
    };

    // add click events for remove buttons
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', updateRow, false);
    }

    // decrease quantity
    const decreaseBtn = document.getElementsByClassName('remove');
    const decreaseQuantity = function(event) {
        event.preventDefault();
        let target = event.target;
        let quantity = target.parentElement.children[1];
        let unitPrice = target.parentElement.parentElement.children[2].innerHTML;
        let totalPrice = target.parentElement.parentElement.children[4];

        if(quantity.innerHTML > 1) {
            quantity.innerHTML = quantity.innerHTML - 1;
            totalPrice.innerHTML = Number(unitPrice) * Number(quantity.innerHTML);
            decreaseTotal(Number(unitPrice));
        } else {
            return;
        }
    }

    // add click events for - buttons
    for(let i = 0; i < decreaseBtn.length; i++){
        decreaseBtn[i].addEventListener('click', decreaseQuantity, false);
    }

    // increase quantity
    const increaseBtn = document.getElementsByClassName('add');
    const increaseQuantity = function(event) {
        event.preventDefault();
        let target = event.target;
        let quantity = target.parentElement.children[1];
        let unitPrice = target.parentElement.parentElement.children[2].innerHTML;
        let totalPrice = target.parentElement.parentElement.children[4];
        quantity.innerHTML = Number(quantity.innerHTML) + 1 ;
        totalPrice.innerHTML = Number(unitPrice) * Number(quantity.innerHTML);
        increaseTotal(unitPrice);
    }
    
    // add click events for + buttons
    for(let i = 0; i < increaseBtn.length; i++){
        increaseBtn[i].addEventListener('click', increaseQuantity, false);
    }

    

})();
/********************* END MAIN FUNCTION **********************/


/********** HELP FUNCTIONS **********/
function checkName(name) {
    let letters = /^[A-Za-z ]+$/;
    if (name.match(letters)){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const deleteRow = function (target) {
    target.parentElement.parentElement.style.display = "none";
}

const increaseTotal = function(targetPrice) {
    let total = document.getElementsByClassName('total')[0];
    updateTotal(Number(total.innerHTML) + Number(targetPrice));
}

const decreaseTotal = function(targetPrice) {
    let total = document.getElementsByClassName('total')[0];
    updateTotal(Number(total.innerHTML) - Number(targetPrice));
}

const updateTotal = function(price) {
    let total = document.getElementsByClassName('total')[0];
    total.innerHTML = Number(price);
}