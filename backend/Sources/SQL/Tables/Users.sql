-- This is the users table
CREATE TABLE users(
       UserIsd INT,
       FirstName VARCHAR(20) NOT NULL,
       LastName VARCHAR(20) NOT NULL,
       Gender CHAR(1) ,
       DateOfBirth DATE NOT NULL
);
