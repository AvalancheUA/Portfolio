let firsNumber;
let secondNumber;

firsNumber= Number(prompt('Введіть перше число'));
secondNumber= Number(prompt('Введіть друге число'));

/**result = (firsNumber+secondNumber)+" "+ (firsNumber-secondNumber) + " " + (firsNumber*secondNumber) + " " + (firsNumber/secondNumber);**/

if (secondNumber===0) {
    alert("Ділення на 0 неможливе");
} 
if (secondNumber!=0) {
    alert(firsNumber/secondNumber);
} 
if (firsNumber<secondNumber) {
    let question = confirm("Ви впевнені, що хочете продовжити операцію?");
    alert(question);
} if (firsNumber<secondNumber) {
    alert(firsNumber - secondNumber);
}  
if (firsNumber === '' ||  secondNumber === '') {
    alert("Помилка");
} 

