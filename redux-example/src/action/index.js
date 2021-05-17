export const inscrementNumber=() => {
    return {
        type: "INCRE"
    }
}
export const notNull=(language) => {
  //  console.log(language);
    return {
        
        type: "NOTNULL",
        payload:language
    }
}

    export const drecNumber=() => {
        return {
            type: "DREC"
        }
    }