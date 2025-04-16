(function($) {
  'use strict';
  
  $(document).ready(function() {
      // Find all widget instances
      $('.time-remaining-widget').each(function() {
          const widget = $(this);
          const startYear = parseInt(widget.data('start'));
          const endYear = parseInt(widget.data('end'));
          
          // Initial countdown update
          updateCountdown(widget, startYear, endYear);
          
          // Update countdown every second
          setInterval(function() {
              updateCountdown(widget, startYear, endYear);
          }, 1000);
      });
      
      function updateCountdown(widget, startYear, endYear) {
          // Validate that end year is after start year
          if (endYear <= startYear) {
              console.error('End year must be after start year');
              return;
          }
          
          const now = new Date();
          const startDate = new Date(startYear, 0, 1); // January 1st of start year
          const endDate = new Date(endYear, 0, 1); // January 1st of end year
          
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
          const yearsInMs = daysInMs * 365.25; // More accurate with leap years
          
          const years = Math.floor(timeDiff / yearsInMs);
          timeDiff -= years * yearsInMs;
          
          const days = Math.floor(timeDiff / daysInMs);
          timeDiff -= days * daysInMs;
          
          const hours = Math.floor(timeDiff / hoursInMs);
          timeDiff -= hours * hoursInMs;
          
          const minutes = Math.floor(timeDiff / minutesInMs);
          timeDiff -= minutes * minutesInMs;
          
          const seconds = Math.floor(timeDiff / secondsInMs);
          
          // Update the display
          widget.find('.years').text(years);
          widget.find('.days').text(days);
          widget.find('.hours').text(hours);
          widget.find('.minutes').text(minutes);
          widget.find('.seconds').text(seconds);
      }
  });
})(jQuery);
