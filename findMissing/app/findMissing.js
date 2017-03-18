module.exports = {
    findMissing : function (input1, input2) {
        if (input1.length === 0 && input2.length === 0 || input2.length === input1.length){
            return 0;
        }
        if( input1.length > input2.length){
          var min = input2
        }
        else{
           min = input1
        }
        
        if( input1.length > input2.length){
          var max = input1
        }
        else{
           max = input2;
        }
           
        
        var myfilter = max.filter(function(val){
            return min.indexOf(val) === -1;
        })
        return myfilter[0];
    }
}
//findMissing([1, 2], [1, 2, 5])
