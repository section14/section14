(function(document) {
  'use strict';

  var finalHTML = document.body.innerHTML;

  var script = document.createElement('script');
  script.async = true;
  script.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
  script.onload = finishLazyLoading;
  document.head.appendChild(script);

  function finishLazyLoading() {
  // (Optional) Use native Shadow DOM if it's available in the browser.
  window.Polymer = window.Polymer || {dom: 'shadow'};

  // 6. Fade splash screen, then remove.
  var onImportLoaded = function() {
    var loadEl = document.getElementById('splash');
    loadEl.addEventListener('transitionend', loadEl.remove);

    document.body.classList.remove('loading');

    // App is visible and ready to load some data!
    
  };

  var link = document.querySelector('#bundle');

  // 5. Go if the async Import loaded quickly. Otherwise wait for it.
  // crbug.com/504944 - readyState never goes to complete until Chrome 46.
  // crbug.com/505279 - Resource Timing API is not available until Chrome 46.
  if (link.import && link.import.readyState === 'complete') {
    onImportLoaded();
  } else {
    link.addEventListener('load', onImportLoaded);
  }
  }

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  var app = document.querySelector("#app");

  app.displayInstalledToast = function() {
    document.querySelector("#caching-complete").show();
  };

  app.addEventListener("dom-change", function() {
    console.log("Our app is ready to rock!");
  });

  window.addEventListener("WebComponentsReady", function() {
    // imports are loaded and elements have been registered
    console.log("Web Components loaded");
  });

})(document);
