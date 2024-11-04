{
    class Animal{
        constructor(public name:string, public type:string, public sound:string){
        }
        makeSound(){
            console.log(`The ${this.name} sound like ${this.sound}`);
        }
    }
    const dog=new Animal("Kutta","dog","ghew gew")
    dog.makeSound()
}