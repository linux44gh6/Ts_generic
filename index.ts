{
    // type assertion

    const kgToGm=(value:number|string|boolean|undefined)=>{
        if(typeof value==='number'){
            const convertToValue=value*1000
            console.log(convertToValue);
        }
        else if(typeof value==="string"){
            const convertToValue=parseFloat(value)*1000
            return convertToValue
        }
    }
    const returnValue=kgToGm('1000') as number
    console.log(returnValue);
}