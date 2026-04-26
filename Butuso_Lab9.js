var names = new Array("To Kill a Mockingbird","Jaws","Don Quixote", "Moby-Dick", "Northern Lights")
var published = new Array("July 11, 1960", "February 1, 1974", "July 11, 1615", "October 18, 1851", "November 12, 1995");

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
                //keep parallel arrays in sync by swapping names as well
                temp2 = names[k];
                names[k] = names[index];
                names[index] = temp2;
                //
        }
    }

    display();   // this will display the sorted data
    
}