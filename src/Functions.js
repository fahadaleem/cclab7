// This file contains all the basic functions that is required for matching the code elements 
// and return the class part of that. 

// Here are the list of functions
// - isKeyword
// - isInteger
// - isString
// - isArthematicOperator
// - isRelationalOperator
// - isIdentifier
// - isPuntuator
// - isDouble
// - isCompoundOperator




// Check if the element is a keyword. If there is keyword? then is it Datatype or not?
// if it is keyword then return the class part of the keyword
const isKeyword = (str) => {

  let classPart, classPartForDT, checkKeywordforDT = false, checkKeyword = false;


  // list of keywords, update the list here to add more keywords
  const listOfKeywords = [
    "if",
    "else",
    "elif",
    "for",
    "while",
    "do",
    "public",
    "new",
    "static",
    "char",
    "true",
    "false",
    "class",
    "this",
    "private"
  ];

  // list of data types.
  const dataTypes = [
    'number (i)',
    'number (f)',
    'number (d)',
    'number(i)',
    'number(f)',
    'number(d)',
    'word',
    'const',
    'bool'
  ]

  // check if the keyword is keyword
  if (listOfKeywords.includes(str)) {
    classPart = "keyword";
    checkKeyword = true;
    console.log("keyword", classPart);
  }
  // check if the keyword is datatype
  else if (dataTypes.includes(str)) {
    classPartForDT = 'DT'
    checkKeywordforDT = true;
    console.log("DT", classPartForDT);

  }

  // if the word is keyword of Data type then return class part of data type,
  // else if the word is only a keyword nor data type then return tha class part of that keyword
  return checkKeywordforDT ? classPartForDT : checkKeyword ? classPart : null;
};



// Check the word is integer 
const isInteger = (word) => {

  // integer regex
  const intRegex = new RegExp(/^[0-9]+$/);
  // if the word is matched with the integer regex then return the classpart int constant else return null
  return intRegex.test(word) ? "integer Constant" : null
}

// check the word for string

const isString = (word) => {

  // string regex
  let regString = new RegExp(/"[a-zA-Z0-9\s]*"/g);
  // if the word is matched with string regex then return classpart string constant else return nul
  return regString.test(word) ? "string constant" : null
}


// check the word for arthematic operator
const isArthematicOperator = (word) => {

  // list of plus, minis
  let PM = ['+', '-'];
  // list of multiply, div and modulus
  let MDM = ['*', '/', '%'];

  // if the word is in the PM list then return class PM
  if (PM.includes(word)) {
    return "PM"
  }
  // if the word is in the MDM list then return classpart MDM
  else if (MDM.includes(word)) {
    return "MDM"
  }
  // if the word is equal operator then return classpart OP
  else if (word === "=") {
    return "OP"
  }
  else
    return null; // if the word is not matched then returned null
}


// check the word for relational operator
const isRelationalOperator = (word) => {
  // list of relational operator
  let relationsOperator = ['<', '>', '>=', '<=', '!=', '=='];

  // return the classpart of the relationaloperator
  return relationsOperator[relationsOperator.indexOf(word)];
}

// check the word for the identifer
const isIdentifier = (word) => {
  // identifier regex
  let regIdentifer = new RegExp(/^[_a-zA-Z][_a-zA-Z0-9]*/);
  // if the word is match then return classpart ID else return null
  return regIdentifer.test(word) ? "ID" : null;

}

// check the word for the punctuator

const isPunctuator = (char) => {
  // list of punctuator
  const listOfPunctuators = ["[", "]", "{", "}", '(', ')', ",", ";", ".", ":"];

  // if the word is matched with punctuator then return the value part of that
  return listOfPunctuators.includes(char) ? listOfPunctuators[listOfPunctuators.indexOf(char)] : null;
};

// check the word for double
const isDouble = (word) => {
  // regex for the double regex
  let doubleRegex = new RegExp(/^[0-9]*\.?[0-9]e?/);

  // if the word with double regex then return true else false
  return doubleRegex.test(word);
}

// check for compound operator
const isCompoundOperator = (word) => {
  // regex for compound operator
  let regForCompoundOperator = new RegExp(/[%\*\/+-]=/);

  // if the word is matched with compound operator then return true else return false
  return regForCompoundOperator.test(word);
}


// check is the word contains an alphabet or a digit?
const checkAlphabet = (word)=>{
  // regex for the alphabet check
  let reg = new RegExp(/[a-zA-Z]{1}/);

  // return true if the word is an alphabet else return false
  return reg.test(word);
}
