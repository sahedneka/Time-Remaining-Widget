(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Find all widget instances
        $('.time-remaining-widget').each(function() {
            const widget = $(this);
            const startYear = parseInt(widget.data('start'));
            const endYear = parseInt(widget.data('end'));
            const endMonth = parseInt(widget.data('end-month')) - 1; // JS months are 0-based
            const endDay = parseInt(widget.data('end-day'));
            
            // Initial countdown update
            updateCountdown(widget, startYear, endYear, endMonth, endDay);
            
            // Update countdown every second
            setInterval(function() {
                updateCountdown(widget, startYear, endYear, endMonth, endDay);
            }, 1000);
        });
        
        function updateCountdown(widget, startYear, endYear, endMonth, endDay) {
            const now = new Date();
            const startDate = new Date(startYear, 0, 1); // January 1st of start year
            const endDate = new Date(endYear, endMonth, endDay, 0, 0, 0); // Specific end date at midnight
            
            // Validate end date is after start date
            if (endDate <= startDate) {
                console.error('End date must be after start date');
                return;
            }
            
            // If start date is in the future, use that as the reference point
            // Otherwise use current date
            const referenceDate = startDate > now ? startDate : now;
            
            // Calculate time difference
            let timeDiff = endDate - referenceDate;
            
            // If time difference is negative, display zeros
            if (timeDiff < 0) {
                widget.find('.years').text('0');
                widget.find('.days').text('0');
                widget.find('.hours').text('0');
                widget.find('.minutes').text('0');
                widget.find('.seconds').text('0');
                return;
            }
            
            // Calculate time units
            const secondsInMs = 1000;
            const minutesInMs = secondsInMs * 60;
            const hoursInMs = minutesInMs * 60;
            const daysInMs = hoursInMs * 24;
            
            // For years, we need to calculate more precisely
            const years = calculateYears(referenceDate, endDate);
            
            // Calculate remaining time after years
            const yearsDuration = calculateYearsDuration(referenceDate, years);
            let remainingTime = timeDiff - yearsDuration;
            
            const days = Math.floor(remainingTime / daysInMs);
            remainingTime -= days * daysInMs;
            
            const hours = Math.floor(remainingTime / hoursInMs);
            remainingTime -= hours * hoursInMs;
            
            const minutes = Math.floor(remainingTime / minutesInMs);
            remainingTime -= minutes * minutesInMs;
            
            const seconds = Math.floor(remainingTime / secondsInMs);
            
            // Update the display
            widget.find('.years').text(years);
            widget.find('.days').text(days);
            widget.find('.hours').text(hours);
            widget.find('.minutes').text(minutes);
            widget.find('.seconds').text(seconds);
        }
        
        // Calculate exact number of years between two dates
        function calculateYears(startDate, endDate) {
            let years = endDate.getFullYear() - startDate.getFullYear();
            
            // Adjust if we haven't reached the same month/day yet in the end year
            if (endDate.getMonth() < startDate.getMonth() || 
                (endDate.getMonth() === startDate.getMonth() && 
                 endDate.getDate() < startDate.getDate())) {
                years--;
            }
            
            return Math.max(0, years);
        }
        
        // Calculate the duration of the calculated years in milliseconds
        function calculateYearsDuration(startDate, years) {
            if (years === 0) return 0;
            
            const endYear = startDate.getFullYear() + years;
            const endMonth = startDate.getMonth();
            const endDay = startDate.getDate();
            const endHour = startDate.getHours();
            const endMinute = startDate.getMinutes();
            const endSecond = startDate.getSeconds();
            const endMs = startDate.getMilliseconds();
            
            // Create date exactly years later
            const yearLaterDate = new Date(endYear, endMonth, endDay, endHour, endMinute, endSecond, endMs);
            
            // Handle leap years and other edge cases
            if (yearLaterDate.getMonth() !== endMonth) {
                // If the month changed, it means the day doesn't exist in that month
                // (e.g., Feb 29 in a non-leap year)
                yearLaterDate.setDate(0); // Set to last day of previous month
            }
            
            return yearLaterDate - startDate;
        }
    });
})(jQuery);
