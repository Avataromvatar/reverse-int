module.exports = function reverse(n) {
    let tmp = "" + n;
    const arr_char = tmp.split('');
    let ret = "";
    for (let index = arr_char.length - 1; index >= 0; index--) {
        ret += arr_char[index];
    }
    return parseInt(ret);
}