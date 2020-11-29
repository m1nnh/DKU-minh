# By. Dankook University Software 32151671 ParkMinHyeok

use pubs;

SELECT
	titles.title
FROM
	titles
WHERE
	titles.title_id 
NOT IN
	(SELECT
		sales.title_id
	 FROM
		sales
	 WHERE
		year(sales.ord_date) = 1993 );