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

  //4 selection sort options
  function sortDateAsc() {
    var count = published.length;

    for (var k = 0; k <= (count - 1); k++) {
      var bestValue = Date.parse(published[k]);
      var index = k;

      for (var j = (k + 1); j <= (count - 1); j++) {
        if (Date.parse(published[j]) < bestValue) {
          bestValue = Date.parse(published[j]);
          index = j;
        }
      }

      if (k != index) {
        swapElements(published, names, k, index);
      }
    }
  }

  function sortDateDesc() {
    var count = published.length;

    for (var k = 0; k <= (count - 1); k++) {
      var bestValue = Date.parse(published[k]);
      var index = k;

      for (var j = (k + 1); j <= (count - 1); j++) {
        if (Date.parse(published[j]) > bestValue) {
          bestValue = Date.parse(published[j]);
          index = j;
        }
      }

      if (k != index) {
        swapElements(published, names, k, index);
      }
    }
  }

  function sortNameAsc() {
    var count = names.length;

    for (var k = 0; k <= (count - 1); k++) {
      var bestValue = names[k].toLowerCase();
      var index = k;

      for (var j = (k + 1); j <= (count - 1); j++) {
        if (names[j].toLowerCase() < bestValue) {
          bestValue = names[j].toLowerCase();
          index = j;
        }
      }

      if (k != index) {
        swapElements(names, published, k, index); // swap names and published together
      }
    }
  }

  function sortNameDesc() {
    var count = names.length;

    for (var k = 0; k <= (count - 1); k++) {
      var bestValue = names[k].toLowerCase();
      var index = k;

      for (var j = (k + 1); j <= (count - 1); j++) {
        if (names[j].toLowerCase() > bestValue) {
          bestValue = names[j].toLowerCase();
          index = j;
        }
      }

      if (k != index) {
        swapElements(names, published, k, index);
      }
    }
  }

  //swap elements i and j in parallel arrays a1 and a2
  function swapElements(a1, a2, i, j) {
    //capture the original values before swapping
    var temp = a1[i];
    a1[i] = a1[j];
    a1[j] = temp;

    var temp2 = a2[i];
    a2[i] = a2[j];
    a2[j] = temp2;
  }



  function onSortClick(){
    
    var selSort = document.querySelector('input[name="sortOption"]:checked').value;

    switch (selSort) {
      case "nameAsc":
        sortNameAsc();
        break;

      case "nameDesc":
        sortNameDesc();
        break;

      case "dateAsc":
        sortDateAsc();
        break;

      case "dateDesc":
        sortDateDesc();
        break;
    }

    display();   // display the sorted data

  }

  display(); // display when page loads