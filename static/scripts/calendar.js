google.load("gdata", "1");
google.setOnLoadCallback(loadFeed);

var feedURL = "http://www.google.com/calendar/feeds/calendar%40ourladymotherchurch.com/public/full";

var calendarDiv = null;
var service = null;

function loadFeed() {
	service = new google.gdata.calendar.CalendarService('OLMC');
	
	var query = new google.gdata.calendar.CalendarEventQuery(feedURL);
	query.setFutureEvents(true);
	query.setOrderBy('starttime');
	query.setSortOrder('ascending');
	query.setMaxResults(5);
	
	service.getEventsFeed(query, loadedFeed, handleError);
}

function handleError (error) {
	console.log("Couldn't fetch events: " + error);
}

function loadedFeed (result) {
	var entries = result.feed.getEntries();
	
	if (!entries.length) {
		var calendarDiv = getCalendar();
		calendarDiv.innerHTML = "<p id=\"noEvents\">No upcoming events found</p>";
		return;
	}
	
	var lastMonth = -1;
	
	for (var n = 0; n < entries.length; n++) {
		var entry = entries[n];
		
		var title = entry.getTitle().getText();
		var desc = entry.getContent().getText();
		
		var times = entry.getTimes();
		var firstTime = null;
		
		if (times.length > 0) {
			firstTime = times[0].getStartTime();
		}
		
		var date = firstTime.getDate();
		
		var day = date.getDate();
		var month = date.getMonth();
		
		if (month != lastMonth) {
			insertHeader(nameForMonth(month));
			lastMonth = month;
		}
		
		var time = null;
		
		if (!firstTime.isDateOnly()) {
			time = formatShortTime(date);
		}
		
		addEvent(title, day, desc, time);
	}
}

function insertHeader (month) {
	var header = document.createElement("div");
	header.className = "header";
	header.innerHTML = '<p>' + month + '</p>';
	
	getCalendar().appendChild(header);
}

function addEvent (title, day, desc, time) {
	var event = document.createElement("div");
	event.className = "event";
	
	var month = document.createElement("div");
	month.className = "month";
	month.innerHTML = '<p>' + day + '</p>';
	
	var info = document.createElement("div");
	info.className = "info";
	
	var clearFix = document.createElement("div");
	clearFix.className = "clearFix";
	
	var titleP = document.createElement("p");
	titleP.className = "title";
	titleP.innerHTML = title;
	
	var subtitle = null;
	
	if (desc) {
		subtitle = desc;
		
		if (time) {
			subtitle += (" - " + time);
		}
	}
	else if (time) {
		subtitle = time;
	}
	
	var subtitleP = document.createElement("p");
	subtitleP.className = "subtitle";
	subtitleP.innerHTML = subtitle ? subtitle : "";
	
	info.appendChild(titleP);
	info.appendChild(subtitleP);
	
	event.appendChild(month);
	event.appendChild(info);
	event.appendChild(clearFix);
	
	getCalendar().appendChild(event);
}

/* Utility */

function getCalendar() {
	if (!calendarDiv) {
		calendarDiv = document.getElementById("calendar");
		
		var throbber = document.getElementById("throbber");
		calendarDiv.removeChild(throbber);
	}
	
	return calendarDiv;
}

function nameForMonth (month) {
	if (month == 0) {
		return "January";
	}
	else if (month == 1) {
		return "February";
	}
	else if (month == 2) {
		return "March";
	}
	else if (month == 3) {
		return "April";
	}
	else if (month == 4) {
		return "May";
	}
	else if (month == 5) {
		return "June";
	}
	else if (month == 6) {
		return "July";
	}
	else if (month == 7) {
		return "August";
	}
	else if (month == 8) {
		return "September";
	}
	else if (month == 9) {
		return "October";
	}
	else if (month == 10) {
		return "November";
	}
	
	return "December";
}

function formatShortTime (date) {
	var rawHours = date.getHours();
	var rawMinutes = date.getMinutes();
	
	var hours = rawHours > 12 ? rawHours - 12 : rawHours;
	var minutes = padNumber(rawMinutes);
	var suffix = rawHours > 11 ? "PM" : "AM";
	
	return hours + ":" + minutes + " " + suffix;
}

function padNumber (num) {
	if (num <= 9)
		return "0" + num;
	
	return num;
}
