document.getElementById("startBtn").addEventListener("click", function() {
    // Request permission when user clicks the button
    if (Notification.permission === "granted") {
        startReminder();
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                startReminder();
            }
        });
    }
});

function startReminder() {
    // Convert minutes to milliseconds
    let reminderTime = 5000;

    // Show reminder notification
    function showNotification() {
        if (Notification.permission === "granted") {
            new Notification("Reminder", {
                body: "Time to drink water",
                icon: 'diamond.jpg'
            });
        }
    }

    // Set the interval for reminders
    setInterval(showNotification, reminderTime);
}
