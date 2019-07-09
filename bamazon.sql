DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("paper", "stationary", 5.00, 10), 
        ("pens", "stationary", 2.00, 20), 
        ("pencils", "stationary", 1.00, 15), 
        ("notebooks", "stationary", 3.00, 17), 
        ("paperclips", "stationary", 1.00, 21),
        ("books", "stationary", 10.00, 18), 
        ("notepads", "stationary", 2.00, 12),
        ("lotions", "toiletries", 6.00, 1),
        ("sanitizers", "toiletries", 3.00, 0),
        ("postits", "stationary", 2.00, 67);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Er123113'