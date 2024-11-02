{
    // function with generics
    const addCourseToStudent=<T>(student:T)=>{
     const  course="Next level web development"
        return{
            ...student,
            course
        }
    }

    const student1=addCourseToStudent({name:"mx",email:"abir#gmail.com",devType:"next dev"})
    const student2=addCourseToStudent({name:"mx y",hasWatch:"appleWatch"})

    console.log(student1,student2);

    const createArrayWithGeneric=<T>(param:T)=>{
        return param
    }
    const arr1=createArrayWithGeneric(["Bangladesh","lew thela","Habibi","come","to","Dubai"])
    console.log(arr1);
}