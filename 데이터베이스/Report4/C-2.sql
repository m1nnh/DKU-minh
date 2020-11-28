# by. software 32151671 parkminhyeok

use pubs;

SELECT 
	concat(employee.fname, ' ', employee.lname) as Name, jobs.job_desc
FROM
	employee
LEFT OUTER JOIN
	jobs
ON 
	employee.job_id = jobs.job_id
WHERE
	(
		year(employee.hire_date) = 1990 or
        		year(employee.hire_date) = 1991
	 );
