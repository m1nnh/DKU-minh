# by. software 32151671 parkminhyeok

use 학사db;

SELECT
	s.name as student_name, c.name as subject_name, d.name as major_name
FROM
	instructor i, course c, course_taken ct, student s, department d
WHERE 
	i.name = '이장택' and
	i.pid = c.instructor and
    	c.id = ct.cid and
    	ct.sid = s.id and
    	s.major = d.id;