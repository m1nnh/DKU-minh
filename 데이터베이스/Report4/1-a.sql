# by. software 32151671 parkminhyeok

use 학사db;

SELECT
	student.name, ct.cid, ct.grade
FROM
	student, course_taken
JOIN
	course_taken as ct
ON
	ct.sid = ct.sid;