// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if object is null
  if(obj === null){
      return "null";
  }
  //if object is undefined
  if(obj === undefined){
      return undefined
  }
  //if object is true
  //if object is false
  if(typeof obj === "boolean"){
      return '' + obj;
  }

  //if object is string
  if(typeof obj === "string"){
      return '"' + obj + '"';
  }
  //if object is number
 if(typeof obj === "number"){
    return '' + obj;
 }
  //if object is function
  if(typeof obj === "function"){
      return undefined;
  }
};

