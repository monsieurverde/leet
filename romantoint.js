/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

var x = s.split("");
roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
prev = 0
num = 0
x.forEach(function(item,index){
    curr = roman[item]
    num += curr


    if (curr > prev){
        num -= 2 * prev
        
    }
    prev = curr
    console.log(num);
    })  
 


};

romanToInt('MCMXCIV')