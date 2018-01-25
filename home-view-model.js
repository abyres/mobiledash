var observableModule = require("data/observable");
var source = require("./source.json");
var properties = require("./properties.json");
var http = require ("http");

function HomeViewModel() {
var viewModel = new observableModule.Observable();
  //http.getJSON("http://localhost:8000/app/source.json").then(function (r) {
  //Argument (r) is JSON!
  viewModel.set("categoricalSource", source.categoricalSource);
  viewModel.set("categoryProperty", properties.categoryProperty);
  viewModel.set("valueProperty", properties.valueProperty);

  return viewModel;
  /*}, function (e) {
  //Argument (e) is Error!
  var e = "Error!";
  console.log(e);
});*/
}
module.exports = HomeViewModel; 
