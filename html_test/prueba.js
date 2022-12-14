
var newRequest = new XMLHttpRequest();
var newFile = new VFile("/CSS_W_25_0.txt");

newRequest.open("GET", "https://ctaauditores.com/VELNEO/CSS_W_25_0.json", true);
newRequest.responseType= "json";
newRequest.setRequestHeader('Content-Type', 'application/json');
//newRequest.send('filename=CSS_W_25_0.json');
newRequest.send();

while(newRequest.readyState != 4){
	
	newRequest.processEvents();
}

var result;


if ( (newRequest.errorCode==0) && (newRequest.status == 200) ) {
	alert(newRequest.responseText);
/*	JSON.stringify(newRequest.response);
    alert(result);
*/
}else{
	alert("ERROR de request: " + newRequest.status);
	
}