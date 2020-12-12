// Separator function, it takes a line as an input and return the array of the elements. 
// Example "const pi = 9.987" return "['const','pi','=','9.987']"



const separator = (line) => {
    console.log(line); //if(a<23); if a 23

    // Regex for relational operator < > ! =
    const regPatforRelationalOperator = new RegExp(/[<>!==]{1}=?/g); // <= >= != 

    // Regex for Punctuators
    const regPatforPunctuators = new RegExp(/[\[\]{}();.:]/g);

    // Regex for Arthematic Operators
    const regPatforArthematicOperator = new RegExp(/[%+*\/-]/g);

    // Regex for String
    const regString = new RegExp(/"[\sa-zA-Z0-9]*[-]*"/g);

    // Regex for double / floating values
    const doubleRegex = new RegExp(/([0-9]+\.?[0-9]+e?(-|\+)?[0-9]+)/g);

    // Regex for compound operator
    const regForCompoundOperator = new RegExp(/[%\*\/+-]=/g);

    // Regex for number datatype
    const regForNumberDT = new RegExp(/number\s*\([fid]\)/);


    // Get the arrays of match string from the regex
    let doubleCheck = line.match(doubleRegex);
    let compoundCheck = line.match(regForCompoundOperator);
    let stringCheck = line.match(regString);
    let DTCheck = line.match(regForNumberDT);

    // if there is datatype, replaced that DT from the spaced characters
    if (DTCheck) {
        for (let i = 0; i < DTCheck.length; i++) {
            line = line.replace(DTCheck[i], " ");
        }
    }

    // if there is string, replaced that String from the spaced characters

    if (stringCheck) {
        for (let i = 0; i < stringCheck.length; i++) {
            line = line.replace(stringCheck[i], " ");
        }
    }

    // if there is compound operator, replaced that compound operator from the spaced characters

    if (compoundCheck) {
        for (let i = 0; i < compoundCheck.length; i++) {
            line = line.replace(compoundCheck[i], " ");
        }
    }

    // if there is double values in the line , replaced that double from the spaced characters

    if (doubleCheck) {
        for (let i = 0; i < doubleCheck.length; i++) {
            line = line.replace(doubleCheck[i], " ");
        }
    }


    let relationalOperator = line.match(regPatforRelationalOperator);
    let puntuator = line.match(regPatforPunctuators);
    let arhtematic = line.match(regPatforArthematicOperator);



    // if any check returns null values then assign the variable to an empty array to overcome the destructing error. 

    relationalOperator = relationalOperator ? relationalOperator : [];
    puntuator = puntuator ? puntuator : [];
    arhtematic = arhtematic ? arhtematic : [];
    stringCheck = stringCheck ? stringCheck : [];
    doubleCheck = doubleCheck ? doubleCheck : [];
    compoundCheck = compoundCheck ? compoundCheck : [];
    DTCheck = DTCheck ? DTCheck : [];


    let splitArr = [];

    // Combine all the arrays that are match from the regex
    splitArr = splitArr.concat(...relationalOperator, ...puntuator, ...arhtematic, ...stringCheck, ...doubleCheck, ...compoundCheck, ...DTCheck);


    // Remove the elements that are already matched, replaced that placed with space

    for (let i = 0; i < splitArr.length; i++) {
        const temp = splitArr[i];
        line = line.replace(temp, " ");
    }

    // now, split the line with space seprator and concatenate the remaining elements in splitarray 
    splitArr = splitArr.concat(...line.split(" "));

    // remove the falsy values from the resulting splitArray
    const filteredArr = splitArr.filter(Boolean);


    // to check what is the final output of the line after separation?
    console.log(filteredArr);

    // Return back to the filtered
    return filteredArr.reverse();

}