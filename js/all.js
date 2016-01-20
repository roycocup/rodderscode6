var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if( w > 768) { 
	// Loading Wow 
	new WOW().init();

	//Loading fullpage 
	var sections = ['home', 'bio', 'timeline', 'work', 'past', 'other', 'skillset'];
	$('#fullpage').fullpage({
			//Navigation
			// menu: '#mmenu',
			// lockAnchors: false,
			// anchors: sections,
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: sections,
			showActiveTooltip: true,
			slidesNavigation: false,
			slidesNavPosition: 'top',

			//Scrolling
			// css3: true,
			// scrollingSpeed: 700,
			// autoScrolling: true,
			// fitToSection: true,
			// fitToSectionDelay: 1000,
			// scrollBar: false,
			// easing: 'easeInOutCubic',
			// easingcss3: 'ease',
			// loopBottom: false,
			// loopTop: false,
			// loopHorizontal: true,
			// continuousVertical: false,
			// normalScrollElements: '#element1, .element2',
			// scrollOverflow: false,
			// touchSensitivity: 15,
			// normalScrollElementTouchThreshold: 5,

			//Accessibility
			keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,

			//Design
			controlArrows: true,
			verticalCentered: true,
			resize : false,

			//Custom selectors
			sectionSelector: 'section',
			slideSelector: '.slide',
			sectionsColor: ['black', '#4BBFC3', '#7BAABE', '#f2f2f2', '#000', '#0FB5B3', ''],

			//events
			onLeave: function(index, nextIndex, direction){},
			afterLoad: function(anchorLink, index){},
			afterRender: function(){},
			afterResize: function(){},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
		});
}

/* Charts */

var chartsAnimated = false;
var animateCharts = function(){
	//bar charts
	var ctx = $("#bars1").get(0).getContext("2d");
	var data = {
		labels : ["PHP","Java","JS","Python","C","Go"],
		datasets : [{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [99,75,60,50,40,10]
		}]
	}
	new Chart(ctx).Bar(data,options);

	//Frameworks
	var ctx = $("#bars2").get(0).getContext("2d");
	var data = {
		labels : ['Custom PHP', 'Laravel', 'Codeigniter', 'Yii', 'Wordpress', 'Mod-x', 'Drupal', 'Symphony', 'Zend', 'Joomla'],
		datasets : [{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [99,85,83,80,80,50,40,35,30,10]
		}]
	}
	new Chart(ctx).Bar(data,options);


	//Web servers
	var ctx = $("#myChart").get(0).getContext("2d");

	var data = [
	{value: 60,color:"rgb(86,153,63)", label : '60%',labelColor : 'white',labelFontSize : '10'},
	{value : 40,color : "rgb(47,89,162)", label : '40%',labelColor : 'white',labelFontSize : '10'},
	];
	var options = {animationEasing : "easeOutQuart"}
	new Chart(ctx).Pie(data, options);

	//databases
	var ctx = $("#myChart2").get(0).getContext("2d");
	var data = [
	{value: 44,color:"rgb(86,153,63)", label : '44%',labelColor : 'white',labelFontSize : '10'},
	{value : 56,color : "rgb(47,89,162)", label : '56%',labelColor : 'white',labelFontSize : '10'},
	];
	var options = {animationEasing : "easeOutQuart"}
	new Chart(ctx).Pie(data, options);

	//version control
	var ctx = $("#myChart3").get(0).getContext("2d");
	var data = [
	{value: 40,color:"rgb(86,153,63)", label : '40%',labelColor : 'white',labelFontSize : '10'},
	{value : 60,color : "rgb(47,89,162)", label : '60%',labelColor : 'white',labelFontSize : '10'},
	];
	var options = {animationEasing : "easeOutQuart"}
	new Chart(ctx).Pie(data, options); 
	chartsAnimated = true;
}		



var listen = function(id){
	var element = document.getElementById(id);
	var position = element.getBoundingClientRect();
	var divY = position.top;
	var triggerAt = divY - (position.height/2); //half way through the div
	setInterval(function(){
		var y = window.pageYOffset;
		if ( y >= triggerAt ){
			if ( id == "charts" && !chartsAnimated )
				animateCharts();
		}
		
	}, 250);
}

var maze = function(e){
	for (var i=0;i<1800;i++) {
	  document.getElementById(e).innerHTML += (Math.random() > 0.5) ? '\u27CB' : '\u27CD';
	  // document.getElementById(e).innerHTML+= (Math.random() > 0.5) ? '\\' : '/';
	  //document.getElementById($e).innerHTML += "/";
	  // document.getElementById(e).innerHTML += (205.5+Math.random(1));
	}
}

$(document).ready(function($) {
	listen("charts");
	// maze("header");
});
	