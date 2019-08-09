function invertArray() {
    let limit=Number(prompt("Import limit array"));
    let string;
    let arrayString=[];
    for(let i=0;i<limit;i++)
    {
        string= prompt("Import element in array");
        arrayString.push(string);
    }
    let length=arrayString.length;
    let temp;
    for(let i=0;i<length/2;i++)
    {
        temp=arrayString[i];
        arrayString[i]=arrayString[length-i-1];
        arrayString[length-i-1]=temp;
    }
    document.getElementById('invert').innerText=arrayString.join("");
}