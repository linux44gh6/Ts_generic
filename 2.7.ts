{
    // asyncronus function

  interface UserType{
        id:number
        name:string
        username:string
        email:string
        address:{
            street:string
            suite:string
            city:string
            zipcode:string
            geo:string
        }
        phone:string
        website:string
        company:{
            name:string
            catchPhrase:string
            bs:string
        }
    }
    const getUser=async():Promise<UserType>=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        return data
    }
   const users=getUser()
   console.log(users );

    type SomeThing={
        some:string
    }
    const createPromise=():Promise<SomeThing>=>{
     return new   Promise((resolve,reject)=>{
        const data:SomeThing={some:"someThing"}
        if(data){
            resolve(data)
        }
        else{
            reject("Data not found")
        }
        })
    }

    // calling create promise function
    const showData=async():Promise<SomeThing>=>{
        const data:{some:string}=await createPromise()
        return data
    }
showData()
}