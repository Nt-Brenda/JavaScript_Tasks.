

// const trinReturn = (str) => {

//     if (isNaN(str) && str.includes("w") && str.lenght ===8) {
//        return  true
//     }else{
//         return false
//     }

//     }
//     console.log(trinReturn(wjkdsght))


const today = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(`Today is: ${daysOfWeek[today.getDay()]}.`);
const hours = today.getHours().toString().padStart(2, '0');
const minutes = today.getMinutes().toString().padStart(2, '0');
console.log(`Current time is: ${hours}:${minutes}`);

//to find the largest of three given integers

function findLargestInteger(num1,num2,num3) {
         return Math.max (num1,num2,num3);
}
         const largestInteger = findLargestInteger(2, 22, 5);
         console.log(`The largest integer is: ${largestInteger}`);

function numbers( a,b,c){
    if (a>=50 && a<=99) {
        return true;
    }
    else if (b>=50 && b<=99) {
        return true;
    }
    else if (c>=50 && c<=99) {
        return true;
    }
    else{
        return false;
    }
}
    console.log (numbers(60,75,55))









































