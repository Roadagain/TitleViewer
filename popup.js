function copyToClipboard(str){
  'use strict';

  // Copy str to clipboard
  var textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  textArea.value = str;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

window.addEventListener('load', function(){
  'use strict';

  // Get elements
  var title = document.getElementById('page_title');
  var url = document.getElementById('page_url');
  var copyTitle = document.getElementById('copy_title');
  var copyUrl = document.getElementById('copy_url');
  var copyAll = document.getElementById('copy_all');

  // Get tab info
  chrome.tabs.query({ active: true }, function(tabs){
    'use strict';

    // Show title and url
    title.innerHTML = tabs[0].title;
    url.innerHTML = tabs[0].url;

    // Add click listener to copy button
    copyTitle.addEventListener('click', function(){
      'use strict';

      // Copy title to clipboard
      copyToClipboard(tabs[0].title);
    });
    copyUrl.addEventListener('click', function(){
      'use strict';

      // Copy title to clipboard
      copyToClipboard(tabs[0].url);
    });
    copyAll.addEventListener('click', function(){
      'use strict';

      copyToClipboard(tabs[0].title + ' ' + tabs[0].url);
    });
  });
});
