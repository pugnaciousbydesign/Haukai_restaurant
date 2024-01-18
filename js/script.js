// CONTACT FORM
// Show message function
function showMessage() {
    alert('We have received your message and will be in contact shortly!');
    // Clear the form after showing the message
    document.getElementById('feedback-form').reset();
}

document.addEventListener('DOMContentLoaded', function () {
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

    // Add a submit event listener to the form
    feedbackForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the showMessage function
        showMessage();
    });
});

// RESERVATIONS FORM
// Updated showReservationMessage function
function showReservationMessage() {
    alert('Your reservation has been booked! We look forward to welcoming you.');
    // Clear the form after showing the message
    clearReservationForm();
    // You can add additional logic here, such as resetting the form or performing other actions.
}

// Function to clear the reservation form
function clearReservationForm() {
    document.getElementById('reservations-form').reset();
}

// Updated form submission function
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
        // You can add additional logic here, such as clearing the form or submitting to the server.
    } else {
        alert('Please select a valid date and time for reservations (Wednesday to Sunday, 4:00 PM to 10:00 PM).');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // ... (Your existing code)

    // Add an event listener for the reservations form submission
    var reservationsForm = document.getElementById('reservations-form');
    reservationsForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the submitReservationForm function
        submitReservationForm();
    });
});
