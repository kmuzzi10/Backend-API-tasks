import { validationResult } from 'express-validator';
import { addItem, getAllItems, getItemById, updateItem, deleteItem } from '../services/itemService.js';

// create an item
export const createItem = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const newItem = addItem(req.body);
        res.status(201).send({
            success: true,
            message: "Item added successfully",
            data: newItem
        });
    } catch (error) {
        console.error('Error creating item:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

// get all items
export const fetchAllItems = (req, res) => {
    try {
        const data = getAllItems();
        res.status(200).send({
            success: true,
            message: "List of items",
            data: data
        });
    } catch (error) {
        console.error('Error fetching items:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

// item by id
export const fetchItemById = (req, res) => {
    try {
        const item = getItemById(req.params.id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'Item not found'
            });
        }
        res.status(200).send({
            success: true,
            message: "Item retrieved successfully",
            data: item
        });
    } catch (error) {
        console.error('Error fetching item by ID:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

// update
export const modifyItem = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const updatedItem = updateItem(req.params.id, req.body);
        if (!updatedItem) {
            return res.status(404).json({
                success: false,
                message: 'Item not found'
            });
        }

        res.status(200).send({
            success: true,
            message: "Item updated successfully",
            data: updatedItem
        });
    } catch (error) {
        console.error('Error updating item:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

// delete item
export const removeItem = (req, res) => {
    try {
        const isDeleted = deleteItem(req.params.id);
        if (!isDeleted) {
            return res.status(404).json({
                success: false,
                message: 'Item not found'
            });
        }

        res.status(200).send({
            success: true,
            message: "Item deleted successfully"
        });
    } catch (error) {
        console.error('Error deleting item:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};
