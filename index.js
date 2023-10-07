// code your solution here
const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "L" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" }
    //...
]
function superbowlWin(arr) {
    const myResult = arr.find(el => el.result === "W")
    return myResult ? myResult.year : undefined
};
console.log(superbowlWin(record));



