=== Time Remaining Widget ===
Contributors: yourname
Tags: countdown, timer, widget
Requires at least: 5.0
Tested up to: 6.2
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A compact widget that displays the time remaining between two years with specific end date.

== Description ==

Time Remaining Widget is a simple, elegant countdown timer that shows the remaining years, days, hours, minutes, and seconds between a start year and a specific end date.

= Features =
* Clean, compact design
* Customizable start year and end date (year, month, day)
* Multiple instances on the same page
* Responsive design

== Installation ==

1. Upload the `time-remaining-widget` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Use the shortcode `[time_remaining]` in your posts, pages, or widgets

== Usage ==

Basic usage:
`[time_remaining]`

This will display the time remaining from the current year to 5 years in the future (January 1st).

Custom years:
`[time_remaining start_year="2023" end_year="2030"]`

This will display the time remaining from 2023 to January 1st, 2030.

Custom end date:
`[time_remaining start_year="2023" end_year="2030" end_month="12" end_day="31"]`

This will display the time remaining from 2023 to December 31st, 2030.

Examples:
- For a countdown to Christmas 2025: `[time_remaining end_year="2025" end_month="12" end_day="25"]`
- For a countdown to New Year's Eve 2030: `[time_remaining end_year="2030" end_month="12" end_day="31"]`
- For a countdown to July 4th, 2024: `[time_remaining end_year="2024" end_month="7" end_day="4"]`

== Frequently Asked Questions ==

= Can I have multiple countdowns on the same page? =

Yes, you can add multiple shortcodes with different parameters on the same page.

= What happens if I set an invalid date? =

The plugin will try to correct invalid dates. For example, if you set February 31st, it will automatically adjust to the last day of February.

= Does the countdown update in real-time? =

Yes, the countdown updates every second without requiring a page refresh.

== Changelog ==

= 1.0.0 =
* Initial release
* Support for custom start year, end year, end month, and end day
