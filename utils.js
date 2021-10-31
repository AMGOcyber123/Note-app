// const name = "AAayu"
// const add = function(a,b){
//     return a+b;
// } 
// module.exports = add

const check = function(a){
    if(a>0){
        return 'positive number'
    }
    if(a === 0){
        return 'zero'
    }
    else{
        return 'negative number'
    }
}

module.exports = check