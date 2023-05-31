function saveToStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    let value = window.localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
}

export {saveToStorage, loadFromStorage}