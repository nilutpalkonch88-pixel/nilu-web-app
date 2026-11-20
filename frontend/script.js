
const API_URL = "http://127.0.0.1:5000";

async function checkBackend() {
    const status = document.getElementById("status");
    const dot = document.querySelector(".status-dot");

    status.textContent = "Connecting...";
    dot.style.background = "#facc15";

    try {
        const response = await fetch(`${API_URL}/api/info`);

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const data = await response.json();

        document.getElementById("developer").textContent = data.developer;
        document.getElementById("project").textContent = data.project;
        document.getElementById("version").textContent = data.version;

        status.textContent = "Backend Connected Successfully!";
        dot.style.background = "#22c55e";

    } catch (error) {
        status.textContent = "Backend Connection Failed!";
        dot.style.background = "#ef4444";
        console.error(error);
    }
}

checkBackend();
