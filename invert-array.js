function swapSortarray() {

    let array = createArray();
    let length = array.length;
    let temp;
    for (let i = 0; i < length / 2; i++) {
        temp = array[i];
        array[i] = array[length - i - 1];
        array[length - i - 1] = temp;
    }
    document.getElementById('invert').innerText = array.join("");
}

function createArray() {
    let limit = Number(prompt("Import length array"));
    let number;
    let arrayString = [];
    for (let i = 0; i < limit; i++) {
        number = prompt("Import element in array");
        arrayString.push(number);
    }
    return arrayString;
}