var Gridify = {
	gridify: document.querySelectorAll('[data-gridify]'),
	columns: [],
	init: function() {

		Array.prototype.forEach.call(this.gridify, function(grid, grid_index) {

			var options = grid.getAttribute('data-gridify');
			var totalColumns = options.substr(0, options.indexOf('-columns'));

			var items = [];

			for (var c = 1; c <= totalColumns; c++) {

				var column = document.createElement('div');
				column.setAttribute('class', 'column size-1of' + totalColumns);

				Gridify.columns.push(column);

			}

			Array.prototype.forEach.call(grid.querySelectorAll(':scope > div'), function(item_object, item_index) {

				var item = document.createElement('div');
				item.innerHTML = item_object.outerHTML.trim();
				item = item.firstChild;

				items.push({
					'item': item,
					'height': item_object.clientHeight
				});

			});

			grid.innerHTML = '';

			Array.prototype.forEach.call(Gridify.columns, function(column, column_index) {
				grid.appendChild(column);
			});

			Gridify.appendItems(items);

		});

	},
	appendItems: function(items) {

		Array.prototype.forEach.call(items, function(item, item_index) {

			var use_column = {
				height: Gridify.columns[0].clientHeight + item.height,
				column: 0
			};

			for (var c = 1; c < Gridify.columns.length; c++) {

				if (Gridify.columns[c].clientHeight + item.height <= use_column.height) {
					
					use_column = {
						height: Gridify.columns[c].clientHeight + item.height,
						column: c
					};

				}

			}

			Gridify.columns[use_column.column].appendChild(item.item);

		});

	}
};

let gridify = Gridify;