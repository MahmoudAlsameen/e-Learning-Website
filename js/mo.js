
// const id = fetchData();
// console.log("data = ",id)
// console.log('location',window.location);
function fetchData(){
    const sata =  fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => data);
    console.log('sata' , sata)
    return sata;
}
function testTwo(){
    const ted = fetchData();
    // const all =ted.then((ted) => )
    // console.log('test all ',all);
}
testTwo()