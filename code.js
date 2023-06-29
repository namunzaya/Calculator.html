const text = document.getElementById("text");

function append(value){
    text.innerHTML += value;

}

function calculate(){
    text.innerHTML= eval(text.innerHTML);
}