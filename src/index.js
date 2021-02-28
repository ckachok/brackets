module.exports = function check(str, bracketsConfig) {
    let arrayBrackets = [];

    bracketsConfig.forEach(element => {
        arrayBrackets.push(element.join(''));
    });

    for (let i = 0; i < arrayBrackets.length; i++) {
        if (str.includes(arrayBrackets[i])) {
            str = str.replace(arrayBrackets[i],'');
            i = -1;
        }
    }
    return str.length === 0 ? true : false;
}
