var userEnter = document.querySelector(".userEnter");
var usJoin = document.querySelector(".userJoin")
var res = document.querySelector(".res");
var array = [];


function uUnshift() {
    if (userEnter.value) {
        array.unshift(userEnter.value);
        res.innerHTML = array
        userEnter.value = '';
    }
};
function uPush() {
    if (userEnter.value) {
        array.push(userEnter.value);
        res.innerHTML = array
        userEnter.value = '';
    }
}
function uShift() {
    array.shift(userEnter.value);
    res.innerHTML = array
};
function uPop() {
    array.pop(userEnter.value);
    res.innerHTML = array
};
function uJoin() {
    if (usJoin.value) {
        var joinedArr = array.join(usJoin.value);
        res.innerHTML = joinedArr
        usJoin.value = '';
    }
};