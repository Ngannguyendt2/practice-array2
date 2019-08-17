function check() {
    let count = 0;
    let limit1=limitString();
    let limit2=limitString();
    if (limit1 == limit2) {
        let string1 = importString();
        let string2 = importString();
        let arrayString1 = string1.split('');
        let arrayString2 = string2.split('');
        for (let i = 0; i < limit1; i++) {
            if (arrayString1[i] == arrayString2[i]) {
                count++;
            } else {
                alert(string1 + ' other ' + string2);
                break;
            }
        }
    } else {
        alert('string1 other string2');
    }
    if (count == limit1) {
        alert('String1: ' + string1 + 'same string2: ' + string2);
    }
}
function limitString() {
   let limit = Number(prompt('Import limit string'));
    return limit;
}
function importString() {
    let string = prompt("Import string");
    return string;
}