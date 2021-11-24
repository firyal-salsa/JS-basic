let Matrix = [  [1, 2, 0], 
                [4, 5, 6], 
                [7, 8, 9]
            ]

let calculate = (matrix) => {
    console.table(matrix)
    let diagonal1 = matrix[0][0] + matrix[1][1] + matrix[2][2]
    let diagonal2 = matrix[0][2]+matrix[1][1]+matrix[2][0]
    let result = diagonal1-diagonal2 
    return `${diagonal1}-${diagonal2}=${result}`
}

console.log(calculate(Matrix))