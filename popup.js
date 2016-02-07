window.onload = function() {
  var liststr = "";
  chrome.tabs.query({currentWindow: true}, function(tabs) {
  var number = tabs.length;
  for (var i = tabs.length - 1; i >= 0; i--) {
    liststr = liststr + tabs[i].title + "\n" + tabs[i].url + "\n\n";
  };
  
  var elements = document.getElementById( "lists" );
  elements.firstChild.nodeValue = liststr;
});
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("button").addEventListener("click", TextAreaSelect);
});


function TextAreaSelect(){
  var elements = document.getElementById( "lists" );
  elements.focus();
  elements.select();
}

