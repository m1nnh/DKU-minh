# by. software 32151671 parkminhyeok

use 학사db;

SELECT
	student.name
FROM
	student
WHERE 
	student.id
NOT IN
	(
		SELECT
			ct.sid
		FROM
			instructor i, course c, course_taken ct
		WHERE
			i.dept = 'ss' and c.instructor = i.pid and ct.cid = c.id
	);
