// kono function er maje onno function ke call kori / return kori bitorer function 1ta closed inverument toiri kore 
// tarpor bitorer return kora function bahirer kono variable ke use kore se alada value toiri kore(jeno tara nijeder modde closed inverment toiri kore) 

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clook = stopWatch();
console.log(clook());
console.log(clook());
console.log(clook());
console.log(clook());

const clook2 = stopWatch();
console.log(clook2());
console.log(clook2());
console.log(clook());