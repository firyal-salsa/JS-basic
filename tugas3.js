let INPUT = ['xc', 'dz', 'bbb', 'dz'] 
let QUERY = ['bbb', 'ac', 'dz']  
    
    let compare = (input,query, one,two,three)=>{
        let input1 = input.filter(element => element == query[one]).length
        let input2 = input.filter(element => element == query[two]).length
        let input3 = input.filter(element => element == query[three]).length
        return `[${input1},${input2},${input3}] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT`
    }
    
    console.log(compare(INPUT,QUERY,0,1,2))
    