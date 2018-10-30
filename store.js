

let textfield = document.getElementById('text');

window.onload = function(){
	chrome.storage.sync.get('usertext', function(data) {
  		textfield.innerHTML = data.usertext;
	});
	
}

textfield.onkeyup = function(element) {
    let text = textfield.innerHTML;
    chrome.storage.sync.set({usertext: text}, function() {});
};