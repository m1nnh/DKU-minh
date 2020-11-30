# By. Dankook University Software 32151671 ParkMinHyeok
SET SQL_SAFE_UPDATES=0;

USE 학사db;

UPDATE student SET advisor = NULL;

SELECT * FROM student;

UPDATE student t
SET    t.Advisor =  (SELECT  i.PID FROM instructor i WHERE t.major = i.dept 
                   ORDER BY RAND() limit 1)
WHERE  t.Major IS NOT NULL;

SELECT * FROM student;
SELECT * FROM instructor;





