const LOCAL_API_BASE_URL = "http://127.0.0.1:5000";

function normalizeApiUrl(url) {
    return (url || "").trim().replace(/\/+$/, "");
}

function resolveApiBaseUrl() {
    const params = new URLSearchParams(window.location.search);
    const apiFromQuery = normalizeApiUrl(params.get("api"));

    // Example: index.html?api=https://your-service.onrender.com
    if (apiFromQuery) {
        localStorage.setItem("ECOPACK_API_BASE_URL", apiFromQuery);
        return apiFromQuery;
    }

    const apiFromStorage = normalizeApiUrl(
        localStorage.getItem("ECOPACK_API_BASE_URL")
    );
    if (apiFromStorage) return apiFromStorage;

    const apiFromWindow = normalizeApiUrl(window.ECOPACK_API_BASE_URL);
    if (apiFromWindow) return apiFromWindow;

    return LOCAL_API_BASE_URL;
}

const API_BASE_URL = resolveApiBaseUrl();
