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
Array.prototype.search = function (A){
        var length = this.length;
        var top = length;
        var down = 1;
        var mid = down + Math.floor((top - down)/2);
        var count = 0;

        
        while (this[mid -1] !== A) {
          
          if (A > this[mid - 1]){
              down = mid + 1;            
              count ++; 
          }
          else{
              top = mid - 1;
          }
          mid = down + Math.ceil((top-down)/2);
          
          if (down === mid && this[mid -1] !== A){
              return new holder (count, length, -1);
          }

      }

      if (A === this[length -1]) 
        return {
            length: length, index : (top -1), count : 0
        };


          
          return new holder (count, length, (mid -1));
          
        }
        
  function holder (count,length,index){
    this.count =count;
    this.lenght = length;
    this.index = index;
  }
