var student1 = {
    id: 121,
    phone: 1745,
    name: "abir"
}

var student2 = {
    id:254,
    phone: 420,
    name: "Mahi"
}

var phoneNo = student2.phone;
console.log("phone no is:"+ phoneNo);

console.log(student1);
console.log(student2);

var phoNo = student2["phone"];
console.log(phoNo);

var phone3 = "phone";
var phn4 = student1[phone3];
console.log(phn4);

student2.phone = 84000;
console.log(student2);