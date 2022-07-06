module.exports = function reverse (n) {
    let temp = Math.abs(n).toString().split('').reverse().join('');
    return Number(temp);
}