<?php
/**
 * Main plugin class
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

class Time_Remaining_Widget {
    
    /**
     * Initialize the plugin
     */
    public function init() {
        // Register shortcode
        add_shortcode('time_remaining', array($this, 'time_remaining_shortcode'));
        
        // Enqueue scripts and styles
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    }
    
    /**
     * Enqueue scripts and styles
     */
    public function enqueue_scripts() {
        wp_enqueue_style(
            'time-remaining-styles',
            TIME_REMAINING_WIDGET_URL . 'assets/css/time-remaining.css',
            array(),
            TIME_REMAINING_WIDGET_VERSION
        );
        
        wp_enqueue_script(
            'time-remaining-script',
            TIME_REMAINING_WIDGET_URL . 'assets/js/time-remaining.js',
            array('jquery'),
            TIME_REMAINING_WIDGET_VERSION,
            true
        );
    }
    
    /**
     * Shortcode callback function
     */
    public function time_remaining_shortcode($atts) {
        // Default attributes
        $atts = shortcode_atts(
            array(
                'start_year' => date('Y'), // Current year as default
                'end_year' => date('Y') + 5, // Current year + 5 as default
                'end_month' => 1, // January as default
                'end_day' => 1, // 1st day as default
            ),
            $atts,
            'time_remaining'
        );
        
        // Validate years and date
        $start_year = intval($atts['start_year']);
        $end_year = intval($atts['end_year']);
        $end_month = max(1, min(12, intval($atts['end_month']))); // Ensure month is between 1-12
        $end_day = max(1, min(31, intval($atts['end_day']))); // Ensure day is between 1-31
        
        // Generate unique ID for multiple instances
        $widget_id = 'time-remaining-' . uniqid();
        
        // Output HTML
        ob_start();
        ?>
        <div class="time-remaining-widget" id="<?php echo esc_attr($widget_id); ?>" 
             data-start="<?php echo esc_attr($start_year); ?>" 
             data-end="<?php echo esc_attr($end_year); ?>"
             data-end-month="<?php echo esc_attr($end_month); ?>"
             data-end-day="<?php echo esc_attr($end_day); ?>">
            <h2><?php esc_html_e('Time Remaining', 'time-remaining-widget'); ?></h2>
            <div class="time-display">
                <div class="time-unit">
                    <span class="years">0</span>
                    <label><?php esc_html_e('Years', 'time-remaining-widget'); ?></label>
                </div>
                <div class="time-unit">
                    <span class="days">0</span>
                    <label><?php esc_html_e('Days', 'time-remaining-widget'); ?></label>
                </div>
                <div class="time-unit">
                    <span class="hours">0</span>
                    <label><?php esc_html_e('Hours', 'time-remaining-widget'); ?></label>
                </div>
                <div class="time-unit">
                    <span class="minutes">0</span>
                    <label><?php esc_html_e('Minutes', 'time-remaining-widget'); ?></label>
                </div>
                <div class="time-unit">
                    <span class="seconds">0</span>
                    <label><?php esc_html_e('Seconds', 'time-remaining-widget'); ?></label>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}
