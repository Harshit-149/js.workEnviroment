const tinderUser = new Object()         //this is singleton

//const tinderUser = {}                   //this is non singleton


tinderUser.name="Peter"
tinderUser.age=25
tinderUser.isLoggedIn=false

//console.log(tinderUser)


const regularUser={
    email:"peter@gmail.com", 
    fullName:{
            userFullName: {
                firstName:"Harshit",
                lastName:"Kushwaha"
            }
    }
}

//console.log(regularUser.fullName.userFullName.lastName)

const obj1={1:"a",2:"b"}
const obj2={10:"regularUser",20:"irregularUser"}

//const obj3 = {obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)