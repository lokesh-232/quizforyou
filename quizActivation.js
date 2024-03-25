document.getElementById("activation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form inputs
    const activationDate = document.getElementById("activation-date").value;
    const activationTime = document.getElementById("activation-time").value;
    const durationMinutes = parseInt(document.getElementById("duration").value);
   var hostId=localStorage.getItem("hostId")

    // Combine date and time inputs to create a single Date object
    const activationDateTime = new Date(`${activationDate}T${activationTime}`);

    // Get the current time
    const now = new Date();

    // Check if the activation date/time is in the future
    if (activationDateTime > now) {
        // Calculate the time difference in milliseconds
        const timeDifference = activationDateTime - now;

        // Convert the duration from minutes to milliseconds
        const durationMilliseconds = durationMinutes * 60 * 1000;

        // Calculate the time when the quiz should be automatically submitted
        const submissionTime = activationDateTime.getTime() + durationMilliseconds;

        // Store the activation details in local storage
        localStorage.setItem("activationDateTime"+hostId, activationDateTime.toISOString()); // Store as ISO string
        localStorage.setItem("duration"+hostId, durationMilliseconds);
        

        // Set a timer to submit the quiz when the time is up
        setTimeout(function() {
            alert("Time's up! Quiz will be submitted automatically.");
            // Add logic to submit the quiz automatically
        }, timeDifference);

        // Inform the user about the activation details
        alert(`Quiz will be activated on ${activationDate} at ${activationTime}.`);

    } else {
        alert("Activation date/time must be in the future.");
    }
});
