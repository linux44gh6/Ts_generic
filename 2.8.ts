{
    // map type
    const arrayOfNumber:number[]=[1,2,3,4]
    const arrayOfString:string[]=['x','b']

    type areaNumber={
        height:string
        width:number
    }
    type AreaString<T>={
        [key in keyof T]:T[key];
    }
    const area1:AreaString<areaNumber>={
        height:'40',
        width:34
    }

}