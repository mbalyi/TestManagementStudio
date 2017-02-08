USE MASTER    
GO    
--1) Check for the Database Exists.If the database is exist then drop and create new DB    
IF EXISTS(SELECT[name] FROM sys.databases WHERE[name] = 'TMSDB')    
DROP DATABASE TMSDB    
GO    
CREATE DATABASE TMSDB    
GO    
USE TMSDB    
GO    
--1) //////////// Users    
IF EXISTS(SELECT[name] FROM sys.tables WHERE[name] = 'Users')    
DROP TABLE Users    
GO    
CREATE TABLE[dbo].Users(    
        [UserId] INT IDENTITY PRIMARY KEY, 
		[Nickname][varchar](100) NOT NULL, 
		[Firstname][varchar](100) NOT NULL,
		[Lastname][varchar](100) NOT NULL,
		[Email][varchar](100) NOT NULL, 
		[Phone][varchar](20) NOT NULL, 
		[Address][varchar](200) NOT NULL    
    )    
    --insert sample data to User Master table    
INSERT INTO Users([Nickname], [Firstname], [Lastname], [Email], [Phone], [Address])    
VALUES('mbalyi', 'Mark', 'Balyi', 'balyi.mark@hotmail.com', '0000000', 'Budapest,Hungary')    
INSERT INTO Users([Nickname], [Firstname], [Lastname], [Email], [Phone], [Address])    
VALUES('admin', 'admin', 'admin', 'admin@tms.com', '0000000', 'Budapest,Hungary')
INSERT INTO Users([Nickname], [Firstname], [Lastname], [Email], [Phone], [Address])    
VALUES('manager', 'manager', 'manager', 'manager@tms.com', '0000000', 'Budapest,Hungary')        
select * from Users  