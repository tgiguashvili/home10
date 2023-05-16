

// let numbers = [2,5,4,7,9,10,8]
// for(let i = 0; i<numbers.length; i++) {
    // document.write(numbers[i] + "<br>")
// }

// let numbers = [2,5,4,7,9,10,8] 
// for(numb of numbers) {
    // document.write(numb + "<br>")
    // if (numb === 10) {
        // document.write("done")
        // break;

    // }
// }

// let numbers = [2,5,4,7,9,10,8]
// for(index in numbers){
    // document.write(numbers[index]+"<br>")
// }

function display (50,weclomeMessage){
let message=weclomeMessage(50)
document.write(message)
}
function weclomeMessage(price){
    if(price>50)
    return"dzviria"
    if else(price<50 && price>20)
    return"normalurifasi"
    else return"wavara"
}
display(50,weclomeMessage)