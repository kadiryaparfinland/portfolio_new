

CREATE DATABASE catdatabase;

use catdatabase;

select DB_NAME();

CREATE TABLE cat
(
    number INT NOT NULL PRIMARY KEY,
    name [VARCHAR](16),
    yearOfBirth INT,
    length INT,
    race [VARCHAR](22),
);
GO


CREATE LOGIN saara@localhost WITH PASSWORD = 'L1ihAdIY';


CREATE USER saara@localhost FOR LOGIN saara@localhost;


INSERT INTO cat
(number, name, yearOfBirth, length, race)
VALUES
(5, 'A parcel', 2017, 30, 'couch spinner'),
(3, 'Scarecrow II', 1990, 32, 'Mixed race')

GO



INSERT INTO cat
(number, name, yearOfBirth, length, race)
VALUES
(4, 'Plösö', 2011, 33, 'corly tail'),
(1, 'Hair loss', 1995, 50, 'gigantus'),
(6, 'Cute', 2018, 40, 'house cat'),
(2, 'Streak', 2010, 42, 'alley boy'),
(7, 'Spinner', 2005, 35, 'silk coat')

GO


SELECT TOP (10) [number]
      ,[name]
      ,[yearOfBirth]
      ,[length]
      ,[race]
  FROM [catdatabase].[dbo].[cat]


SELECT TOP (10) [name]
      ,[yearOfBirth]
      ,[length]
  FROM [catdatabase].[dbo].[cat]


 SELECT number, name, yearOfBirth, length, race
FROM [catdatabase].[dbo].[cat]
WHERE yearOfBirth = 2018;


SELECT number, name, yearOfBirth, length, race
FROM [catdatabase].[dbo].[cat]
WHERE length = 35;


SELECT number, name, yearOfBirth, length, race
FROM [catdatabase].[dbo].[cat]
WHERE yearOfBirth = 1990;


UPDATE cat
SET yearOfBirth = 2015, race= 'fluffy tail'
WHERE number = 7;


UPDATE cat
SET name = 'Plösö', race= 'gigantus'
WHERE number = 5;


UPDATE cat
SET yearOfBirth = 2018, race= 'Kujakolki', name= 'Kolli'
WHERE number = 7;


UPDATE cat
SET yearOfBirth = 2012, length= 33, name= 'Plösö'
WHERE number = 5;


DELETE From cat WHERE number = 4;

DELETE From cat WHERE number = 2;

DELETE From cat WHERE race = 'Mixed race';

DELETE From cat WHERE length = 35 OR  length = 50;

DELETE From cat WHERE name = 'Viiru' OR  length = 30 OR name = 'Cute';



CREATE TABLE Pokemon (
    Id INT NOT NULL PRIMARY KEY,
    Name [VARCHAR] (255),
    BirthDate DATE
);


SET DATEFORMAT dmy;

INSERT INTO Pokemon
(Id, Name, BirthDate)
VALUES
(1, 'Pikachu', '22.12.2022'),
(2, 'Balbazar', '22.12.2022'),
(3, 'Pikachu', '22.12.2022'),
(4, 'Pikachu', '22.12.2022');