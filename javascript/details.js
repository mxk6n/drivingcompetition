function GetURLParams(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

// trigger for list

$(document)
		.ready(
				function() {
					var json = (function() {
						var json = null;
						$.ajax({
							'async' : false,
							'global' : false,
							'url' : "data/details_example_data.json",
							'dataType' : "json",
							'success' : function(data) {
								json = data;
							}
						});
						return json;
					})();
					$('#list a')
							.click(
									function() {
										$("#list a").each(function (){
											$(this).removeClass("active");
										});
										$(this).addClass("active");
										var ele = $(this).children().attr("id");
										$("#trips")
												.html(
														"<p>Trips : "
																+ json.details.detail[ele].trips
																+ "</p>");
										$("#fuel_consumed")
												.html(
														"<p>Fuel consumed : "
																+ json.details.detail[ele].fuel_consumed
																+ "</p>");
										$("#fuel_saved")
												.html(
														"<p>Fuel Saving : "
																+ json.details.detail[ele].fuel_savings
																+ "</p>");
									});

				});
