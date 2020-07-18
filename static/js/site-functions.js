/*---------------------------------------------------------------------------*/

/* Show and hide menu from mobile bar */

function toggleMenu() {
  var menu = document.getElementById("menu");
  var toc = document.querySelector(".sticky");
  var layout = document.getElementById("layout");
  if (window.getComputedStyle(toc).display !== "none") {
	hideTOC(toc, layout)
	showMenuMobile(menu, layout)
  } else if (window.getComputedStyle(menu).display === "none") {
	showMenuMobile(menu, layout)
  } else {
	hideMenu(menu, layout)
  }
  updateBar("menu")
}

function showMenuMobile(menu, layout) {
	menu.style.display = "block";
	menu.style.left = "140px";
}

function hideMenu(menu, layout) {
	menu.style.display = "none";
	menu.style.left = "0px";
	layout.style.paddingLeft = "0px";
	layout.style.left = "0px";
}

/* Show and hide TOC from mobile bar */

function toggleTOC() {
  var menu = document.getElementById("menu");
  var toc = document.querySelector(".sticky");
  var layout = document.getElementById("layout");
  if (window.getComputedStyle(menu).display !== "none") {
	hideMenu(menu, layout)
	showTOCMobile(toc, layout)
  } else if (window.getComputedStyle(toc).display === "none") {
	showTOCMobile(toc, layout)
  } else {
	hideTOC(toc, layout)
  }
  updateBar("toc")
}

function showTOCMobile(toc, layout) {
	toc.style.display = "inline-block";
}

function hideTOC(toc, layout) {
	toc.style.display = "none";
	layout.style.marginRight = "0rem";
}

function updateBar(activeLink) {
	var menuDiv = document.querySelector("#menu-div");
	var tocDiv = document.querySelector("#toc-div");
	var menuButton = document.querySelector("#menu-div a");
	var tocButton = document.querySelector("#toc-div a");
	if (activeLink === "menu") {
		if (menuButton.innerText === "Hide") {
			menuButton.innerText = "Menu";
			menuButton.style.color = "#999";
			menuDiv.style.backgroundColor = "#191818";
		} else if (tocButton.innerText === "Hide") {
			tocButton.innerText = "TOC";
			tocButton.style.color = "#999";
			tocDiv.style.backgroundColor = "#191818";
			menuButton.innerText = "Hide";
			menuButton.style.color = "#40e0d0";
			menuDiv.style.backgroundColor = "#333";
		} else {
			menuButton.innerText = "Hide";
			menuButton.style.color = "#40e0d0";
			menuDiv.style.backgroundColor = "#333";
		}
	} else { // activeLink === "toc"
		if (tocButton.innerText === "Hide") {
			tocButton.innerText = "TOC";
			tocButton.style.color = "#999";
			tocDiv.style.backgroundColor = "#191818";
		} else if (menuButton.innerText === "Hide") {
			menuButton.innerText = "Menu";
			menuButton.style.color = "#999";
			menuDiv.style.backgroundColor = "#191818";
			tocButton.innerText = "Hide";
			tocButton.style.color = "#40e0d0";
			tocDiv.style.backgroundColor = "#333";
		} else {
			tocButton.innerText = "Hide";
			tocButton.style.color = "#40e0d0";
			tocDiv.style.backgroundColor = "#333";
		}
	}
}

// The toggle buttons make use of inline styles. We want the CSS
// in our CSS media queries to take priority once the window
// is larger than when the mobile bar shows, but we can't
// just use !important since then the toggles wouldn't work.
// So we cleanup the inline styles once going larger again.
function cleanupMobileInlineStyles(trigger) {
  // Once we grow larger than the width at which the
  // mobile bar is displayed = media query matches
  if (trigger.matches) {
    document.getElementById("menu").removeAttribute("style");
	document.querySelector(".sticky").removeAttribute("style");
	document.getElementById("layout").removeAttribute("style");
	document.querySelector("#menu-div").removeAttribute("style");
	document.querySelector("#toc-div").removeAttribute("style");
	
	var menuButton = document.querySelector("#menu-div a");
	var tocButton = document.querySelector("#toc-div a");
	menuButton.innerText = "Menu";
	menuButton.removeAttribute("style");
	tocButton.innerText = "TOC";
	tocButton.removeAttribute("style");
  }
}

