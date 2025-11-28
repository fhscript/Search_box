const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const resultsBox = document.getElementById("resultsContainer");
const suggestionsBox = document.getElementById("suggestions");
const historyBox = document.getElementById("history");

function performSearch(query) {
    if (!query) return;
    saveHistory(query);

    resultsBox.innerHTML = `
        <div class="result-item fade-in">
            <h3>Searching for: ${query}</h3>
            <p>This is test data. Real API coming next.</p>
        </div>
    `;
}

function saveHistory(query) {
    let saved = JSON.parse(localStorage.getItem("atlasHistory")) || [];
    saved = saved.filter(item => item !== query);
    saved.unshift(query);
    if (saved.length > 10) saved.pop();
    localStorage.setItem("atlasHistory", JSON.stringify(saved));
    loadHistory();
}

function loadHistory() {
    const saved = JSON.parse(localStorage.getItem("atlasHistory")) || [];
    if (!saved.length) {
        historyBox.style.display = "none";
        return;
    }

    historyBox.style.display = "flex";
    historyBox.innerHTML = `
        <p class="history-title">Recent Searches</p>
        ${saved.map(item => `<div class="history-item">${item}</div>`).join('')}
        <button class="clear-history">Clear History</button>
    `;
    historyBox.classList.add("slide-up");
}

historyBox.addEventListener("click", e => {
    if (e.target.classList.contains("history-item")) {
        input.value = e.target.textContent;
        performSearch(e.target.textContent);
    }
    if (e.target.classList.contains("clear-history")) {
        localStorage.removeItem("atlasHistory");
        loadHistory();
    }
});

loadHistory();

const suggestionData = ["atlas", "galaxy", "stars", "quantum physics", "mysteries", "ai", "coding", "dev", "web design"];

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    if (!value) { suggestionsBox.style.display="none"; return; }

    const filtered = suggestionData.filter(item => item.startsWith(value));
    if (!filtered.length) { suggestionsBox.style.display="none"; return; }

    suggestionsBox.innerHTML = filtered.map(item => `<div class="suggestion-item">${item}</div>`).join('');
    suggestionsBox.style.display = "flex";
    suggestionsBox.classList.add("fade-in");
});

document.addEventListener("click", e => {
    if (e.target.classList.contains("suggestion-item")) {
        input.value = e.target.textContent;
        suggestionsBox.style.display = "none";
        performSearch(e.target.textContent);
    } else if (!input.contains(e.target)) {
        suggestionsBox.style.display = "none";
    }
});


btn.addEventListener("click", () => performSearch(input.value.trim()));
input.addEventListener("keypress", e => { if(e.key==="Enter") performSearch(input.value.trim()); });

input.addEventListener("focus", () => {
    if(historyBox.innerHTML) historyBox.classList.add("show");
    if(suggestionsBox.innerHTML) suggestionsBox.classList.add("show");
});
input.addEventListener("blur", () => {
    setTimeout(()=>{ historyBox.classList.remove("show"); suggestionsBox.classList.remove("show"); },150);
});
