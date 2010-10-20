Y.use('node', function(Y) {

var selectors = {
    //<a href="/loggedin/show.do?id=2106">Melissa &amp; Joey</a>
    //or, plain text if it has no show page
    TV_SHOW_LINK: 'a[href*=/loggedin/show.do?]',
    TV_SHOW_NO_LINK: 'div.middle div.boxbody table td font'
};

var button = '<a target="_blank" href="http://www.imdb.com/find?s=all&q=tv+{showname}" class="imdbize">imdb</a>';

var init = function() {
    var addLink = function(node, index) {
        node.insert(Y.Lang.sub(button, { showname:escape(node.get('innerText')) }),'after');
    };
    
    Y.all(selectors.TV_SHOW_LINK).each(addLink);
    Y.all(selectors.TV_SHOW_NO_LINK).each(addLink);
};

init();
    
});
