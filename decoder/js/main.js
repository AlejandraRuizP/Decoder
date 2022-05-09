let $input=document.querySelector("#input");
let $btnEncrypt=document.querySelector("#encrypt");
let $btnDecrypt=document.querySelector("#decrypt");

let $muñeco=document.querySelector("#muñeco");
let $notFound=document.querySelector("#notFound");
let $lowerOnly=document.querySelector("#lowerOnly");

let $output=document.querySelector("#output");
let $btnCopy=document.querySelector("#copy");
//let $copiado=document.querySelector("texto-copiado");

$btnEncrypt.addEventListener("click", encode);
$btnDecrypt.addEventListener("click", decode);

$btnCopy.addEventListener("click", copy);

//-----------------encrypt


  function encode(){
     console.log("click");
    function encodeText(input){
        let newInput='';
        let vowels = { 'a': 'ai' , 'e': 'enter','i': 'imes','o': 'ober','u': 'ufat'}
        newInput = input.replace(/[aeiou]/g, i => vowels[i]);
        return newInput;
    }
    $muñeco.style.display="none";
    $notFound.style.display="none";
    $lowerOnly.style.display="none";
    $btnCopy.style.display="inline";
    $output.value= encodeText($input.value);
} 


//---------------decrypt
function decode(){
    function decodeText(input){

        let newInput='';
        let vowelsEncrypted = { 'ai': 'a' , 'enter':'e','imes': 'i','ober':'o' ,'ufat':'u' }
        newInput = input.replace(/ai|enter|imes|ober|ufat/g, i => vowelsEncrypted[i]);
        return newInput;
    }
    $output.value= decodeText($input.value);
}


//----copy
function copy(){
    $output.select();
    document.execCommand("copy");

    let parrafo=document.createElement("p");
    parrafo.innerHTML="Copied text!";
    parrafo.classList.add="textarea";
    let $copiado=document.querySelector("#texto-copiado");
    $copiado.appendChild(parrafo);
    setTimeout(() => {
        $copiado.textContent = '';
        window.location.reload();
      }, 2000);
    navigator.reset(); 
}