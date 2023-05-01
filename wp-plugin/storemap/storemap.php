<?php
/**
 * Plugin Name: storemap
 * Plugin URI: https://www.your-site.com/
 * Description: Test.
 * Version: 0.1
 * Author: your-name
 * Author URI: https://www.your-site.com/
 **/

add_action( 'the_content', 'my_thank_you_text' );
add_action( 'init', 'storemap_init' );


function storemap_init() {
	add_shortcode( 'storemap', 'storemap_shortcode' );
}


function storemap_shortcode() {
	return '<div id="map"></div>';
}


function my_thank_you_text( $content ) {
	return $content .= '<p>Thank you for reading!</p>';
}

