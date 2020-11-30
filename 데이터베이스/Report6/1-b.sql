# By. Dankook University Software 32151671 ParkMinHyeok
SET SQL_SAFE_UPDATES=0;

USE 학사db;

UPDATE student SET gpa=( 
   SELECT AVG(grade) FROM course_taken WHERE id=sid GROUP BY sid 
    ) ;

SELECT * FROM student;





