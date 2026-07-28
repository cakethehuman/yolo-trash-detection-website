async function connectBackend() {
    try {
        const response = await fetch("http://127.0.0.1:8000/");
        const data = await response.json();
        
        document.getElementById("status").textContent =
            `Terhubung ke backend: ${data}`;

    } catch (error) {
        document.getElementById("status").textContent =
            "Gagal terhubung ke backend";
    }
}

connectBackend();