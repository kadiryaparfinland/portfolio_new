use dogdatabase;

select DB_NAME();




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

SELECT TOP (1000) [number]
      ,[name]
      ,[yearOfBirth]
      ,[length]
      ,[race]
  FROM [dogdatabase].[dbo].[cat]


DELETE From cat WHERE number = 4;

DELETE From cat WHERE number = 2;

DELETE From cat WHERE race = 'Mixed race';

DELETE From cat WHERE length = 35 OR  length = 50;

DELETE From cat WHERE name = 'Viiru' OR  length = 30 OR name = 'Cute';

SELECT TOP (1000) [number]
      ,[name]
      ,[yearOfBirth]
      ,[length]
      ,[race]
  FROM [dogdatabase].[dbo].[cat]