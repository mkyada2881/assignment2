function getelement(idname) {
	return document.getElementById(idname);
}
function scrollToele(){
	var element = getelement("youridhere")
	alignWithTop = true;
	element.scrollIntoView(alignWithTop);
}

function showData(element){
	
	getelement('tra-date').innerHTML = element.getAttribute('data-date');
	getelement('tra-type').innerHTML = element.getAttribute('data-trans');
	getelement('tra-location').innerHTML = element.getAttribute('data-location');
	getelement('tra-amount').innerHTML = element.getAttribute('data-amount');
	getelement('tra-total').innerHTML = element.getAttribute('data-total');
	getelement('tra-acc').innerHTML = element.getAttribute('data-acc');
	getelement('tra-desc').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
}

function filterByType(elementId,val){
	var filterElement = getelement(elementId);
	var jsonObj;
	var xml = new XMLHttpRequest();
	// var element;
	xml.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        transac = JSON.parse(this.responseText);
	
	        jsonObj = transac.transaction;
	        var selectedValue = filterElement.options[filterElement.selectedIndex].value;
			var appendData = getelement('transactData');
			
			var tableElement = '';
			for(i in jsonObj){
				if(selectedValue==""){
					tableElement += "<tr>";
			    	tableElement += '<td><a data-date="'+jsonObj[i].date+'" data-trans="'+jsonObj[i].type+'" data-location="'+jsonObj[i].location+'" data-amount="'+jsonObj[i].amount+'" data-total="'+jsonObj[i].outstanding+'" data-acc="'+jsonObj[i].toacc+'" href="javascript:void(0)" onclick="showData(this)" data-toggle="modal" data-target="#myModal">'+jsonObj[i].id+'</a></td>';
			    	tableElement += "<td>"+jsonObj[i].date+"</td>";
			    	tableElement += "<td>"+jsonObj[i].type+"</td>";
			    	tableElement += "<td>"+jsonObj[i].location+"</td>";
			    	tableElement += "<td>"+jsonObj[i].amount+"</td>";
			    	tableElement += "<td>"+jsonObj[i].outstanding+"</td>";
			    	tableElement += "<td>"+jsonObj[i].toacc+"</td>";
			    	tableElement += "</tr>";	
				}
				else if(selectedValue.toLowerCase() ==jsonObj[i].type.toLowerCase()){
					tableElement += "<tr>";
			    	tableElement += '<td><a data-date="'+jsonObj[i].date+'" data-trans="'+jsonObj[i].type+'" data-location="'+jsonObj[i].location+'" data-amount="'+jsonObj[i].amount+'" data-total="'+jsonObj[i].outstanding+'" data-acc="'+jsonObj[i].toacc+'" href="javascript:void(0)" onclick="showData(this)" data-toggle="modal" data-target="#myModal">'+jsonObj[i].id+'</a></td>';
			    	tableElement += "<td>"+jsonObj[i].date+"</td>";
			    	tableElement += "<td>"+jsonObj[i].type+"</td>";
			    	tableElement += "<td>"+jsonObj[i].location+"</td>";
			    	tableElement += "<td>"+jsonObj[i].amount+"</td>";
			    	tableElement += "<td>"+jsonObj[i].outstanding+"</td>";
			    	tableElement += "<td>"+jsonObj[i].toacc+"</td>";
			    	tableElement += "</tr>";	
				}
				
			}
			appendData.innerHTML = tableElement;
	    }
	};
	xml.open("GET", "../json/transaction.json", true);
	xml.send();
	
	
}
function filterByLocation(elementId,val){
	var filterElement = getelement(elementId);
	var jsonObj;
	var xml = new XMLHttpRequest();
	
	xml.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        transac = JSON.parse(this.responseText);
	        
	        console.log(transac);
	        jsonObj = transac.transaction;
	        var selectedValue = filterElement.options[filterElement.selectedIndex].value;
			var appendData = getelement('transactData');
			
			var tableElement = '';
			for(i in jsonObj){
				if(selectedValue==""){
					tableElement += "<tr>";
			    	tableElement += '<td><a data-date="'+jsonObj[i].date+'" data-trans="'+jsonObj[i].type+'" data-location="'+jsonObj[i].location+'" data-amount="'+jsonObj[i].amount+'" data-total="'+jsonObj[i].outstanding+'" data-acc="'+jsonObj[i].toacc+'" href="javascript:void(0)" onclick="showData(this)" data-toggle="modal" data-target="#myModal">'+jsonObj[i].id+'</a></td>';
			    	tableElement += "<td>"+jsonObj[i].date+"</td>";
			    	tableElement += "<td>"+jsonObj[i].type+"</td>";
			    	tableElement += "<td>"+jsonObj[i].location+"</td>";
			    	tableElement += "<td>"+jsonObj[i].amount+"</td>";
			    	tableElement += "<td>"+jsonObj[i].outstanding+"</td>";
			    	tableElement += "<td>"+jsonObj[i].toacc+"</td>";
			    	tableElement += "</tr>";	
				}
				else if(selectedValue.toLowerCase() ==jsonObj[i].location.toLowerCase()){
					tableElement += "<tr>";
			    	tableElement += '<td><a data-date="'+jsonObj[i].date+'" data-trans="'+jsonObj[i].type+'" data-location="'+jsonObj[i].location+'" data-amount="'+jsonObj[i].amount+'" data-total="'+jsonObj[i].outstanding+'" data-acc="'+jsonObj[i].toacc+'" href="javascript:void(0)" onclick="showData(this)" data-toggle="modal" data-target="#myModal">'+jsonObj[i].id+'</a></td>';
			    	tableElement += "<td>"+jsonObj[i].date+"</td>";
			    	tableElement += "<td>"+jsonObj[i].type+"</td>";
			    	tableElement += "<td>"+jsonObj[i].location+"</td>";
			    	tableElement += "<td>"+jsonObj[i].amount+"</td>";
			    	tableElement += "<td>"+jsonObj[i].outstanding+"</td>";
			    	tableElement += "<td>"+jsonObj[i].toacc+"</td>";
			    	tableElement += "</tr>";	
				}
				
			}
			appendData.innerHTML = tableElement;
	    }
	};
	xml.open("GET", "../json/transaction.json", true);
	xml.send();
	
	// console.log(selectedValue)
}

