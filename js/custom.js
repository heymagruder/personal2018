(function() {
    var el = document.getElementById("shuffle");
    var text = new ShuffleText(el);
    
    text.start();

    window.setTimeout(
        text.stop,
        5000
    )
})();