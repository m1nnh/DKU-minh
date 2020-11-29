# By. Dankook University Software 32151671 ParkMinHyeok

use pubs;

SELECT
	titles.title
FROM
	titles, titleauthor
WHERE
	titles.title_id = titleauthor.title_id
GROUP BY
	titleauthor.title_id
HAVING 
	count(au_id) = 1;