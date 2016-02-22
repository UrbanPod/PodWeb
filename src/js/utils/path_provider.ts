declare var require : any;

var path = require("path");
var callsite = require('callsite');
var stack = callsite();
var requester : any;

export var getPath = function() {
  requester = stack[1].getFileName();
  return path.dirname(requester);
}
