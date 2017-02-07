CREATE DATABASE [TMS];
GO

USE [TMS];
GO

CREATE TABLE [Users] (
    [UserId] int NOT NULL IDENTITY,
    [Username] nvarchar(max) NOT NULL,
	[Password] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([UserId])
);
GO

INSERT INTO [Users] (Username,Password) VALUES
('administrator','administrator'),
('mbalyi','mbalyi')
GO