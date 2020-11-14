if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => console.log("Pendaftaran Service Worker Berhasil"))
            .catch(() => console.error("Service Worker gagal didaftarkan"));
    });
} else {
    console.error("Browser ini tidak mendukung service worker.");
}
document.addEventListener("DOMContentLoaded", () => {
    var urlParams = new URLSearchParams(window.location.search);
    var isFromSaved = urlParams.get("saved");
    var save = document.getElementById("save");
    if (isFromSaved) {
        save.style.display = "none";
        getSavedTeamById();
    } else {
        var item = getTeamById();
    }
    save.onclick = () => {
        item.then((team) => {
            saveTeam(team);
        });
    };
});