let student = {
    name: "",
    age: 3,
    rollNO: 3,
    marks: 34,
    details: function name(params) {
        console.log("details");
    },
    address:{
        landmark: "Denmark",
        pincode: 29344
    }
}
// student.isMarried = false;
// let key = "age";
// console.log(student[key]);
// console.log(student);

// delete student.age;

// for (let obj in student){
//     console.log(student[obj]);
// }

console.log(student.address.landmark);