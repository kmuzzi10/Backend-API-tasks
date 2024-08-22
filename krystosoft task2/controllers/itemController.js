import * as itemService from '../services/itemService.js';
import { validationResult } from 'express-validator';


//create item
export const createItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            message: "Validation Error",
            errors: errors.array()
        })
    }

    try {
        const { name, description, price } = req.body;
        const item = await itemService.createItem(name, description, price);
        res.status(201).send({
            success: true,
            message: "Item Added Successfully",
            data: item
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error",
            error: error
        });
    }
};


//get all items
export const getAllItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        res.status(200).send({
            success: true,
            message: "Items List",
            data: items
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error",
            error: error
        });
    }
};


//get item by id
export const getItemById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) {
            return res.status(404).send({
                success: false,
                message: "Item Not Found With This Id"
            });
        }
        res.status(200).send({
            success: true,
            message: "Item",
            data: item
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error",
            error: error
        });
    }
};


//update item by Id
export const updateItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            success: false,
            message: "Validation Error",
            errors: errors.array()
        })
    }

    try {
        const { name, description, price } = req.body;
        const item = await itemService.updateItem(req.params.id, name, description, price);
        if (!item) {
            return res.status(404).send({
                success: false,
                message: "Item Not Found With This Id"
            });
        }
        res.status(201).send({
            success: true,
            message: "Item Updated Successfully",
            data: item
        });;
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error",
            error: error
        });
    }
};

//delete item by id
export const deleteItem = async (req, res) => {
    try {
        const success = await itemService.deleteItem(req.params.id);
        if (!success) {
            return res.status(404).send({
                success: false,
                message: "Item Not Found With This Id"
            });
        }
        res.status(201).send({
            success: true,
            message: "Item Deleted Successfully"
        }).end();
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error",
            error: error
        });
    }
};
