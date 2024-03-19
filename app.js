var userEnter = document.querySelector(".userEnter");
var usJoin = document.querySelector(".userJoin")
var res = document.querySelector(".res");
var array = [];


function uUnshift() {
    array.unshift(userEnter.value);
    res.innerHTML = array
    userEnter.value = '';
}
function uPush() {
    array.push(userEnter.value);
    res.innerHTML = array
    userEnter.value = '';
}
function uShift() {
    array.shift(userEnter.value);
    res.innerHTML = array
}
function uPop() {
    array.pop(userEnter.value);
    res.innerHTML = array
}
function uJoin() {
    var joinedArr = array.join(usJoin.value);
    res.innerHTML = joinedArr
    usJoin.value = '';
}