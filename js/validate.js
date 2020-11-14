if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Pendaftaran Service Worker Berhasil"))
            .catch(() => console.error("Service Worker gagal didaftarkan"));
    });
} else {
    console.error("Browser ini tidak mendukung service worker.");
}