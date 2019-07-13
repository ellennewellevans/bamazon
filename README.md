<h1>Description</h1>
This application is a simple command line-based storefront using the npm inquirer package and the MySQL with the npm mysql package.

<h1>MySQL Database Setup</h1>
In order to run this application, you should have the MySQL database already set up on your machine. You will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client to populate the database, then you will be ready to proceed with running the Bamazon customer interface.

<h1>Customer Interface</h1>
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

<h1>To run:</h1>

git clone https://github.com/ellennewellevans/bamazon.git
cd bamazon
npm install
node bamazonCustomer.js
