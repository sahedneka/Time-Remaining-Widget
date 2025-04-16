=== Time Remaining Widget ===
Contributors: yourname
Tags: countdown, timer, widget
Requires at least: 5.0
Tested up to: 6.2
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A compact widget that displays the time remaining between two dates.

== Description ==

Time Remaining Widget is a simple, elegant countdown timer that shows the remaining years, days, hours, minutes, and seconds between two specified dates.

= Features =
* Clean, compact design
* Customizable start and end dates (year and month)
* Multiple instances on the same page
* Responsive design

== Installation ==

1. Upload the `time-remaining-widget` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Use the shortcode `[time_remaining]` in your posts, pages, or widgets

== Usage ==

Basic usage:
`[time_remaining]`

This will display the time remaining from the current year to 5 years in the future.

Custom years:
`[time_remaining start_year="2023" end_year="2030"]`

This will display the time remaining from January 2023 to January 2030.

Custom years and months:
`[time_remaining start_year="2023" start_month="6" end_year="2030" end_month="12"]`

This will display the time remaining from June 2023 to December 2030.

Month values should be 1-12, where:
1 = January
2 = February
...
12 = December

== Changelog ==

= 1.0.0 =
* Initial release
