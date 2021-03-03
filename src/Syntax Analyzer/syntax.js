console.log("tokens from syntax", tokens);

let index = 0;




// <for_st>=>for (<c1> <c2> ; <c3>) <body>

const For = ()=>{
    if(tokens[index].classPart === "for")
    {
        index++;
        if(tokens[index].classPart === "(")
        {
            index++;
            if(C1())
            {
                if(C2())
                {
                    if(tokens[index].classPart === ";")
                    {
                        index++;
                        if(C3())
                        {
                            if(tokens[index].classPart === ")")
                            {
                                index++;
                                if(Body())
                                {
                                    return true;
                                }
                                return false;
                            }
                        } return false
                    } return false
                } return false
            } return false
        } return false;
    }
    return false;
}

// C1 = <DEC> | <asgn_st> | ;

const C1 = ()=>{
    if(tokens[index].classPart === "DT")
    {
        if(DEC())
        {
            return true;
        } 
    }
    else if(tokens[index].classPart === "ID")
    {
        if(Asgn_st())
        {
            return true;
        }
    }
    else if(tokens[index].classPart === ";")
    {
        index++;
        return true;
    }
}

// <Comp_asgn>=> PM= | MDM=

const comp_asgn = ()=>{
    if(tokens[index].classPart === "PM")
    {
        index++;
        if(tokens[index].classPart === "=")
        {
            return true;
        }
        return false;
    }
    else if(tokens[index].classPart === "MDM")
    {
        index++;
        if(tokens[index].classPart === "=")
        {
            return true;
        }
        return false;
    }

    return false;

}


// <Asgn_Op>=> = | <comp_asgn>

const Asgn_op=()=>{
    if(tokens[index].classPart === "=")
    {
        index++;
        return true
    }
    else if(tokens[index].classPart === "PM" || tokens[index].classPart === "MDM")
    {
        if(comp_asgn())
        {
            return true;
        }
    }
    return false;
}


// <Asgn_st>=>ID <X> <asgn_op><exp>;

const Asgn_st = ()=>{
    if(tokens[index].classPart === "ID")
    {
        index++;
        if(X())
        {
            if(Asgn_op())
            {
                if(exp())
                {
                    return true;
                }
            }
        }
    }
        return false;
}





// CFG :
// FUNC_ST => FUNC DT ID <Y>

const func_ST = () => {
  if (tokens[index].classPart === "FUNC") {
    index++;
    if (tokens[index].classPart === "DT") {
      index++;
      if (tokens[index].classPart === "ID") {
        index++;
        if (Y()) {
          return true;
        }
      }
    }
  } 
    return false;
};

// <LIST> => ; | ,ID<INIT><LIST>

const LIST = () => {
  if (tokens[index].classPart === ";") {
    index++;
    return true;
  } else if (tokens[index].classPart === ",") {
    index++;
    if (tokens[index].classPart === "ID") {
      index++;
      if (INIT()) {
        if (LIST()) {
          return true;
        }
      }
    }
  }
    return false;
};

// const => INT CONST| DOUBLE CONST | STRING CONST |  CHAR CONST | BOOL CONSTS
const CONST = () => {
  if (
    tokens[index].classPart === "INT CONSTANT" ||
    tokens[index].classPart === "DOUBLE CONSTANT" ||
    tokens[index].classPart === "STRING CONSTANT" ||
    tokens[index].classPart === "CHAR CONSTANT" ||
    tokens[index].classPart === "BOOL CONSTANT"
  ) {
    index++;
    return true;
  }
 
      return false;
};

// DEC => DT ID <INIT> <LIST>
const DEC = () => {
  if (tokens[index].classPart === "DT") {
    index++;
    if (tokens[index].classPart === "ID") {
      index++;
      if (INIT()) {
        if (LIST()) {
          return true;
        }
      }
    }
  } 
    return false;
};

// <INIT> => = <OE> | null
const INIT = () => {
  if (tokens[index].classPart === "=") {
    index++;
    if (OE()) {
      return true;
    }
  } else if (
    tokens[index].classPart === "=" ||
    tokens[index].classPart === ";" ||
    tokens[index].classPart === "}"
  ) {
    return true;
  } 
    return false;
};

const S = () => {
  if (
    tokens[index].classPart === "DT" ||
    tokens[index].classPart === "ID" ||
    tokens[index].classPart === "while" ||
    tokens[index].classPart === "for" ||
    tokens[index].classPart === "if" ||
    tokens[index].classPart === "do"
  ) {
    if (SST()) {
      return true;
    }
  } else if (tokens[index].classPart === "AM") {
    if (class_ST()) {
      return true;
    }
  } else if (tokens[index].classPart === "FUNC") {
    if (func_ST()) {
      return true;
    }
  } else if (tokens[index].classPart === "interface") {
    if (interface()) {
      return true;
    }
  }
    return false;
};
