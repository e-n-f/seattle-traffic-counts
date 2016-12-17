var locs = require("./CoordinatedRegional_2010TwoHr-Counts_FINAL.json");
var features = locs.features;

for (var i = 0; i < features.length; i++) {
	var p = features[i].properties;

	var when = "xxx";
	if (p.Time === "AM") {
		when = "07:00-09:00";
	} else if (p.Time === "PM") {
		when = "16:00-18:00";
	}

	var out =
		p.CID + "," +
		p.Countlocat + "," +
		p.City + " " + p.ZIPCODE + "," +
		p.Date + "," +
		when + "," +
		",,,,,,,,,,,," +
		p.PedNorth + "," +
		p.PedEast + "," +
		p.PedSouth + "," +
		p.PedWest + "," +
		p.BikeNorth + "," +
		p.BikeEast + "," +
		p.BikeSouth + "," +
		p.BikeWest + "," +
		features[i].geometry.coordinates[1] + "," +
		features[i].geometry.coordinates[0];

	console.log(out);
}
