let diagonalArray = [
    ["Vienna", "Berlin", "Newcastle", "Pairs"],
    ["was", "is", "will be", "could be"],
    ["bad", "average", "nice", "super"],
    ["town", "state", "village", "city"],
];

let outputString = "";

for (i = 0; i <= 3; i++) {
    outputString += diagonalArray[i][i];
    outputString += " ";
}

document.write(outputString);
