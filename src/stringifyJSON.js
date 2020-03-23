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
 //if obj is an object
  if(typeof obj === "object" && Object.keys(obj).length === 0){
    return  '{}';
 }

  if(!Array.isArray(obj) && typeof obj === "object"){
    //loop over keys
    //create result object
    var resultArr = [];
    for (var keys in obj){
      var values = obj[keys]
      var strVal = stringifyJSON(values)
      var strKey = stringifyJSON(keys);
      if(typeof values === "function"){
        return "{}";
      }
      resultArr.push(strKey + ':', strVal, ',');
    }
    resultArr.pop();
    var resultStr = resultArr.join('')
    return "{" + resultStr + "}";
  }
};

