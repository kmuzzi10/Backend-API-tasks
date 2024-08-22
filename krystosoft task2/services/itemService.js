import Item from '../models/item.js';

export const createItem = async (name, description, price) => {
    return await Item.create({ name, description, price });
};

export const getAllItems = async () => {
    return await Item.findAll();
};

export const getItemById = async (id) => {
    return await Item.findByPk(id);
};

export const updateItem = async (id, name, description, price) => {
    const item = await Item.findByPk(id);
    if (item) {
        if (name !== undefined) {
            item.name = name;
        }
        if (description !== undefined) {
            item.description = description;
        }
        if (price !== undefined) {
            item.price = price;
        }
        await item.save();
        return item;
    }
    return null;
};

export const deleteItem = async (id) => {
    const item = await Item.findByPk(id);
    if (item) {
        await item.destroy();
        return true;
    }
    return false;
};
