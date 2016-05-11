window.addEventListener('load', function(){
  'use strict';

  var elem = document.getElementById('page_title');
  var button = document.getElementById('copy');
  chrome.tabs.query({ active: true }, function(result){
    'use strict';

    elem.innerHTML = result[0].title;
    button.addEventListener('click', function(){
      'use strict';

      var textArea = document.createElement('textarea');
      document.body.appendChild(textArea);
      textArea.value = result[0].title;
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  });
});
