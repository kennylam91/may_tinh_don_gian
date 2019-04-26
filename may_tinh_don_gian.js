function calculator(input) {

    document.getElementById('screen').value += input;

}
function equal(){
    let result=document.getElementById('screen').value;
    document.getElementById('screen').value=eval(result);
}
function xoa(){
    document.getElementById('screen').value="";
}