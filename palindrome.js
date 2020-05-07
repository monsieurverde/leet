var reverse = function(x) {


    if(Math.sign(x) === -1){
        len = x.length
        z = x.toString().split("").map(function(t){return parseInt(t)})
        z = z.reverse()
        y= z.join("")
        y = parseInt(y,10)
        y = y * (-1)
        console.log(false)
    }
    else{
        len = x.length
        z = x.toString().split("").map(function(t){return parseInt(t)})
        z = z.reverse()
        y= z.join("")
        y = parseInt(y,10)
        if(y === x){
            console.log(true)}
        else{return(0)}
    }
};


reverse(-121)