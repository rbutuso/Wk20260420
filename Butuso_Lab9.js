var names = new Array("To Kill a Mockingbird","Jaws");  // You MUST add more names from homework
var published = new Array("July 11, 1960", "February 1, 1974");// You MUST add more dates from homework

// display the data in a tabular format
function display(){
    for(var i=0; i<names.length; i++) {
        var temp = "cell"+i+"0";
        document.getElementById(temp).innerHTML = names[i];
        temp = "cell"+i+"1";
        document.getElementById(temp).innerHTML = published[i];
    }
    
}


function SortIt( ){
    var oldest  = 0;
    var index = 0; 
    var j = 0;
    var k = 0;
    var count = 0;
    var temp = 0; var temp2 = "";
    
    count = published.length;

    for (k =0; k <= (count -1); k++ ){
         oldest = Date.parse(published[k]);
         index = k;
         
        for (j = (k+1); j <= (count-1); j++){
            
            if (Date.parse(published[j]) < oldest ) {
                oldest = Date.parse(published[j]);
                index = j;
                
                }
            }
        if(k != index){
            temp = published[k];
            published[k] = published[index];
            published[index] = temp;
            // use temp2 to help to swap 
            //  names[k] and names[index]
            //  similar to the above 3 lines in example
            //   .......
        }
    }

    display();   // this will display the sorted data
    
}