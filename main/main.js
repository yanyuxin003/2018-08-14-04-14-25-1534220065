const numbers = [
    ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
    ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
    ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']
]
module.exports = function main(str) {
    const  result =[[],[],[]]

    for(let s of str){
        result[0].push(numbers[0][s])
        result[1].push(numbers[1][s])
        result[2].push(numbers[2][s])
    }
    return result.map(row=>row.join(' ')+'\n').join('');
};