var numberA = prompt("Please enter number A:");
var operation = prompt("Please enter mathematical operation:");
var numberB = prompt("Please enter number B:");

/*switch(operation){
    case "*":
        result = parseInt(numberA) * parseInt(numberB);
        alert ("The result is:" +result  )
        break;
    case "+":
        result = parseInt(numberA) + parseInt(numberB);
        alert ("The result is:" +result  )
        break;
    case "-":
        result = parseInt(numberA) - parseInt(numberB);
        alert ("The result is:" +result  )
        break;
    case "/":
        result = parseInt(numberA) / parseInt(numberB);
        alert ("The result is:" +result  )
        break;
    default:
        alert("Wrong mathematical operation.")
}*/

if(operation == "+"){
    result = parseInt(numberA) + parseInt(numberB);
        alert ("The result is:" +result  )
}
else if (operation == "-"){
    result = parseInt(numberA) - parseInt(numberB);
        alert ("The result is:" +result  )
}
else if (operation == "*"){
    result = parseInt(numberA) * parseInt(numberB);
        alert ("The result is:" +result  )
}
else if (operation == "/"){
    result = parseInt(numberA) / parseInt(numberB);
        alert ("The result is:" +result  )
}
else{
    alert(operation + " is not a mathematical operation.")
}

