if (!SAP) var SAP = {};

SAP.DATA = {
	init: function() {
		console.log("Initializing SAP Data...");
		if (localStorage.getItem("data") === null) {
			console.error("Could not load SAP user data!");
			return;
		}

		var data = JSON.parse(localStorage.getItem("data"));
		SAP.DATA.mergeData(data);
	},

	mergeData: function(extra) {
		for (driver of data.driver) {
			if (!driver.extra)
				driver.extra = {};

			if (!extra[driver.car])
				continue;

			driver.extra = extra[driver.car];
		}
	},

	getExtras: function(driver, year, month) {
		if(!driver.extra || !driver.extra[year] || !driver.extra[year][month])
			return {};

		return driver.extra[year][month];
	}
}

SAP.DATA.init();
