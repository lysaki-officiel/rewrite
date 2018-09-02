
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault()
	});
var data = [{"name": { "first":"Hendricks", "last":"Bailey", }, "email":"mon@email.com"}];
$("#table2").DataTable({data: data, columns: [ 
		{ "data":"name.first", title: "FirstName" },
 		{ "data":"name.last", title: "LastName" },
 	    { "data":"email", title: "E-mail" } ]
 	});
var index=1;
function addTable() {
	data.push({'name':{ 
					"first": document.forms["formu"].elements["first"].value,
					"last": document.forms["formu"].elements["last"].value,
				},
			'email' : document.forms["formu"].elements["email3"].value
		})
	document.getElementById("table2").innerHTML=document.getElementById("table2").innerHTML +"<tr> <td>"+ data[index].name.first + "</td> <td>"
			+ data[index].name.last+"</td> <td>"+data[index].email + "</td> </tr>";
			index++;
 } 

var index2=1
var data1 = [{"username":"admin","mail":"admin@admin.com","psw":"adminlol123"}];
$("#table3").DataTable({data1: data1, columns: [ 
		{ "data1":"username", title: "username" },
 		{ "data1":"mail", title: "mail" },
 	    { "data1":"password", title: "psw" } ]
 	});
document.getElementById("signFinish").addEventListener("click", function(event){
    event.preventDefault()
	});
function addTable2() {
	data1.push({
				'username': document.forms["signup"].elements["username"].value,
				'mail': document.forms["signup"].elements["mail"].value,				
				'psw' : document.forms["signup"].elements["psw"].value
		})
	document.getElementById("table3").innerHTML=document.getElementById("table3").innerHTML +"<tr> <td>"+ data1[index2].username + "</td> <td>"
			+ data1[index2].mail+"</td> <td>"+data1[index2].psw + "</td> </tr>";
			index2++;
 } 
