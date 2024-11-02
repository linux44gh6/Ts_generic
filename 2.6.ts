{
    // constrains of ts--->jkn kono kisu k force kora hoy tkn seta k constrain bola hoy..jodi kono kisu takbe sure buja jay then constrain use kora joy
    
   interface commonGeneric{
        id:number
        name:string
        email:string
    }
    const addCourseToStudent=<T extends commonGeneric>(student:T)=>{
        const  course="Next level web development"
           return{
               ...student,
               course
           }
       }

       const student1=addCourseToStudent<{
        id:number
        name:string
        email:string
        
       }>({email:'',id:45,name:'milon'})

       const student2=addCourseToStudent<{
        id:number
        name:string
        email:string

       }>({email:'',id:45,name:'Hilon'})
}