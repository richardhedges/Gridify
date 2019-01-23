<?php

$images = [
	'http://www.placehold.space/750x300',
	'http://www.placehold.space/400x600',
	'http://www.placehold.space/400x500',
	'http://www.placehold.space/350x600',
	'http://www.placehold.space/400x350',
	'http://www.placehold.space/450',
	'http://www.placehold.space/750x300',
];

shuffle($images);

foreach ($images as $image) {
	$items[] = '<div class="item"><img src="' . $image . '"></div>';
}

header('Content-Type: application/json');

echo json_encode(array(
	'items' => $items,
	'images' => $images
));