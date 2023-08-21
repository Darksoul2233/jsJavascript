// let number = prompt('enter the food item code');

// if (number == 1 ) {
//     console.log(`you,ve selected burger with price of $4.99`);
// }

// else if (number == 2) {
//     console.log(`you,ve selected pizza with price of $6.99`);
// }

// else if (number == 3) {
//     console.log(`you,ve selected salad with price of $2.99`);
// }

// else if (number == 4) {
//     console.log(`you,ve selected pasta with price of $5.99`);
// }

// else if (number == 5) {
//     console.log(`you,ve selected drink with price of $1.99`);
// }

// else{
//     console.log('you,ve entered the wrong  food id');
// }


let arrowfunc = (number) => {
    
if (number == 1 ) {
    console.log(`you,ve selected burger with price of $4.99`);
}

else if (number == 2) {
    console.log(`you,ve selected pizza with price of $6.99`);
}

else if (number == 3) {
    console.log(`you,ve selected salad with price of $2.99`);
}

else if (number == 4) {
    console.log(`you,ve selected pasta with price of $5.99`);
}

else if (number == 5) {
    console.log(`you,ve selected drink with price of $1.99`);
}

else{
    console.log('you,ve entered the wrong  food id');
}
}  
arrowfunc( number=prompt("enter the number"))