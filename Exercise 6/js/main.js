// Ex 6
let fruit = ["apple", "banana", "kiwi"];

document.write("Start = " + fruit);
document.write("<br>");

fruit.push("orange");
document.write("Output = " + fruit);
document.write("<br>");

document.write("Output = " + fruit.slice(0, 3));

document.write("<br>");
document.write("<br>");

// Ex 7
let animal = ["monkey", "horse", "dog"];

document.write("Start = " + animal);
document.write("<br>");

animal.reverse();
document.write("Output = " + animal);
document.write("<br>");

animal.unshift("cat");
document.write("Output = " + animal);
