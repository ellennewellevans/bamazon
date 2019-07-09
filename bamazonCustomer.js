var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Er123113",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  });

function readData() {
    console.log("Reading all items for sale...");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
};

readData();

/* function createAuction() {
    inquirer.prompt([
        {
            type: "input",
            message: "What are you selling?",
            name: "items"
        },
        {
            type: "input",
            message: "What is the opening bid price?",
            name: "price"
        },
        {
            type: "input",
            message: "How long is your bid?",
            name: "end_date"
        }
    ]).then(function (response) {

        var query = connection.query(
            "INSERT INTO items SET ?",
            {
                items: response.items,
                price: response.price,
                end_date: response.end_date
            },
            function (err, res) {
                readData();
            }
        );
    });
}

inquirer
    .prompt([
        {
            type: "list",
            choices: ["Seller", "Bidder"],
            message: "Are you a seller or bidder?",
            name: "action"
        }
    ]).then(function (res) {
        var action = res.action;


        if (action === "Bidder") {
            // CREATE A NEW BID
            console.log("I'm a bidder!");
            readData();
        }
        if (action === "Seller") {
            // DISPLAY BIDS
            createAuction();
        }
    });

*/
