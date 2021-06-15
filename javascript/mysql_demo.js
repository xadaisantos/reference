const express = require("express");
const mysql = require("mysql");

// Create mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123xadai456',
    database: 'nodemysql'
})

db.connect((err) => {
    if (err){
        throw err;
    } else {
        console.log('Connected');
    }
})

var app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Database has been created.');
        }
    })
})

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Posts table has been created.');
        }
    })
})

// Insert one post
app.get('/addpost', (req, res) => {
    let post = {
        title: "Post One",
        body: "This is post number One"
    };
    let sql = 'INSERT INTO posts SET ?'; // the '?' serves as a placeholder for the 'post' variable on the next line
    db.query(sql, post, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Post has been inserted.');
        }
    })
})

// Select all posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Posts fetched.');
        }
    })
})

// Select one post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Post fetched.');
        }
    })
})

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Post updated.');
        }
    })
})

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        } else {
            console.log(result);
            res.send('Post deleted.');
        }
    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000, ok?");
})