import items from '../models/item.js';

export const addItem = (item) => {
    const newItem = {
        id: items.length + 1,
        ...item,
    };
    items.push(newItem);
    return newItem;
};

export const getAllItems = () => {
    return items;
};

export const getItemById = (id) => {
    return items.find(item => item.id === parseInt(id));
};

export const updateItem = (id, updatedItem) => {
    const itemIndex = items.findIndex(item => item.id === parseInt(id));
    
    if (itemIndex !== -1) {
        items[itemIndex] = { ...items[itemIndex], ...updatedItem };
        return items[itemIndex];
    }
    
    return null;
};

export const deleteItem = (id) => {
    const itemIndex = items.findIndex(item => item.id === parseInt(id));
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        return true;
    }
    return false;
};
