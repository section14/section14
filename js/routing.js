window.addEventListener("WebComponentsReady", function() {

    page.base("");

    page('/', function () {
        app.route = "home";
        app.pageContent = "/general/home.html";
    });

    /*
    page('/project/:id', function (ctx) {
        app.route = "project";
        app.pageContent = "/general/project.html";
        app.projectId = ctx.params.id;
    });
    */

    page('/project/arduino', function () {
        app.route = "project";
        app.pageContent = "/projects/arduino.html";
    });

    page('/project/audio', function () {
        app.route = "project";
        app.pageContent = "/projects/audio.html";
    });

    page('/project/big_fat_d', function () {
        app.route = "project";
        app.pageContent = "/projects/big_fat_d.html";
    });

    page('/project/logos', function () {
        app.route = "project";
        app.pageContent = "/projects/logos.html";
    });

    page('/project/openframeworks', function () {
        app.route = "project";
        app.pageContent = "/projects/openframeworks.html";
    });

    page('/project/spectre', function () {
        app.route = "project";
        app.pageContent = "/projects/spectre.html";
    });

    page('/project/spectre_dev', function () {
        app.route = "project";
        app.pageContent = "/projects/spectre_dev.html";
    });

    page('/project/ssr', function () {
        app.route = "project";
        app.pageContent = "/projects/ssr.html";
    });

    page('/project/tshirts', function () {
        app.route = "project";
        app.pageContent = "/projects/tshirts.html";
    });

    page('/project/vector', function () {
        app.route = "project";
        app.pageContent = "/projects/vector.html";
    });

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
