// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //create a result arr
  var result = [];
  //set alias to document body
  var elements = document.body;
  //set a helper function
  var hasClass = function(elements) {
    //if classList exists and contains the className input
    if (elements.classList && elements.classList.contains(className)) {
      //push those elements into result
      result.push(elements);
    }
    //if elements have children
    if (elements.hasChildNodes()) {
      //set alias for child nodes
      var children = elements.childNodes;
      //loop over the child Nodes
      for (var i = 0; i < children.length; i++) {
        //set alias for each child
        var child = children[i];
        //recursively run hasClass on each child
        hasClass(child);
      }
    }
  };
  //call the helper function
  hasClass(elements);
  //return the result arr
  return result;
};


//use document.body element.childnodes and element.classlist