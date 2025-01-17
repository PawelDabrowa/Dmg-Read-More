<?php
/**
 * Plugin Name:       Dmg Read More
 * Description:       A Gutenberg block that allows editors to search for and choose a published post to insert into the editor as a stylized anchor link. The anchor text is the post title and the anchor href is the post permalink, wrapped in a paragraph element with a CSS class of 'dmg-read-more'.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Pawel Dabrowa
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dmg-read-more
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_dmg_read_more_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_dmg_read_more_block_init' );
