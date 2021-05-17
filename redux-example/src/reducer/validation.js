const ipayload = '';
const checkNotNull = (state = ipayload, action) => {
    switch (action.type) {
        case "NOTNULL": {
            console.log(action.payload);
            if(action.payload.pValue===undefined || action.payload.pValue===''){
                console.log("Empty");
                action.payload.errorMsg= action.payload.propertyName+"  can not be Empty";
                action.payload.status='F';
               // state=action.payload;
                console.log(action.payload);
                return action.payload;
            }
            
        }
       
        default: return state;
    }
}
export default checkNotNull;