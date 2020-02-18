chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		
	}
	}, 10);
});


function getSelectionText() {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
	}
		return text
	}
	
	document.addEventListener("keydown", e => {
		let input = getSelectionText()
		
		if ( input != '') {
			
			if(e.keyCode === 89){
				window.open(`https://www.youtube.com/results?search_query=${input}`)
			}
			if(e.keyCode === 76){
				getSelectionText()
				window.open(`https://www.linkedin.com/search/results/all/?keywords=${input}&origin=GLOBAL_SEARCH_HEADER`)
			}
			if(e.keyCode === 71){
				getSelectionText()
				window.open(`https://www.google.com/search?sxsrf=ACYBGNQMeKfVzC4L9wPQPyf6XOn0uuFZcg%3A1582056959221&ei=_0VMXpiNDYGk_Qbr0aSwBg&q=${input}&oq=${input}&gs_l=psy-ab.3..0i67l2j0i131j0l7.19215.19712..22596...1.0..1.723.1636.0j4j0j1j6-1......0....1..gws-wiz.......35i39i285j35i39j0i273j0i131i67.uCKixxQ1MM0&ved=0ahUKEwjYiMa49dvnAhUBUt8KHesoCWYQ4dUDCAs&uact=5`)
			}
		}

	})

