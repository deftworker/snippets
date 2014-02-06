//javascript:(function(){var script=document.createElement('script');script.src='file:///Users/Desktop/play.js';document.getElementsByTagName('head')[0].appendChild(script);})
//javascript:(function(){var script=document.createElement('script');script.src='http://localhost/play.js';document.getElementsByTagName('head')[0].appendChild(script);})

javascript:alert("At Your Service, Master!");

//console.log(investors[17].innerHTML);
var investors = document.getElementsByClassName("item-investor");
var InvestorTable = "<table>";

for (var q=0;q<investors.length;q++){

	var inv_info = investors[q].getElementsByTagName("div");
	InvestorTable += "<tr>";
	for (var i=0;i<inv_info.length;i++){
		var invtext = inv_info[i].innerHTML;

		if (invtext.match(/name/g)) {
			InvestorTable += "<td>"+inv_info[i].getElementsByTagName("a")[0].innerHTML+"</td>";
		}
		else if (invtext.match(/@/g) || invtext.match(/found/g)|| invtext.match(/Found/g) || invtext.match(/Inves/g)|| invtext.match(/Manag/g) || invtext.match(/CEO/g) || invtext.match(/Partn/g) || invtext.match(/inves/g) || invtext.match(/Head/g)|| invtext.match(/Own/g)) {
			InvestorTable += "<td>"+invtext+"</td>";
		}

		if (invtext.match(/<div class="tags">/g)) {
		var locstart = invtext.indexOf('<div class="tags">');
			var followstart = invtext.indexOf('" . "');
			var lastchar = invtext.length;
			var loc =invtext.slice(locstart+11,followstart-1);
			var locations = loc.slice(loc.indexOf('">')+2,loc.lastIndexOf("</"));
			var fol = invtext.slice(followstart,lastchar);

			InvestorTable += "<td>"+locations+"</td>";
			}
	}
	
	InvestorTable += "</tr>";
}
InvestorTable += "</table>";
//console.log(InvestorTable);

var firstdiv = document.getElementsByTagName("div")[1];
firstdiv.innerHTML=InvestorTable;
