window.addEventListener('load', function(){
  'use strict';

  // Get elements
  var elem = document.getElementById('page_title');
  var button = document.getElementById('copy');

  // Get tab info
  chrome.tabs.query({ active: true }, function(result){
    'use strict';

    // Show title
    elem.innerHTML = result[0].title;

    // Add click listener to copy button
    button.addEventListener('click', function(){
      'use strict';

      // Copy title to clipboard
      var textArea = document.createElement('textarea');
      document.body.appendChild(textArea);
      textArea.value = result[0].title;
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  });
});
