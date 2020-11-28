# by. software 32151671 parkminhyeok

use 학사db;

SELECT
	s.name, c.name,  grade
FROM
	student as s
JOIN
	course_taken as ct
ON
	sid = ct.sid
JOIN 
	course as c
ON
	cid = c.id;