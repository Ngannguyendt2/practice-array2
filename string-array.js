function find() {
    let string1 = 'hello-world-!';
    let string2 = '';
    let arrayString = string1.split('');
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] == '-') {
            arrayString[i] = '_';
        }

    }

    string1 = arrayString.join('');
    alert(string1);

}