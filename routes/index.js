const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, avatar, title FROM tbl_card";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { people: result });

       
    })
})

router.get('/favorite/:id', (req, res) => {
    //console.log('Dynamic Route');
    //console.log(req.params.id);

    let query = `SELECT * FROM tbl_info WHERE favID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result); // should see objects wrapped in an array

        // result[0].social = result[0].social.split(",").map(function(item) {
        //     item = item.trim();

        //     return item;
        // });

        // render the home view with dynamic data
        res.json(result);
    })
})

router.get('/photography', (req, res) => {
    //console.log('Dynamic Route');
    //console.log(req.params.id);

    let query = `SELECT * FROM tbl_info WHERE favID="${1}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result); // should see objects wrapped in an array

        // result[0].social = result[0].social.split(",").map(function(item) {
        //     item = item.trim();

        //     return item;
        // });

        // render the home view with dynamic data
        res.json(result);
    })
})

router.get('/music', (req, res) => {
    //console.log('Dynamic Route');
    //console.log(req.params.id);

    let query = `SELECT * FROM tbl_info WHERE favID="${2}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result); // should see objects wrapped in an array

        // result[0].social = result[0].social.split(",").map(function(item) {
        //     item = item.trim();

        //     return item;
        // });

        // render the home view with dynamic data
        res.json(result);
    })
})

router.get('/design', (req, res) => {
    //console.log('Dynamic Route');
    //console.log(req.params.id);

    let query = `SELECT * FROM tbl_info WHERE favID="${3}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result); // should see objects wrapped in an array

        // result[0].social = result[0].social.split(",").map(function(item) {
        //     item = item.trim();

        //     return item;
        // });

        // render the home view with dynamic data
        res.json(result);
    })
})

module.exports = router;