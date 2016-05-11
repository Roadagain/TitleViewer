window.addEventListener('load', function(){
  'use strict';

  // Get elements
  var title = document.getElementById('page_title');
  var copy = document.getElementById('copy');

  // Get tab info
  chrome.tabs.query({ active: true }, function(tabs){
    'use strict';

    // Show title
    title.innerHTML = tabs[0].title;

    // Add click listener to copy button
    copy.addEventListener('click', function(){
      'use strict';

      // Copy title to clipboard
      var textArea = document.createElement('textarea');
      document.body.appendChild(textArea);
      textArea.value = tabs[0].title;
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  });
});