var trigger = window.matchMedia("(min-width: 48em)")
// Call listener function at run time
cleanupMobileInlineStyles(trigger)
// Attach listener function on state changes
trigger.addListener(cleanupMobileInlineStyles)

/*---------------------------------------------------------------------------*/

// Now do a similar thing for the menu-triggered TOC, including the cleanup

function toggleTOCFromMenu() {
  var toc = document.querySelector(".sticky");
  var layout = document.getElementById("layout");
  if (window.getComputedStyle(toc).display === "none") {
	showTOCMobile(toc, layout)
  } else {
	hideTOC(toc, layout)
  }
  updateTOCMenuState()
}

function showTOCMenu(toc, layout) {
	toc.style.display = "inline-block";
}

function updateTOCMenuState() {
	var tocToggle = document.getElementById("menu-toc-toggle");
	var tocToggleLink = document.querySelector("#menu-toc-toggle a");
	
	/*
	console.log(tocToggleLink.innerHTML)
	console.log('<i class="fa fa-list fa-fw"></i>Show TOC')
	console.log(tocToggleLink.innerHTML === "<i class='fa fa-list fa-fw'></i>Show TOC")
	console.log(tocToggleLink.innerHTML === '<i class="fa fa-list fa-fw"></i>Show TOC')
	*/
	
	// Need to include the FA icons in the inner HTML checks. 
	// There is some weirdness with the string matching. See above.
	if (tocToggleLink.innerHTML === '<i class="fa fa-list fa-fw"></i>Show TOC') {
	  tocToggleLink.innerHTML = '<i class="fa fa-list fa-fw"></i>Hide TOC';
	  tocToggleLink.style.color = "#40e0d0";
	  tocToggle.style.backgroundColor = "#333";
	} else { // tocToggleLink.innerHTML === "<i class='fa fa-list fa-fw'></i>Hide TOC"
	  tocToggleLink.innerHTML = '<i class="fa fa-list fa-fw"></i>Show TOC';
	  tocToggleLink.style.color = "#999";
	  tocToggle.style.backgroundColor = "#191818";
	}
}

function cleanupMenuInlineStyles(trigger) {
  // Once we grow larger or smaller than the width at which the
  // TOC toggle is displayed in menu = media query matches
  if (trigger.matches) {
	document.querySelector(".sticky").removeAttribute("style");
	document.getElementById("layout").removeAttribute("style");
	document.getElementById("menu-toc-toggle").removeAttribute("style");
	
	var tocToggleLink = document.querySelector("#menu-toc-toggle a");
	tocToggleLink.innerHTML = '<i class="fa fa-list fa-fw"></i>Show TOC';
	tocToggleLink.removeAttribute("style");
  }
}

var trigger = window.matchMedia("(min-width: 85rem), (max-width: 48em)")
// Call listener function at run time
cleanupMenuInlineStyles(trigger)
// Attach listener function on state changes
trigger.addListener(cleanupMenuInlineStyles)


/*---------------------------------------------------------------------------*/

/* Create Table of Content (invoking scrollspy) */

$(function() {
  var navSelector = '#toc';
  $('body').scrollspy({
    target: navSelector,
    offset: 220
  });
});

/*---------------------------------------------------------------------------*/

$(window).on('load resize scroll', function () {
/* Auto-move the table of content scroll div while scrolling the main window */
  var scrollPos = $("div.sticky").offset().top / $(document.body).prop('scrollHeight'); // scrolling of the main window (between 0 and 1)
  switch(true) { // this is a discrete function to calculate the most appropriate scroll percentage of the ToC div
    case (scrollPos < 0.2): scrollPos=0; break;
    case (scrollPos < 0.3): scrollPos=scrollPos * 1.2; break;
    case (scrollPos > 0.3): scrollPos=scrollPos * 1.4; break;
    case (scrollPos > 0.6): scrollPos=scrollPos * 1.5; break;
    case (scrollPos > 0.75): scrollPos=1; break;
  }
  $("div.sticky").scrollTop(scrollPos * ($("div.sticky").prop('scrollHeight') - $("div.sticky").innerHeight()));
/* Dynamically set bottom position of div.sticky only when toc overflows to avoid conflicts between box-shadow and scrollbar */
if ($(window).height() < $('nav[data-toggle="toc"]').height() + $("div.sticky").position().top)
  $("div.sticky").css("bottom","0")
else
  $("div.sticky").css("bottom","unset");
})