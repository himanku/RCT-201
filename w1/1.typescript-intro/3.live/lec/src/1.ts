console.log("Hello")
//bad habits --using any and Object
//Write types  ES6 => ES5
const a: string = "Hello";
let b: number = 123;
b = 456;
//b = "67" // Error

let c: boolean = true;

//null, undefined

//string literal
let gender: "male" | "female" = "male";
gender = "female";
//gender = "Male" // Error
//gender = "Female" // Error

let age: number | string = "23"
age = 24;
age = "twenty four"

let arr1: number[] = [1,2,3,4];
let arr2: Array<number> = [1,2,3,4];
//arr1.push("1123"); // Error
let arr3: string[] = ["A", "B", "C", "D"]
let arr4: Array<string> = ["A", "B", "C", "D"];

let arr5: Array<number | string> = [1, 2, "Hey", "23", 10]; //both simultaneously
arr5.push("1234");

let arr6: readonly number[] = [1,2,3,4];
//arr6.push(8); //error no push or pop

//Object
let user: {id: number; name: string} = {
    id: 1,
    name: "Himanku"
}
//user = {lastname: "Gogoi"}; //error

let arr_users: {id: number; name: string}[] = [
    {id: 1, name: "Hima 1"},
    {id: 2, name: "Hima 2"},
    {id: 3, name: "Hima 3"},
    {id: 4, name: "Hima 4"},
];

//alternative solution ot this
type user = {id: number; name: string; age?: number};
//age is optional here
let arr_userss: user[] = [
    {id: 1, name: "Hima 1"},
    {id: 2, name: "Hima 2"},
    {id: 3, name: "Hima 3", age: 24},
    {id: 4, name: "Hima 4"},
];

//define type for
type users= {roleNo: number; name: string; batch: "RCT-101" | "RCT-201"; class: number; age?: number};
let students: users[] = [
    {roleNo: 1, name: "Alok Singh", batch: "RCT-201", class: 1},
    {roleNo: 2, name: "Shivam", batch: "RCT-201", class: 1},
    {roleNo: 3, name: "Aditya", batch: "RCT-201", class: 1},
    {roleNo: 4, name: "Arpit", batch: "RCT-101", class: 1},
    // {roleNo: 5, FullName: "Hima", batch: "RCT-201", class: 6, age: 56} // error
    // {roleNo: 6, FullName: "Hima", batch: "RCT-301", class: 6, age: 56} // error
];

type Prod = {id: number; name: string; price: number; quantity: number}
type Cart = {id: number; products: Prod[]; total: number};

let cartItems: Cart[] = [
    {
        id:1,
        products: [{id:1, name: "Towel", price: 250, quantity: 3}],
        total: 250
    }
]