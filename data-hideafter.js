window.onload = function () {
	let elementsToHide = document.querySelectorAll('[data-hideafter]'),  //  Gets elements that need to be hidden based on the "data-hideafter" attribute.
    	currentDate = new Date().getTime();  //  Gets current date and time.

	var visibleElementCount = 0;  //  How many elements are visible?

	//  Loop though the list of elements to hide.
	for (let i = 0; i < elementsToHide.length; i++) {  //  For each element that contains a "date-hideafer" attribute, do something.
		let element = elementsToHide[i],  //  Assign variable name to current element.
			hideafter = new Date(element.getAttribute("data-hideafter")).getTime();  //  Get element's "data-hideafter" data.

		//  If "currentDate" is less than or equal to "hideAfter", remove the "hidden" CSS class.
		//  This method was chosen because it seemed less abrupt than having the elements removed.
		if (currentDate <= hideafter) {
			element.classList.remove("hidden");  //  Remove "hidden" CSS class.
			visibleElementCount++;  //  Increase "visibleElementCount" by 1. 
		}
	}


	//  After finishing up, turn off the loader.
	if (document.getElementById("hiddenElementsLoader")) {  //  If "hiddenElementsLoader" exists, do something.
		var loader = document.getElementById("hiddenElementsLoader").classList;  //  Assign variable name.
		loader.remove("open");  //  Remove "open" CSS class.
		loader.add("closed");  //  Add "closed" CSS class.
	}
	
	
	//  Should something be visible when no other elements are visible?
	if (visibleElementCount == 0) {  //  If "visibleElementCount" == 0, do something.
		if (document.getElementsByClassName('noElementsVisibleStatement')) {  //  If there are "noElementsVisibleStatement"s that exist, do something.
			var noElementsVisibleStatement = document.getElementsByClassName('noElementsVisibleStatement');  //  Assign variable name.
			
			for (let j = 0; j < noElementsVisibleStatement.length; j++) {  //  For each "noElementsVisibleStatement," do something.
				let statement = noElementsVisibleStatement[j].classList;  //  Assign variable name.
				statement.remove('hidden');  //  Remove "hidden" CSS class.
			}
		}
	} else {  //  If "visibleElementCount" != 0, do something.
		if (document.getElementsByClassName('elementsVisibleStatement')) {  //  If there are "elementsVisibleStatement"s that exist, do something.
			var elementsVisibleStatement = document.getElementsByClassName('elementsVisibleStatement');  //  Assign variable name.
			
			for (let k = 0; k < elementsVisibleStatement.length; k++) {  //  For each "elementsVisibleStatement," do something.
				let statement = elementsVisibleStatement[k].classList;  //  Assign variable name.
				statement.remove('hidden');  //  Remove "hidden" CSS class.
			}
		}
	}
}