function loadJSON(){
	
	// return element;
}
/**
 * Loads a data.
 * this function is responsible for creating transaction table
 * 
 */
function loadData(){
	var xml = new XMLHttpRequest();
	
	xml.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        transac = JSON.parse(this.responseText);
	        var tableElement = "";
	        var appendData = getelement('transactData');
	        var element = transac.transaction;
	        for(i in element){
	        	tableElement += "<tr>";
	        	tableElement += '<td><a data-date="'+element[i].date+'" data-trans="'+element[i].type+'" data-location="'+element[i].location+'" data-amount="'+element[i].amount+'" data-total="'+element[i].outstanding+'" data-acc="'+element[i].toacc+'" href="javascript:void(0)" onclick="showData(this)" data-toggle="modal" data-target="#myModal">'+element[i].id+'</a></td>';
	        	tableElement += "<td>"+element[i].date+"</td>";
	        	tableElement += "<td>"+element[i].type+"</td>";
	        	tableElement += "<td>"+element[i].location+"</td>";
	        	tableElement += "<td>"+element[i].amount+"</td>";
	        	tableElement += "<td>"+element[i].outstanding+"</td>";
	        	tableElement += "<td>"+element[i].toacc+"</td>";
	        	tableElement += "</tr>";
	        }
	        appendData.innerHTML = tableElement;
	    }
	};
	xml.open("GET", "../json/transaction.json", true);
	xml.send();
}