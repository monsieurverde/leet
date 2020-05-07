/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(Math.sign(x) === -1){
         len = x.length
         z = x.toString().split("").map(function(t){return parseInt(t)})
         z = z.reverse()
         y= z.join("")
         y = parseInt(y,10)
         y = y * (-1)
         if(y>-2147483647){
             return(y)}
         else{return(0)}
 
         }
     else{
         len = x.length
         z = x.toString().split("").map(function(t){return parseInt(t)})
         z = z.reverse()
         y= z.join("")
         y = parseInt(y,10)
         if(y<2147483647){
             return(y)}
         else{return(0)}
     }
 };

reverse(-153423646)