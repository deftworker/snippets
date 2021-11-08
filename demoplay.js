
//  Remove the "//" and update the script.src to match your file, before using the line below. For Windows use /localhost/ for mac use /localhost:8888/
//javascript:(function(){var script=document.createElement('script');script.src='http://localhost/play.js';document.getElementsByTagName('head')[0].appendChild(script);})();


javascript:alert("At Your Service, Boss!");

//the process resembles gold mining - pick some dirt (content) and sift through it for stuff you need
//take a bucket of content - a container that hosts all of our desired content as its child items
var investors = document.getElementsByClassName("item-investor");

//console.log(investors[17].innerHTML);  //use this line to test the content of one item - see if you have any dirt in your shovel 

//pull the gold and start printing a table that fits your needs and can be copy-pasted into excel when the script is ready
var InvestorTable = "<table>";

for (var q=0;q<investors.length;q++){  //the loop goes through all data units (users, investors whatever) - the children of our bucket of code. 

	var inv_info = investors[q].getElementsByTagName("div");  //it breaks a piece from each unit and pulls its children as well
	InvestorTable += "<tr>";
	for (var i=0;i<inv_info.length;i++){
		var invtext = inv_info[i].innerHTML;

		if (invtext.match(/name/g)) { //we are checking where in the code we see a name marker, and pull the contents of that into our table
			InvestorTable += "<td>"+inv_info[i].getElementsByTagName("a")[0].innerHTML+"</td>";
		}
		else if (invtext.match(/@/g) || invtext.match(/found/g)|| invtext.match(/Found/g) || invtext.match(/Inves/g)|| invtext.match(/Manag/g) || invtext.match(/CEO/g) || invtext.match(/Partn/g) || invtext.match(/inves/g) || invtext.match(/Head/g)|| invtext.match(/Own/g)) {
			InvestorTable += "<td>"+invtext+"</td>";
		} //if there is no name, in that small bucket, check for other useful things.

		if (invtext.match(/<div class="tags">/g)) { //realizing that city and job title were separated into a "tags" div, we start pulling its contents
		var locstart = invtext.indexOf('<div class="tags">'); //because the data comes back as a string, we manipulate it as a string - set beginning and ending points we want content from.
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
InvestorTable += "</table>";//close the table
//console.log(InvestorTable); //test to see if our table is complete before printing it.

var firstdiv = document.getElementsByTagName("div")[1]; //pick a place where we will shuv our table
firstdiv.innerHTML=InvestorTable; // proudly put our version of the content at the top of the page so we can copy-paste into excel.
