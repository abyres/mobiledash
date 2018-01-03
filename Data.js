window.onload = function() {

var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Sales Report"
	},
	axisY:{
        title: "Sales",
		includeZero: false,
        valueFormatString:"$#######"
	},
    axisX:{
        title: "Date",
		includeZero: false
	},
	data: [{
		type: "line",
		dataPoints: dataPoints
	}]
});

function addData(data) {
	
	}
	chart.render();

}

$.getJSON("http://localhost:8000/mobiledash/Test.json", function(addData)
{
	
})