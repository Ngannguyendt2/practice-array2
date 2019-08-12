function check() {
    let limit1, limit2;
    let char1, char2, count = 0;
    limit1 = Number(prompt('Import limit string1'));
    limit2 = Number(prompt('Import limit string2'));
    let string1 = prompt("Import string1");
    let string2 = prompt("Import string2");
    let arrayString1 = string1.split('');
    let arrayString2 = string2.split('');
    if (limit1 == limit2) {
        for (let i = 0; i < limit1; i++) {
            if (arrayString1[i] == arrayString2[i]) {
                count++;
            } else {
                alert(string1 + ' other ' + string2);
                break;
            }
        }
    } else {
        alert(string1 + ' other ' + string2);
    }
    if (count == limit1) {
        alert('String1: ' + string1 + 'same string2: ' + string2);
    }
}