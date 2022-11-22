
//for variables 
let greeting:string = "Hello"

greeting.toLowerCase
console.log(greeting)

//number
let userId: number = 30344
let sid:object = userId.toString
console.log(sid)

let arr: object  = [2,3,4,5,6,7]
console.log(arr)

//functions 
const twoNumbers = (num : number) => {
    return num*2
}
const  getUpper = (key : string) =>{
    return key.toUpperCase()
}
const signUp = (name : string,age : number ,email : string,paid: boolean) => {
     return {name,age,email,paid}
} 
userId =  twoNumbers(4)

 export {}

