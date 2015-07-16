window.addEventListener("WebComponentsReady", function() {

    page.base("");

    page('/', function () {
        app.route = "home";
        app.pageContent = "/general/home.html";
    });

    /*
    page('/users/:name', function (data) {
      app.route = 'user-info';
      app.params = data.params;
    });
    */

    page('/about', function () {
        app.route = "about";
        app.pageContent = "/general/about.html";
    });

    page('/contact', function () {
        app.route = "contact";
        app.pageContent = "/general/contact.html";
    });

    // add #! before urls
    page({
        hashbang: true
    });

});
