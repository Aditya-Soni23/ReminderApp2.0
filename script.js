function showNotification() {
    if (Notification.permission === "granted") {
        new Notification("Reminder", {
            body: "Time to drink water",
            icon: 'diamond.jpg'
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification();
            }
        });
    }
}

// Convert minutes to milliseconds
let reminderTime = 5000;

setInterval(showNotification, reminderTime);
