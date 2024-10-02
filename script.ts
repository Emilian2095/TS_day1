let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers.length; i++) {
   
    for (let j = 0; j < numbers.length; j++) {
     let num1 = numbers[i];
     let num2 = numbers[j];
     let result = num1 * num2;
     
        (document.getElementById("output") as HTMLElement).innerHTML += `${num1} x ${num2} = ${result} <br>` 
    }
}

let fullName: {fName: string, lName: string} ={
    fName: "Emilian",
    lName: "Chirica"
};

for (let i = 0; i < 10; i++) {
   (document.getElementById("name") as HTMLElement).innerHTML += `<br> ${fullName.fName} <br>` ;
console.log(`${fullName.lName}`);
};
function lastName() {
    for (let i = 0; i < 10; i++) {
     console.log(`${fullName.lName}`);
     }
}
setTimeout(lastName, 5000)

// ex3 

let printNames = ["Jhon", "Doe", "Aurora", "Darius"];

for (let i = 0; i < printNames.length; i++) {
    console.log(printNames[i]);
    }
    for (let i = 0; i < printNames.length; i++) {
        console.log(Object.keys(printNames));
        }
        for (let i = 0; i < printNames.length; i++) {
            console.log(printNames);
            }
        


