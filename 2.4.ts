{
    interface Developer<T,X>{
        name:string
        computer:{
            brand:string
            model:string
            releasYear:number
        }
        smartWatch:T
        bike?:X
        
    }
    interface Bike{
        name:string
    }

    type smartWatchType={
        brand:string
        price:number
        model:string
    }

    const poorUser:Developer<smartWatchType,Bike>={
        name:"milon hossain",
        computer:{
            brand:'samsung',
            model:"A30",
            releasYear:2015
        },
        smartWatch:{
            brand:'samsung',
            price:120,
            model:"454"
        },
        bike:{
            name:"Kawasaki"
        }
    }
}