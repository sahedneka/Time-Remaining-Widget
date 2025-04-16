<?php
/**
 * Plugin Name: Time Remaining Widget
 * Plugin URI: https://sahed.dev
 * Description: A compact widget that displays the time remaining between two years. Use shortcode [time_remaining start_year="2023" end_year="2030"] to display the widget.
 * Version: 1.0
 * Author: Sahed Rana Neka
 * Author URI: https://sahed.dev
 * Text Domain: time-remaining-widget
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('TIME_REMAINING_WIDGET_VERSION', '1.0.0');
define('TIME_REMAINING_WIDGET_PATH', plugin_dir_path(__FILE__));
define('TIME_REMAINING_WIDGET_URL', plugin_dir_url(__FILE__));

// Include the main class file
require_once TIME_REMAINING_WIDGET_PATH . 'includes/class-time-remaining-widget.php';

// Initialize the plugin
function time_remaining_widget_init() {
    $plugin = new Time_Remaining_Widget();
    $plugin->init();
}
add_action('plugins_loaded', 'time_remaining_widget_init');

// Register activation hook
register_activation_hook(__FILE__, 'time_remaining_widget_activate');

function time_remaining_widget_activate() {
    // Create necessary directories
    $dirs = array(
        TIME_REMAINING_WIDGET_PATH . 'assets',
        TIME_REMAINING_WIDGET_PATH . 'assets/css',
        TIME_REMAINING_WIDGET_PATH . 'assets/js',
    );
    
    foreach ($dirs as $dir) {
        if (!file_exists($dir)) {
            wp_mkdir_p($dir);
        }
    }
    
    // Create CSS file if it doesn't exist
    $css_file = TIME_REMAINING_WIDGET_PATH . 'assets/css/time-remaining.css';
    if (!file_exists($css_file)) {
        $css_content = file_get_contents(TIME_REMAINING_WIDGET_PATH . 'assets/css/time-remaining.css.dist');
        file_put_contents($css_file, $css_content);
    }
    
    // Create JS file if it doesn't exist
    $js_file = TIME_REMAINING_WIDGET_PATH . 'assets/js/time-remaining.js';
    if (!file_exists($js_file)) {
        $js_content = file_get_contents(TIME_REMAINING_WIDGET_PATH . 'assets/js/time-remaining.js.dist');
        file_put_contents($js_file, $js_content);
    }
}
