// 1.0
function map (func, array) {
    var len = array.length, result = new Array(len);
    for (var i = 0; i < len; i++) {
        result[i] = func(array[i]);
    }
    return result;
}
