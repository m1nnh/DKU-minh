# by. software 32151671 parkminhyeok

use 학사db;

SELECT 
	course.name, course.id
FROM
	course
WHERE
	course.id 
NOT IN
	(
		SELECT
			course_taken.cid
		FROM
			course_taken, course
		WHERE
			course_taken.year_taken =1997 or
            		course_taken.year_taken=1998 and
            		course_taken.cid=course.id
	 );
