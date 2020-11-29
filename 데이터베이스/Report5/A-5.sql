# By. Dankook University Software 32151671 ParkMinHyeok

use pubs;

SELECT
	concat(authors.au_fname, authors.au_lname) as '저자', count(*) as '책의 수'
FROM
	authors
JOIN
	titleauthor
ON
	titleauthor.au_id = authors.au_id
GROUP BY
	authors.au_id
HAVING
	count(*) = (SELECT
					max(t.NUM)
				FROM
					(SELECT
						count(*) as num
					 FROM
						titleauthor
					 GROUP BY
						au_id) t);
				