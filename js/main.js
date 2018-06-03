Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
};

Array.method('fillIncrement', function (length, start) {

	start = start || 0;

	for (var i = 0; i < length; i++) {
		this.push(i + start);
	}
});

Element.method('addClass', function (className) {

	var classes = this.className.split(" ");

	if (classes.indexOf(className) < 0) {
		classes.push(className);
		this.className = classes.join(" ").trim();
	}
});

Element.method('removeClass', function (className) {

	var classes = this.className.split(" ");
	var index = classes.indexOf(className);

	if ( index >= 0) {
		classes.splice(index, 1);
		this.className = classes.join(" ").trim();
	}
});

var app = {};

app.Sudoku = function (area) {

	var that = this;
	var table = document.createElement('table');
	var area = area || 3;
	var expo = area * area;

	table.addClass('sudoku');

	for (var i = 0; expo > i; i++) {

		var row = table.insertRow(-1);

		for (var j = 0; expo > j; j++) {

			var cell = row.insertCell(-1);
			cell.innerHTML = i + ';' + j;

		}

	}

	that.table = table;

	console.log(table);
};

var tbl = new app.Sudoku(3);

document.body.appendChild(tbl.table);

//app.Sudoku();