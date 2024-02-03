function somme(){
    let num1 = document.getElementById("nombre1").value;
    let num2 = document.getElementById("nombre2").value;
    let resultat = Number(num1) + Number(num2);
    console.log(resultat);
    document.getElementById("resultat").value = resultat;
}
function difference(){
    let num1 = document.getElementById("nombre1").value;
    let num2 = document.getElementById("nombre2").value;
    let resultat = Number(num1) - Number(num2);
    console.log(resultat);
    document.getElementById("resultat").value = resultat;
}
function produit(){
    let num1 = document.getElementById("nombre1").value;
    let num2 = document.getElementById("nombre2").value;
    let resultat = Number(num1) * Number(num2);
    console.log(resultat);
    document.getElementById("resultat").value = resultat;
}
function division(){
    let num1 = document.getElementById("nombre1").value;
    let num2 = document.getElementById("nombre2").value;
    let resultat = (Number(num1) / Number(num2)).toFixed(4);
    console.log(resultat);
    document.getElementById("resultat").value = resultat;
}

document.getElementById("valider").onclick = function(){
    let selected = document.getElementById("operation").value;
    if(selected === "somme"){
        console.log("je cherche la somme");
        somme();
    }
    if(selected === "difference"){
        console.log("je cherche la difference");
        difference();
    }
    if(selected === "produit"){
        console.log("je cherche le produit");
        produit();
    }
    if(selected === "division"){
        console.log("je cherche la division");
        division();
    }
}


const decimalField = document.getElementById("decimal");
decimalField.addEventListener("mouseout",() => {
    decimalValue = decimalField.value;
    console.log(decimalValue);
    const binaireArray = [];
    while(decimalValue>=1){
        console.log(decimalValue + "initial");
        let mod = decimalValue%2;
        console.log(mod + "mod");
        binaireArray.push(mod);
        decimalValue = (decimalValue-mod)/2;
        console.log(decimalValue + "divided");
    }
    let revArray = binaireArray.reverse();
    console.log(binaireArray);
    revArray = revArray.join("");
    console.log(revArray);
    revArray = Number(revArray);
    document.getElementById("binaire").value = revArray;
});