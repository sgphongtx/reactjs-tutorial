//Set Local Storage
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

//Get Local Storage
export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || null;
};

//Delete Local Storage
export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};
