let fruits = ["apple", "banana", "kiwi"];

document.write("Initial Array: " + fruits);
document.write("<br>");
document.write("<br>");
// Current array in memory: apple, banana, kiwi

fruits.push("oranges");
document.write("After .push : " + fruits);
document.write("<br>");
document.write("<br>");

// Current array in memory: apple, banana, kiwi, orange

document.write("Returned element: " + fruits.pop(3));
document.write("<br>");
document.write("<br>");

document.write("Array after pop: " + fruits);

// Current array in memory: apple, banan, kiwi, orange
