let protocolOptions = ['AAVE', 'PWN', 'LENS']
let counter = 0
let elem = document.getElementById("protocol");
elem.innerHTML = protocolOptions[counter]
let inst = setInterval(changeProtocol, 2000);
function changeProtocol(){
    elem.innerHTML = protocolOptions[counter]
    counter++
    if (counter >= protocolOptions.length) {
        counter = 0;
    }
}

function hello() {
    console.log('BLA')
}