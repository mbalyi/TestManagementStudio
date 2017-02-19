USE MASTER    
GO  
USE TMSDB    
GO
--1) Create Subject table
IF EXISTS(SELECT[name] FROM sys.tables WHERE[name] = 'Subjects')    
DROP TABLE Subjects    
GO

CREATE TABLE[dbo].Subjects(
		[SubjectId] INT IDENTITY PRIMARY KEY, 
		[Title][text] NOT NULL, 
		[Description][text] NOT NULL, 
		[ModifiedDate][datetime] NOT NULL,
		[IsDeleted][bit] NOT NULL,
		[OwnerId] INT FOREIGN KEY REFERENCES Users(UserId)
	)

INSERT INTO Subjects([Title], [Description], [ModifiedDate], [IsDeleted], [OwnerId])    
VALUES('Basics of Web development', 'Short description of the subject. Including the necessary information for the users', '2017-02-19 18:00:00', 0, (SELECT UserId FROM Users WHERE Nickname LIKE 'manager'))
INSERT INTO Subjects([Title], [Description], [ModifiedDate], [IsDeleted], [OwnerId])    
VALUES('ASP.NET Core Course', 'Short description of the subject. Including the necessary information for the users', '2017-02-19 19:00:00', 0, (SELECT UserId FROM Users WHERE Nickname LIKE 'manager'))

--1) Create TestSet table
IF EXISTS(SELECT[name] FROM sys.tables WHERE[name] = 'TestSets')    
DROP TABLE TestSets
GO

CREATE TABLE[dbo].TestSets(
		[TestSetId] INT IDENTITY PRIMARY KEY, 
		[Title][text] NOT NULL, 
		[Comment][text] NOT NULL, 
		[CreatedDate][datetime] NOT NULL,
		[ModifiedDate][datetime] NOT NULL,
		[IsDeleted][bit] NOT NULL,
		[IsArchived][bit] NOT NULL,
		[IsUpdated][bit] NOT NULL,
		[UpdatedTo][int] NULL,
		[Interval][int] NOT NULL,
		[CreatedBy] INT FOREIGN KEY REFERENCES Users(UserId),
		[SubjectId] INT FOREIGN KEY REFERENCES Subjects(SubjectId)
	)

--1) Create TestSet table
IF EXISTS(SELECT[name] FROM sys.tables WHERE[name] = 'Levels')    
DROP TABLE Levels    
GO

CREATE TABLE[dbo].Levels(
		[LevelId] INT IDENTITY PRIMARY KEY, 
		[Title][text] NOT NULL, 
		[EstimatedDuration][int] NULL
	)

INSERT INTO Levels([Title], [EstimatedDuration])    
VALUES('Easy', 60)
INSERT INTO Levels([Title], [EstimatedDuration])    
VALUES('Medium', 300)
INSERT INTO Levels([Title], [EstimatedDuration])    
VALUES('Hard', 600)
INSERT INTO Levels([Title], [EstimatedDuration])    
VALUES('Advanced', 1800)

--1) Create TestCase table
IF EXISTS(SELECT[name] FROM sys.tables WHERE[name] = 'TestCases')    
DROP TABLE TestCases    
GO

CREATE TABLE[dbo].TestCases(
		[TestCaseId] INT IDENTITY PRIMARY KEY, 
		[Question][text] NOT NULL, 
		[CreatedDate][datetime] NOT NULL,
		[ModifiedDate][datetime] NOT NULL,
		[IsDeleted][bit] NOT NULL,
		[IsArchived][bit] NOT NULL,
		[IsUpdated][bit] NOT NULL,
		[UpdatedTo][int] NULL,
		[Interval][int] NOT NULL,
		[CreatedBy] INT FOREIGN KEY REFERENCES Users(UserId),
		[SubjectId] INT FOREIGN KEY REFERENCES Subjects(SubjectId),
		[LevelId] INT FOREIGN KEY REFERENCES Levels(LevelId)
	)

INSERT INTO TestCases([Question], [CreatedDate], [ModifiedDate], [IsDeleted], [IsArchived], [IsUpdated], [Interval], [CreatedBy], [SubjectId], [LevelId])    
VALUES('Which is not a DOM element?', '2017-02-19 18:01:00', '2017-02-19 18:01:00', 0, 0, 0, 60, 
	(SELECT UserId FROM Users WHERE Nickname LIKE 'manager'), 
	(SELECT SubjectId FROM Subjects WHERE Title LIKE 'Basics of Web development'),
	(SELECT LevelId FROM Levels WHERE Title LIKE 'Easy'))
INSERT INTO TestCases([Question], [CreatedDate], [ModifiedDate], [IsDeleted], [IsArchived], [IsUpdated], [Interval], [CreatedBy], [SubjectId], [LevelId])    
VALUES('Another Question?', '2017-02-19 18:01:00', '2017-02-19 18:01:00', 0, 0, 0, 600, 
	(SELECT UserId FROM Users WHERE Nickname LIKE 'manager'), 
	(SELECT SubjectId FROM Subjects WHERE Title LIKE 'Basics of Web development'),
	(SELECT LevelId FROM Levels WHERE Title LIKE 'Hard'))
INSERT INTO TestCases([Question], [CreatedDate], [ModifiedDate], [IsDeleted], [IsArchived], [IsUpdated], [Interval], [CreatedBy], [SubjectId], [LevelId])    
VALUES('Have you ever used Angular2?', '2017-02-19 18:01:00', '2017-02-19 18:01:00', 0, 0, 0, 60, 
	(SELECT UserId FROM Users WHERE Nickname LIKE 'manager'), 
	(SELECT SubjectId FROM Subjects WHERE Title LIKE 'Basics of Web development'),
	(SELECT LevelId FROM Levels WHERE Title LIKE 'Easy'))

--1) Create Answer table
IF EXISTS(SELECT[name] FROM sys.tables WHERE[name] = 'Answers')    
DROP TABLE Answers    
GO

CREATE TABLE[dbo].Answers(
		[AnswerId] INT IDENTITY PRIMARY KEY, 
		[Answer][text] NOT NULL,
		[IsDefault][bit] NOT NULL,
		[TestCaseId] INT FOREIGN KEY REFERENCES TestCases(TestCaseId)
	)

INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('Anchor link object.', 0, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Which is not a DOM element?'))
INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('JSON object.', 0, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Which is not a DOM element?'))
INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('Both of them.', 0, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Which is not a DOM element?'))
INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('Neither of them.', 1, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Which is not a DOM element?'))

INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('First Answer', 0, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Another Question?'))
INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('Default Answer.', 1, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Another Question?'))

INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('Yeah, sure, its part of my life.', 0, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Have you ever used Angular2?'))
INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('Never.', 0, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Have you ever used Angular2?'))
INSERT INTO Answers([Answer], [IsDefault], [TestCaseId])    
VALUES('O dont know. You dont have a better question?', 1, (SELECT TestCaseId FROM TestCases WHERE Question LIKE 'Have you ever used Angular2?'))