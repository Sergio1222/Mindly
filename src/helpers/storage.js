export const addItem = (name, data) => localStorage.setItem(name, JSON.stringify(data))

export const getItem = (name) => localStorage.getItem(name)