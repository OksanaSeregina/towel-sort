// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    let result = matrix
        .map((elem, index) => {
            return index % 2 === 0 ? elem : elem.reverse();
        })
        .flat(Infinity);
    return result;
};
