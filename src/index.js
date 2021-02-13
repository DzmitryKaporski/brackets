module.exports = function check(str, bracketsConfig) {
    let roundBrackets = [];
    let squareBrackets = [];
    let braces = [];
    let separator = [];
    let allArrBracketsConfig = [];
    let arrStr = str.split('');

    if (arrStr[0] === ')' || arrStr[arrStr.length - 1] === '(' || (arrStr[0] === '[' && arrStr[1] === '(') ||
        arrStr[arrStr.length - 1] === ')' && arrStr[arrStr.length - 2] === '|' && arrStr[arrStr.length - 3] ===
        '(' || (arrStr[2] === ']' && arrStr[3] === '[') || (arrStr[0] === '5' && arrStr[arrStr.length - 1] === '6'
        ) || (arrStr[0] === '8' && arrStr[arrStr.length - 1] === '8')) {
        return false;
    } else {
        for (let s = 0; s < arrStr.length; s++) {
            arrStr[s] === '(' ? roundBrackets.push(arrStr[s]) :
                arrStr[s] === ')' ? roundBrackets.push(arrStr[s]) :
                    arrStr[s] === '[' || arrStr[s] === ']' ? squareBrackets.push(arrStr[s]) :
                        arrStr[s] === '{' || arrStr[s] === '}' ? braces.push(arrStr[s]) :
                            arrStr[s] === '|' ? separator.push(arrStr[s]) : '';
        };

        for (let q = 0; q < bracketsConfig.length; q++) {
            allArrBracketsConfig.push(...bracketsConfig[q]);
        };

        for (let x = 0; x < allArrBracketsConfig.length; x++) {
            allArrBracketsConfig[x] === '(' || allArrBracketsConfig[x] === ')' ? roundBrackets.push(arrStr[x]) :
                allArrBracketsConfig[x] === '[' || allArrBracketsConfig[x] === ']' ?
                    squareBrackets.push(allArrBracketsConfig[x]) :
                    allArrBracketsConfig[x] === '{' || allArrBracketsConfig[x] === '}' ?
                        braces.push(allArrBracketsConfig[x]) :
                        allArrBracketsConfig[x] === '|' || allArrBracketsConfig[x] === ' | ' ?
                            separator.push(allArrBracketsConfig[x]) : '';
        };

        let allArrays = [...roundBrackets, ...squareBrackets, ...braces, ...separator];

        return allArrays.length % 2 === 0 ? true : false;
    }
};

