function multiply(...numbers){
    return numbers.reduce((total, current)=> total * current, 1);

}
module.exports = multiply;