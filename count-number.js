function countNumberinArray() {
    let array = createArray();
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] / array[i] === 1) {
            count++;
        }
    }
    alert('so phan tu so trong mang la: ' + count);
    }
function createArray() {
    let limit = Number(prompt("Import length array"));
    let char;
    let array=[];
    for (let i = 0; i < limit; i++) {
        char = Number(prompt("Import element in array"));
        array.push(char);
    }
    return array;
}