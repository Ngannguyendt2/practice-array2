function print() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        console.log('row ' + i);
        array[i] = [];
        document.write("<br>");
        for (let j = 0; j < 10; j++) {
            array[i][j] = i*j;
            document.write(array[i][j]);
        }
    }
}