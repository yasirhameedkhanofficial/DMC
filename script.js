let eng = +prompt("Enter English Marks");
let isl = +prompt("Enter Islamyat Marks");
let urdu = +prompt("Enter Urdu Marks");
let ps = +prompt("Enter Pak-study Marks");
let cs = +prompt("Enter Computer Since Marks");
let maths = +prompt("Enter Maths Marks");
console.log("English Marks"+" "+ eng);
console.log("Islamyat Marks"+" "+ isl);
console.log("Urdu Marks"+" "+ urdu);
console.log("Pak-study Marks"+" "+ ps);
console.log("Computer since Marks"+" "+ cs);
console.log("maths Marks"+" "+ maths);
let totalMarks=500;
let obMarks=eng+isl+urdu+ps+cs+maths;
console.log("Total Marks"+" "+ totalMarks);
console.log("Obtain Marks"+" "+ obMarks);
let per=obMarks*100/totalMarks;
console.log("Persentage "+per);
if (per >= 90 && per <=100) {
    console.log("Grade A+");
}
else if (per >= 80 && per <= 89) {
    console.log("Grade B");
}
else if (per >= 70 && per <= 79) {
    console.log("Grade C");
}
else if (per >= 60 && per <= 69) {
    console.log("Grade D");
}
else if (per >= 50 && per <= 59) {
    console.log("Grade E");
}else if(per >= 1 && per <= 49){
    console.log("YOU HAVE FAIL");
    
}else{
    console.log("YOU HAVE ENTER WORRNG DATA KINDLY TRY AGAIN");
    
}