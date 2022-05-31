function solve(input){
let finalResult = {};
for(let tokens of input) {
   let info =tokens.split(` | `)
   let townName = info[0];
   let latitude = Number(info[1]).toFixed(2);
   let longitute = Number(info[2]).toFixed(2);
   finalResult.town = townName;
   finalResult.latitude = latitude;
   finalResult.longitude = longitute
   console.log(finalResult)
}





}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);