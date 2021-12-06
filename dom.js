window.onload = () => {
//Iteración 1
//1.1
    console.log(document.querySelector(".showme"));

//1.2
    console.log(document.querySelector("#pillado"));

//1.3
    console.log(document.querySelectorAll('p'));

//1.4
    console.log(document.querySelectorAll(".pokemon"));

//1.5
    console.log(document.querySelectorAll("span[data-function='testMe']"));

//1.6
    var textMe4 = document.querySelectorAll("span[data-function='testMe']");
        /*for (let i = 0; i < textMe4.length; i++) {
            if (i === 3) {
                console.log(textMe4[i])
                break;
            }
        } */
    console.log(textMe4[3]); 

}
