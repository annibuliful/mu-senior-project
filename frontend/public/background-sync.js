const registerBackgroundSync = () => {
  if (!navigator.serviceWorker) {
    return console.error("Service Worker not supported");
  }

  navigator.serviceWorker.ready
    .then((registration) => registration.sync.register("syncAppointments"))
    .then(() => console.log("Registered background sync"))
    .catch((err) => console.error("Error registering background sync", err));
};

if (Notification.permission !== "denied") {
  Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
      registerBackgroundSync();

      new Notification("Welcome to Vaccinet App");
    }
  });
}
