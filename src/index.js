// select the token button
const generateButton = document.querySelector("#generate");

// the function that generates the tokens
const generateTokens = () => {


    const tokens = []; // data structure arrays where all the tokens objects will be stored


    // get the content of the file from the code textarea input
    // line = "const pi=9.123; \n number (i) num=2123;"
    let line = codeTextArea.value;
    // split the code by the new line seprator. So, the line will become an array of lines
    // line[0] = "const pi=9.123;"
    // line[1] = "number (i)=2123;"
    line = line.split("\n");

    // loop untill the tokens will be generate of all lines
    for (let lineNo = 0; lineNo < line.length; lineNo++) {

        // pass the line to the separator function and then get the separated array
        const sepratedValue = separator(line[lineNo]);


        for (let i = 0; i < sepratedValue.length; i++) {
            const temp = sepratedValue[i][0]; // get the first characters

            // check if the first characters is alphabet, underscore or opening bracket(for number data type).
            if (checkAlphabet(temp) || temp === "_" || temp === "(") {
                const Keyword = isKeyword(sepratedValue[i]); // check for the keyword
                // if the keyword is null, then check for identifer
                if (Keyword === null) {
                    // check the word is identifer by matching the identifier regex
                    const identifier = isIdentifier(sepratedValue[i]);

                    // create token
                    const token = {
                        classPart: "ID",
                        valuePart: sepratedValue[i],
                        lineNo: lineNo + 1
                    }
                    // push the tokens to the token arrays
                    tokens.push(token);
                }
                else {

                    // if there is a keyword, then make a token for the keyword
                    const token = {
                        classPart: Keyword,
                        valuePart: sepratedValue[i]
                    }
                    // create token
                    tokens.push(token);

                    continue;
                }
            }

            else {
                // check integer constant
                const intConstant = isInteger(sepratedValue[i]);
                // if the intconstant is not null, then create the token for int constant
                if (intConstant != null) {
                    const token = {
                        classPart: "INT CONSTANT",
                        valuePart: sepratedValue[i],
                        lineNo: lineNo + 1

                    }

                    tokens.push(token);
                }

                // check for the arthematic operator
                const arthematicOperator = isArthematicOperator(sepratedValue[i]);
                // if the arthematic operator is not null, then check for the inc or dec?
                if (arthematicOperator != null) {
                    // check the first characters is + and next characters is also +, then create the token for inc
                    if (sepratedValue[i] === "+" && sepratedValue[i + 1] === "+") {
                        i = i + 1; // increment i for next characters
                        const token = {
                            classPart: "INC",
                            valuePart: "++",
                            lineNo: lineNo + 1

                        }

                        // push the tokens
                        tokens.push(token);
                    }
                    // check the first characters is - and next characters is also -, then create the token for dec

                    else if (sepratedValue[i] === "-" && sepratedValue[i + 1] === "-") {
                        i = i + 1; // increment i for next characters
                        const token = {
                            classPart: "DEC",
                            valuePart: "--",
                            lineNo: lineNo + 1

                        }
                        // push the tokens
                        tokens.push(token);
                    }

                    else { 
                        // if there is no dec or inc then create the token for the arthematic operator either PM or MDM
                        const token = {
                            classPart: arthematicOperator,
                            valuePart: sepratedValue[i],
                            lineNo: lineNo + 1

                        }
                        // push the tokens
                        tokens.push(token);
                    }
                }

                // check relational operator
                const relatoonalOp = isRelationalOperator(sepratedValue[i]);
                // if ROP is not null, then create the token for ROP
                if (relatoonalOp != null) {
                    const token = {
                        classPart: "ROP",
                        valuePart: sepratedValue[i],
                        lineNo: lineNo + 1

                    }
                    // push the tokens
                    tokens.push(token);
                }

                // check string constant
                const stringConstant = isString(sepratedValue[i]);
                // if stringConst not null, then create the token for string constant
                if (stringConstant != null) {
                    const token = {
                        classPart: "STRING CONSTANT",
                        valuePart: sepratedValue[i].replace(/"/g, ""),
                        lineNo: lineNo + 1

                    }

                    // push the token
                    tokens.push(token);
                }

                // check for the double values or double constantss
                const doubleConstant = isDouble(sepratedValue[i]);
                // if not null, then create token for double
                if (doubleConstant != false) {
                    const token = {
                        classPart: "DOUBLE CONSTANT",
                        valuePart: sepratedValue[i],
                        lineNo: lineNo + 1

                    }
                    // push the token
                    tokens.push(token);
                }

                // check for compound operator
                const compoundCheck = isCompoundOperator(sepratedValue[i]);
                // if not null, then create tokens
                if (compoundCheck != false) {
                    const token = {
                        classPart: "COM OP",
                        valuePart: sepratedValue[i],
                        lineNo: lineNo + 1

                    }
                    // push the token
                    tokens.push(token);
                }

                // check for punctuators
                const punctuator = isPunctuator(sepratedValue[i])
                // if not null, then create the tokens of punctuator
                if (punctuator !== null) {
                    const token = {
                        classPart: punctuator,
                        valuePart: sepratedValue[i],
                        lineNo: lineNo + 1

                    }

                    // push the token
                    tokens.push(token);
                }
            }




        }
    }

    // print the output of tokens array which is the arrays of objects, convert it to string and then display in textarea
    document.querySelector("#tokens-output").value = JSON.stringify(tokens, null, 4);

}



// add event to the generate button, when clicked then perform the generate tokens functions
generateButton.addEventListener("click", generateTokens);