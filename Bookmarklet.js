//Bookmark this line after changing the SRC below to point to this JS file.
javascript:(function(){var%20script=document.createElement('script');script.src='Bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);})()

//Put whatever code you want to test in this file and point to it from the bookmarklet.

   // helper for doing debug statements
    var debug = function(){
        try {
            window.console.debug.apply(console, arguments);
        } catch(e) {}
    };

//click on the bookmarklet link to trigger the code and feel free to play.