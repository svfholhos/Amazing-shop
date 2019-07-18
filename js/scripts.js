document.getElementById('prod1').addEventListener('click', function(){
    document.getElementById('modal').style = "display: block;  display: flex; justify-content: center; align-items: center;";
});

document.onclick = function(event){
    let target = event.target;
    if(target.id === 'modal') {
        document.getElementById('modal').style = "display: none;";
    }
}