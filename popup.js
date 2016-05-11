window.addEventListener('load', function(){
  var elem = document.getElementById('page_title');
  chrome.tabs.query({ active: true }, function(result){
    elem.innerHTML = result[0].title;
  });
});
