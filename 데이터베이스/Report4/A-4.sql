# by. software 32151671 parkminhyeok

use 학사db;

SELECT 
	student.name
FROM 
	student
WHERE
	student.id 
IN
	(
		SELECT
			sid
		FROM 
			course_taken, course
         		WHERE
			course_taken.cid = course.id and
            			course.name = '데이타베이스'
	 ) and
     
	 student.id 
IN
     	(
		 SELECT
			sid
		 FROM
			course_taken, course
		 WHERE
			course_taken.cid = course.id and
            			course.name = '기초전산'
	  );
        
