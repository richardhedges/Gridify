Gridify
==========

Gridify is a vanilla JS script to sort your HTML elements into a masonry-like grid.

Features
--------
* __Vanilla JS:__ Gridify is a standalone vanilla JS script, meaning there are no dependencies
* __Lightweight:__ The minified version sits at 1.02kb
* __CSS Focused:__ I've tried to steer clear of a JS manipulated masonry script when writing this
* __Media Queries:__ You can write your own media queries to manipulate the grid how you like
* __Balanced Columns:__ One of the biggest let downs of all other masonry-like scripts is the lack of balanced columns - this script has those!

Upcoming
--------
* __Responsive Columns:__ I plan to introduce responsive columns at some point, allowing for more flexible columns across different viewport sizes.
* __Unbalanced Columns:__ I'll add a balanced argument allowing you to disable auto balancing.

Example
--------------------------

**CSS**
```css
.item {
	box-sizing: border-box;
	padding: 15px;
}

.item img {
	width: 100%;
	height: auto;
}

.column.size-1of3 {
	width: 33.333%;
	float: left;
}
```

**Javascript**
```javascript
window.onload = function() {
	gridify.init();
};
```

**HTML**
```html
<div data-gridify="3-columns">
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/350x600"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/400"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/700x500"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/400x900"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/450"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/400"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/350x600"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/400"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/700x500"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/400x900"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/450"></div>
	<div class="item"><img class="img-fluid" src="http://www.placehold.space/400"></div>
</div>
```

Methods
--------------------------

At the moment I've only added the one method as I've written this script for a specific project. If you need/want any additional methods written, just ask!

Method | Argument | Description
------ | -------- | -----------
init | | Initialises Gridify
destroy | | Destroys the Gridify instance
reInit | | Reinitialises the Gridify instance
appendElements | items: Array of DOM objects | Appends elements to the end of the grid
appendItem | item: DOM object, index: integer | Append element to end of the grid<br>Index is used upon destroy

---

##### Copyright

Copyright 2019 Richard Hedges

Licensed under the [MIT License](https://github.com/richardhedges/Better-Select/blob/master/LICENSE)