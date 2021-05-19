var x;
var y;

function output(input){
    x = 0
    y = 0
    document.getElementById('out').innerHTML='bot: '
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
		text = text.replace(/ a /g, " ").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "").replace(/bot /g, "").replace(/ bot/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	document.getElementById("chatbot").innerHTML = product;
	document.getElementById("input").value = "";
}
function compare(arr, array, string){
	var item;
    var items;
	for(x=0; x<arr.length; x++){
		for(y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[0];
			}
		}
	}
    console.log(item)
	return item;
}