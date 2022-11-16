console.log("Hello");
//bad habits --using any and Object
//Write types  ES6 => ES5
var a = "Hello";
var b = 123;
b = 456;
//b = "67" // Error
var c = true;
//null, undefined
//string literal
var gender = "male";
gender = "female";
//gender = "Male" // Error
//gender = "Female" // Error
var age = "23";
age = 24;
age = "twenty four";
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
//arr1.push("1123"); // Error
var arr3 = ["A", "B", "C", "D"];
var arr4 = ["A", "B", "C", "D"];
var arr5 = [1, 2, "Hey", "23", 10]; //both simultaneously
arr5.push("1234");
var arr6 = [1, 2, 3, 4];
//arr6.push(8); //error no push or pop
//Object
var user = {
    id: 1,
    name: "Himanku"
};
//user = {lastname: "Gogoi"}; //error
var arr_users = [
    { id: 1, name: "Hima 1" },
    { id: 2, name: "Hima 2" },
    { id: 3, name: "Hima 3" },
    { id: 4, name: "Hima 4" },
];
//age is optional here
var arr_userss = [
    { id: 1, name: "Hima 1" },
    { id: 2, name: "Hima 2" },
    { id: 3, name: "Hima 3", age: 24 },
    { id: 4, name: "Hima 4" },
];
var students = [
    { roleNo: 1, name: "Alok Singh", batch: "RCT-201", "class": 1 },
    { roleNo: 2, name: "Shivam", batch: "RCT-201", "class": 1 },
    { roleNo: 3, name: "Aditya", batch: "RCT-201", "class": 1 },
    { roleNo: 4, name: "Arpit", batch: "RCT-101", "class": 1 },
    // {roleNo: 5, FullName: "Hima", batch: "RCT-201", class: 6, age: 56} // error
    // {roleNo: 6, FullName: "Hima", batch: "RCT-301", class: 6, age: 56} // error
];
var cartItems = [
    {
        id: 1,
        products: [{ id: 1, name: "Towel", price: 250, quantity: 3 }],
        total: 250
    }
];
