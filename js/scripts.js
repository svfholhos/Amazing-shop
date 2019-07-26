
/********************  MAIN FUNCTION  *********************/
(() => {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const modal = document.getElementById('modal');
    
    /* modal example */
    document.getElementById('prod1').addEventListener('click', function(){
        document.getElementById('modal').style = "display: block;  display: flex; justify-content: center; align-items: center;";
    });
    
    modal.addEventListener('click', () => modal.style.display = "none"); 
    
    hamburger.addEventListener('click', () => hamburger.classList.toggle('is-active'));

})();
/******************** END  MAIN FUNCTION  *********************/
