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
    return undefined;
  }
  //if obj is boolean
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
  //check if the obj is an array
  //if so we need to push it into an array
  var resultArr = [];
  if(Array.isArray(obj)){
    //if the array is empty
    if(!obj.length){
      return '[]';
    }
    //check the values
    for (var i = 0; i < obj.length; i++){
      //if those are also array
      resultArr.push(stringifyJSON(obj[i]));
      //we will recurse it
    }
    return  '[' + resultArr + ']';
  }
  //if obj is an object and length is 0
  if(typeof obj === "object" && Object.keys(obj).length === 0){
    return  '{}';
  }
  if(!Array.isArray(obj) && typeof obj === "object"){
    //loop over keys
    //create result object
    var resultArr = [];
    for (var keys in obj){
      //stringify the values
      var strVal = stringifyJSON(obj[keys]);
      //stringify the keys
      var strKey = stringifyJSON(keys);
      //chck if value is a function
      if(typeof obj[keys] === "function") {return "{}";}
      //if not, push key value pairs, colon, and comma into resultArr
      resultArr.push(strKey + ':', strVal, ',');
    }
    //get rid of the last comma
    resultArr.pop();
    //turn into string before wrapping in curly braces
    var resultStr = resultArr.join('');
    return "{" + resultStr + "}";
  }
};

