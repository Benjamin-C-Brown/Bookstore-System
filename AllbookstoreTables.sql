CREATE DATABASE book_store;
USE `book_store`;
DROP TABLE IF EXISTS `account_status`;

CREATE TABLE `account_status` (
  `Account_Status_Id` int NOT NULL,
  `Account_Status` varchar(20) NOT NULL,
  PRIMARY KEY (`Account_Status_Id`)
);

DROP TABLE IF EXISTS `account_type`;

CREATE TABLE `account_type` (
  `Account_Type_Id` int NOT NULL,
  `Account_Type` varchar(20) NOT NULL,
  PRIMARY KEY (`Account_Type_Id`)
);

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `BookID` int NOT NULL AUTO_INCREMENT,
  `ISBN` varchar(20)  ,
  `Title` varchar(200)  ,
  `Author` varchar(100)  ,
  `Genre` varchar(50)  ,
  `B_Price` decimal(10,2) DEFAULT NULL,
  `S_Price` decimal(10,2) DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `Description` text  ,
  `image_data` longblob,
  PRIMARY KEY (`BookID`)
);

DROP TABLE IF EXISTS `books_featured_topsellers`;

CREATE TABLE `books_featured_topsellers` (
  `BookID` int NOT NULL,
  `is_featured` int DEFAULT NULL,
  `is_topSeller` int DEFAULT NULL,
  PRIMARY KEY (`BookID`),
  CONSTRAINT `books_featured_topsellers_1` FOREIGN KEY (`BookID`) REFERENCES `books` (`BookID`)
) ;


DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `last_name` varchar(255) ,
  `first_name` varchar(255) ,
  `password` varchar(255)  NOT NULL,
  `email` varchar(255)  NOT NULL,
  `Account_Status_Id` int DEFAULT NULL,
  `Account_Type_Id` int DEFAULT NULL,
  `Sub_Promotions` int NOT NULL,
  `Mobile_Number` varchar(10) ,
  `id` int NOT NULL,
  `subscribe_to_promo` bit(1) NOT NULL,
  `user_name` varchar(255) ,
  PRIMARY KEY (`UserID`),
  KEY `fk_account_status` (`Account_Status_Id`),
  KEY `fk_account_type` (`Account_Type_Id`),
  CONSTRAINT `fk_account_status` FOREIGN KEY (`Account_Status_Id`) REFERENCES `account_status` (`Account_Status_Id`),
  CONSTRAINT `fk_account_type` FOREIGN KEY (`Account_Type_Id`) REFERENCES `account_type` (`Account_Type_Id`)
) ;

DROP TABLE IF EXISTS `payment_cards`;

CREATE TABLE `payment_cards` (
  `PaymentID` int NOT NULL AUTO_INCREMENT,
  `Card_Number` varchar(16)  ,
  `Expiry_Date` varchar(7)  ,
  `Card_Holder` varchar(100)  ,
  `Card_Type` varchar(20)  ,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`PaymentID`),
  KEY `paymentcards_1` (`UserID`),
  CONSTRAINT `paymentcards_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`)
) ;

DROP TABLE IF EXISTS `promotions`;

CREATE TABLE `promotions` (
  `Promo_Code` varchar(100)   NOT NULL,
  `Start_Date` date DEFAULT NULL,
  `Expiry_Date` date DEFAULT NULL,
  `Percentage` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`Promo_Code`)
) ;

DROP TABLE IF EXISTS `shipping_address`;

CREATE TABLE `shipping_address` (
  `AddressID` int NOT NULL AUTO_INCREMENT,
  `Street` varchar(200)  ,
  `City` varchar(100)  ,
  `State` varchar(100)  ,
  `Zip_Code` varchar(20)  ,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`AddressID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `shippingaddress_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`)
) ;

DROP TABLE IF EXISTS `shopping_cart`;

CREATE TABLE `shopping_cart` (
  `CartID` int NOT NULL AUTO_INCREMENT,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`CartID`),
  KEY `shoppingcart_1` (`UserID`),
  CONSTRAINT `shoppingcart_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`)
) ;

DROP TABLE IF EXISTS `cart_books`;

CREATE TABLE `cart_books` (
  `Cart_Book_ID` int NOT NULL AUTO_INCREMENT,
  `CartID` int NOT NULL,
  `BookID` int NOT NULL,
  `Quantity` int DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Cart_Book_ID`),
  KEY `fk_book` (`BookID`),
  KEY `fk_cart` (`CartID`),
  CONSTRAINT `fk_book` FOREIGN KEY (`BookID`) REFERENCES `books` (`BookID`),
  CONSTRAINT `fk_cart` FOREIGN KEY (`CartID`) REFERENCES `shopping_cart` (`CartID`)
) ;



DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `UserID` int DEFAULT NULL,
  `Order_Date` datetime DEFAULT NULL,
  `Total_Amount` decimal(10,2) DEFAULT NULL,
  `AddressID` int DEFAULT NULL,
  `PaymentID` int DEFAULT NULL,
  `Order_Status` varchar(50)  ,
  `Confirmation_Email_Sent` tinyint DEFAULT NULL,
  `Confirmation_Number` int NOT NULL,
  `Promo_Code` varchar(50) ,
  PRIMARY KEY (`OrderID`),
  KEY `orders_1` (`UserID`),
  KEY `orders_2` (`AddressID`),
  KEY `orders_3` (`PaymentID`),
  KEY `fk_promo_Code` (`Promo_Code`),
  CONSTRAINT `fk_promo_Code` FOREIGN KEY (`Promo_Code`) REFERENCES `promotions` (`Promo_Code`),
  CONSTRAINT `orders_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  CONSTRAINT `orders_2` FOREIGN KEY (`AddressID`) REFERENCES `shipping_address` (`AddressID`),
  CONSTRAINT `orders_3` FOREIGN KEY (`PaymentID`) REFERENCES `payment_cards` (`PaymentID`)
) ;


DROP TABLE IF EXISTS `orderitems`;

CREATE TABLE `orderitems` (
  `Order_Item_ID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int DEFAULT NULL,
  `BookID` int DEFAULT NULL,
  `Quantity` int NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`Order_Item_ID`),
  KEY `OrderID` (`OrderID`),
  KEY `BookID` (`BookID`),
  CONSTRAINT `orderitems_1` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`),
  CONSTRAINT `orderitems_2` FOREIGN KEY (`BookID`) REFERENCES `books` (`BookID`)
) ;
