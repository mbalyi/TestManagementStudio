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

CREATE TABLE[dbo].Roles(
		[RoleId] INT IDENTITY PRIMARY KEY, 
		[Name][text] NOT NULL, 
		[IsFullAccess][bit] NOT NULL, 
		[IsManager][bit] NOT NULL,
		[IsEditor][bit] NOT NULL,
		[IsUser][bit] NOT NULL
	)

INSERT INTO Roles([Name], [IsFullAccess], [IsManager], [IsEditor], [IsUser])    
VALUES('Administrator', 1, 0, 0, 0)
INSERT INTO Roles([Name], [IsFullAccess], [IsManager], [IsEditor], [IsUser])    
VALUES('Manager', 0, 1, 0, 0)
INSERT INTO Roles([Name], [IsFullAccess], [IsManager], [IsEditor], [IsUser])    
VALUES('Editor', 0, 0, 1, 0)
INSERT INTO Roles([Name], [IsFullAccess], [IsManager], [IsEditor], [IsUser])    
VALUES('User', 0, 0, 0, 1)   
    
CREATE TABLE[dbo].Users(    
        [UserId] INT IDENTITY PRIMARY KEY, 
		[Nickname][text] NOT NULL, 
		[Password][text] NOT NULL, 
		[Firstname][text] NOT NULL,
		[Lastname][text] NOT NULL,
		[Email][text] NOT NULL, 
		[Phone][text] NOT NULL, 
		[Address][text] NOT NULL,
		[RoleId] INT FOREIGN KEY REFERENCES Roles(RoleId)     
    )    
   
INSERT INTO Users([Nickname], [Password], [Firstname], [Lastname], [Email], [Phone], [Address], [RoleId])    
VALUES('admin', 'admin', 'admin', 'admin', 'admin@tms.com', '0000000', 'Budapest,Hungary', (SELECT RoleId FROM Roles WHERE Name LIKE 'Administrator'))
INSERT INTO Users([Nickname], [Password], [Firstname], [Lastname], [Email], [Phone], [Address], [RoleId])    
VALUES('manager', 'manager', 'manager', 'manager', 'manager@tms.com', '0000000', 'Budapest,Hungary', (SELECT RoleId FROM Roles WHERE Name LIKE 'Manager'))
INSERT INTO Users([Nickname], [Password], [Firstname], [Lastname], [Email], [Phone], [Address], [RoleId])    
VALUES('editor', 'editor', 'editor', 'editor', 'editor@tms.com', '0000000', 'Budapest,Hungary', (SELECT RoleId FROM Roles WHERE Name LIKE 'Editor'))
INSERT INTO Users([Nickname], [Password], [Firstname], [Lastname], [Email], [Phone], [Address], [RoleId])    
VALUES('user', 'user', 'user', 'user', 'user@tms.com', '0000000', 'Budapest,Hungary', (SELECT RoleId FROM Roles WHERE Name LIKE 'User'))      
select * from Users  