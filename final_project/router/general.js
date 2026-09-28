const express = require('express');
const axios = require('axios');

const public_users = express.Router();

const API_URL = 'https://openlibrary.org';

public_users.post("/register", (req, res) => {
    return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books
public_users.get('/', async (req, res) => {
    try {
        const response = await axios.get(
            `${API_URL}/subjects/fantasy.json?limit=10`
        );

        res.json(response.data.works);
    } catch (error) {
        res.status(500).json({message: "Error retrieving books"});
    }
});

// Get book by ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
    try {
        const isbn = req.params.isbn;

        const response = await axios.get(
            `${API_URL}/isbn/${isbn}.json`
        );

        res.json(response.data);
    } catch (error) {
        res.status(404).json({message: "Book not found"});
    }
});

// Get books by author
public_users.get('/author/:author', async (req, res) => {
    try {
        const author = req.params.author;

        const response = await axios.get(
            `${API_URL}/search.json?author=${encodeURIComponent(author)}`
        );

        res.json(response.data.docs);
    } catch (error) {
        res.status(500).json({message: "Error retrieving books"});
    }
});

// Get books by title
public_users.get('/title/:title', async (req, res) => {
    try {
        const title = req.params.title;

        const response = await axios.get(
            `${API_URL}/search.json?title=${encodeURIComponent(title)}`
        );

        res.json(response.data.docs);
    } catch (error) {
        res.status(500).json({message: "Error retrieving books"});
    }
});

// Get book review
public_users.get('/review/:isbn', (req, res) => {
    return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;