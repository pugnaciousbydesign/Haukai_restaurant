function authenticateStaff() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Use AJAX or fetch to send a request to the server with the entered credentials
    // Validate the credentials on the server side (e.g., using a server-side script)
    // Display staff details if authentication is successful

    // Example: Displaying a message for demonstration purposes
    if (username === "KimRasmussen" && password === "temp1234". 
        username === "JaneDoe" && password === "temp1234") {
        // Authentication successful, show staff details
        document.getElementById("staff-details").style.display = "block";
    } else {
        // Authentication failed, show an error message
        alert("Invalid credentials. Please try again.");
    }
}
