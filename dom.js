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
        for (let i = 0; i < textMe4.length; i++) {
            if (i === 3) {
                console.log(textMe4[i])
                break;
            }
        } 
    console.log(textMe4[3]); 

//Iteración 2
//2.1
    let addFirstDiv = document.createElement("div");
    document.body.appendChild(addFirstDiv);

    console.log(addFirstDiv); //Se imprime en consola <div></div>

//2.2 
    let addSecondDiv = document.createElement("div");
    document.body.appendChild(addSecondDiv);

    let addFirstP = document.createElement('p');
    addSecondDiv.appendChild(addFirstP);

    console.log(addSecondDiv); //Se imprime en consola <div><p></p></div>

//2.3
    let addThirdDiv = document.createElement("div");
    document.body.appendChild(addThirdDiv);
        for(let i = 1; i < 7; i++) {
            let addSixP = document.createElement("p");
            addThirdDiv.appendChild(addSixP);
        } 

        console.log(addThirdDiv); //Se imprime en consola <div><p>...(x6)...</p></div>

//2.4
    let addSecondP = document.createElement("p");
    document.body.appendChild(addSecondP);

    let addTextSecondP = document.createTextNode("Soy dinámico!");
    addSecondP.appendChild(addTextSecondP);

    console.log(addSecondP); //Se imprime en consola <p>Soy dinámico!</p>

//2.5 
    let xText = document.getElementsByClassName("fn-insert-here");
    xText[0].innerHTML += 'Wubba Lubba dub dub';

    console.log(document); //Se imprime en consola <h2 class="fn-insert-here">Wubba Lubba dub dub</h2>

//2.6
    const apps = [
        'Facebook', 
        'Netflix', 
        'Instagram', 
        'Snapchat', 
        'Twitter'
    ];
  
    let firstUl = document.createElement("ul");
    firstUl.innerHTML += "Esta es la lista de RRSS: ";

    for (let x of apps) {
        let xLi = document.createElement("li");
        xLi.innerHTML += x;
        firstUl.appendChild(xLi);
    }

    document.body.appendChild(firstUl); //Se imprime correctamente en consola

//2.7
    let xRemove = [];
        xRemove = document.getElementsByClassName("fn-remove-me");
        
        for (let i = 0; xRemove.length > 0; i++) {
            xRemove[0].remove();
        }
        
    console.log(document); //Se comprueba -> funciona 

//2.8 
    let xParraf = document.createElement("p")
    let xTextt = document.createTextNode("Voy en medio!");
    xParraf.appendChild(xTextt);

    var xDiv2 = document.getElementsByTagName("div")[1];
    document.body.insertBefore(xParraf, xDiv2); //Se comprueba -> insertado: <div></div>AQUÍ<div></div> 

//2.9
        let xThree = document.body.getElementsByClassName("fn-insert-here")[1];
        let xFour = document.getElementsByClassName("fn-insert-here")[2];
            xThree.innerHTML += "Voy dentro!";
            xFour.innerHTML += "Voy dentro!"; //Se comprueba -> se imprime correctamente     

}
