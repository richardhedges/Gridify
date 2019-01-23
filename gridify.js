var Gridify = {
	gridify: document.querySelectorAll('[data-gridify]'),
	columns: [],
	init: function() {

		Array.prototype.forEach.call(this.gridify, function(grid, grid_index) {

			var options = grid.getAttribute('data-gridify');
			var totalColumns = options.substr(0, options.indexOf('-columns'));

			if (grid.querySelectorAll(':scope > div').length == totalColumns && grid.querySelectorAll(':scope > div')[0].getAttribute('class') == 'column size-1of' + totalColumns) {
				return;
			}

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

				items.push(item);

			});

			grid.innerHTML = '';

			Array.prototype.forEach.call(Gridify.columns, function(column, column_index) {
				grid.appendChild(column);
			});

			Gridify.appendItems(items);

		});

	},
	destroy: function() {

		Array.prototype.forEach.call(Gridify.gridify, function(grid, index) {

			if (Gridify.columns.length == 0) {
				return;
			}

			var temp = document.createElement('div');
			temp.setAttribute('data-items', '');

			grid.appendChild(temp);

			var items = [];

			Array.prototype.forEach.call(grid.querySelectorAll(':scope > div'), function(column, index) {

				Array.prototype.forEach.call(column.querySelectorAll(':scope > div'), function(item, item_index) {

					items.push({
						index: parseInt(item.getAttribute('data-index')),
						item: item
					});

				});

			});

			items.sort(function(a, b) {

				if (a.index < b.index) {
					return -1;
				}

				if (a.index > b.index) {
					return 1;
				}

				return 0;

			});

			Array.prototype.forEach.call(items, function(item, index) {
				item.item.removeAttribute('data-index');
				temp.appendChild(item.item);
			});

			Gridify.columns = [];
			grid.innerHTML = temp.innerHTML;

		});

	},
	reInit: function() {
		Gridify.destroy();
		Gridify.init();
	},
	appendItems: function(items) {

		Array.prototype.forEach.call(items, function(item, index) {
			Gridify.appendItem(item, index);
		});

	},
	appendItem: function(item, index) {

		var column_height = 0;
		Array.prototype.forEach.call(Gridify.columns[0].querySelectorAll(':scope > div'), function(child, index) {
			column_height += child.offsetHeight;
		});

		var use_column = {
			height: column_height,
			column: 0
		};

		for (var c = 1; c < Gridify.columns.length; c++) {

			var column_height = 0;
			Array.prototype.forEach.call(Gridify.columns[c].querySelectorAll(':scope > div'), function(child, index) {
				column_height += child.offsetHeight;
			});

			if (column_height < use_column.height) {

				use_column = {
					height: column_height,
					column: c
				};

			}

		}

		item.setAttribute('data-index', index);

		Gridify.columns[use_column.column].appendChild(item);

	}
};

let gridify = Gridify;