



/********************  MAIN FUNCTION  *********************/
(() => {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    
    /* modal example */
    document.getElementById('prod1').addEventListener('click', function(){
        document.getElementById('modal').style = "display: block;  display: flex; justify-content: center; align-items: center;";
    });
    
    document.onclick = function(event){
        let target = event.target;
        if(target.id === 'modal') {
            document.getElementById('modal').style = "display: none;";
        }
    };
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
    });

})();

/*
function Calculator(n1, n2){
    this.n1 = n1;
    this.n2 = n2;

    this.mul = () => Number(n1) * Number(n2);
    this.sum = () => Number(n1) + Number(n2);
};

(() => {
    
    const number1 = prompt('Enter the first number: ');
    const number2 = prompt('Enter the second number: ');
    let calc1 = new Calculator(number1, number2);

    alert(calc1.sum(number1, number2));
    alert(calc1.mul(number1, number2));

})();
*/
