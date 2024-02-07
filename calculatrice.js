let field1 = document.getElementById("nombre1");
let field2 = document.getElementById("nombre2");

field1.addEventListener("click", ()=>{
    field1.style.backgroundColor = "white";
})
field2.addEventListener("click", ()=>{
    field2.style.backgroundColor = "white";
})

function isEmptycheck(){
    let num1 = field1.value;
    let num2 = field2.value;  
    let check;
    if( num1 == "" ||num1==null) num1=false;
    if(num2 == ""||num2==null) num2=false;
        if(num1===false){
            console.log("num1 false");
            field1.style.backgroundColor = "red";
        }
        if(num2===false){
            console.log("num2 false");
            field2.style.backgroundColor = "red"
        }
    return[num1,num2];
}
function somme(){  
    console.log("checjing");
    const values = isEmptycheck();
    if(values[0]===false || values[1]===false){
        console.log("no");
    }
    else{
        let resultat = Number(values[0]) + Number(values[1]);
        console.log(resultat);
        document.getElementById("resultat").value = resultat;
    }
    
}
function difference(){ 
    console.log("checjing");
    const values = isEmptycheck();
    if(values[0]===false || values[1]===false){
        console.log("no");
    }
    else{
        let resultat = Number(values[0]) - Number(values[1]);
        console.log(resultat);
        document.getElementById("resultat").value = resultat;
    }
    
}
function produit(){  
    console.log("checjing");
    const values = isEmptycheck();
    if(values[0]===false || values[1]===false){
        console.log("no");
    }
    else{
        let resultat = Number(values[0]) * Number(values[1]);
        console.log(resultat);
        document.getElementById("resultat").value = resultat;
    }
    
}
function division(){
    console.log("checjing");
    const values = isEmptycheck();
    if(values[0]===false || values[1]===false){
        console.log("no");
    }
    else{
            if(values[1]==0){
                console.log("not possible");
                document.getElementById("resultat").style.backgroundColor = "red";
            }
            else{
                console.log("ok");
                let resultat = (Number(values[0]) / Number(values[1])).toFixed(4);
                console.log(resultat);
                document.getElementById("resultat").value = resultat;
            }
            
        }
    }
    
    


document.getElementById("valider").onclick = function(){
    document.getElementById("resultat").style.backgroundColor = "gray"
    document.getElementById("resultat").style.color = "white"
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
decimalField.addEventListener("click",() =>{
    decimalField.style.backgroundColor = "white";
})
decimalField.addEventListener("mouseout",() => {

    if(decimalField.value == "" || decimalField.value == null){
        decimalField.style.backgroundColor = "red";
    }
    else{
        document.getElementById("binaire").style.backgroundColor = "gray"
        document.getElementById("binaire").style.color = "white"
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
    }


    
});