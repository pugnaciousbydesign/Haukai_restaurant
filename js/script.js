// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the current date in the format YYYY-MM-DD
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0
    var day = String(currentDate.getDate()).padStart(2, '0');

    var formattedCurrentDate = year + '-' + month + '-' + day;

    // Set the minimum date for the date input field in the reservation form
    var dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = formattedCurrentDate;
    }

    // Show message function for general feedback form
    function showMessage() {
        alert('We have received your message and will be in contact shortly!');
        // Clear the form after showing the message
        document.getElementById('feedback-form').reset();
    }

    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav ul li a');

    // Iterate over each link and check if it matches the current page URL
    for (var i = 0; i < navLinks.length; i++) {
        var linkUrl = navLinks[i].getAttribute('href');

        // Add the active class if the link URL matches the current page URL
        if (currentPageUrl.includes(linkUrl)) {
            navLinks[i].classList.add('active');
            break; // Exit the loop after adding the active class
        }
    }

    // Get the feedback form
    var feedbackForm = document.getElementById('feedback-form');

    // Add a submit event listener to the general feedback form
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Call the showMessage function
            showMessage();
        });
    }

    // Show reservation message function
    function showReservationMessage() {
        alert('Your reservation has been booked! We look forward to welcoming you.');
    }

    // Function to clear the reservation form
    function clearReservationForm() {
        document.getElementById('reservations-form').reset();
    }

    // Updated form submission function for reservation form
    function submitReservationForm() {
        // Validate date and time here
        var selectedDate = document.getElementById('date').value;
        var selectedTime = document.getElementById('time').value;

        // Validate day (Wednesday to Sunday) and time (4:00 PM to 10:00 PM)
        var selectedDateTime = new Date(selectedDate + ' ' + selectedTime);
        var selectedDay = selectedDateTime.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
        var selectedHours = selectedDateTime.getHours();

        if (selectedDay >= 3 && selectedDay <= 6 && selectedHours >= 16 && selectedHours <= 22) {
            // Date and time are within the allowed range, proceed with form submission
            showReservationMessage();
            clearReservationForm(); // Clear the form after successful submission
        } else {
            alert('Please select a valid date and time for reservations (Wednesday to Sunday, 4:00 PM to 10:00 PM).');
        }
    }

    // Add an event listener for the reservations form submission
    var reservationsForm = document.getElementById('reservations-form');
    if (reservationsForm) {
        reservationsForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Call the submitReservationForm function
            submitReservationForm();
        });
    }
});
