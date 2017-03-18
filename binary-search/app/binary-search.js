Array.prototype.toTwenty = function() {
    // body...

        num = 1
        myArray = [];
        while(num <= 20){       

            myArray.push(num)      

            num++

        }
        return myArray
  
};


//toTwenty()
Array.prototype.toForty = function() {   
        // body...     

        num = 2 
        myArray = [];  
        while(num <= 40){     

            myArray.push(num)      
            num+=2;

        }
        return myArray
  
}

//toForty()
Array.prototype.toOneThousand = function() {  
        // body...     
        num = 10  
        myArray = [];  
        while(num <= 1000){   

        myArray.push(num);      

        num+=10;

        }
        
        return myArray;
  
};
Array.prototype.search = function (input) {
        var length  = this.length;
        var    max    = length;
        var   min     = 0;
        var   mid     = min + Math.floor((max - min)/2);
        var  count   = 0;

        while (this[mid - 1] !== input) {
            if (input > this[mid - 1]){
                min  = mid + 1;
                count++;
            } else {
                max = mid -1;
            }
            mid  = min + Math.ceil((max - min)/2);


            if (min === mid && this[mid - 1] !== input){
                return new keep (count, length, -1);
            } 
        }

        if (input === this[length - 1]) return {
            length: length, index: (max - 1), count: 0
        };

        return new keep (count, length, (mid - 1));
};



function keep(count,length,index){
        this.count = count;
        this.length = length;
        this.index = index;
  
}
module.exports = Array.prototype;
