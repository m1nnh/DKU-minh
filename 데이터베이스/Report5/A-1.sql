# By. Dankook University Software 32151671 ParkMinHyeok

use pubs;

SELECT
	publishers.pub_name, count(*) as 'employee number'
FROM
	publishers, employee
WHERE
	publishers.pub_id = employee.pub_id
GROUP BY
	publishers.pub_name
ORDER BY 
	count(*) desc;