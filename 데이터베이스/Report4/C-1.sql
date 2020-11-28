# by. software 32151671 parkminhyeok

use pubs;

SELECT 
	titles.title
FROM
	titles
WHERE
	pub_id 
IN
    	(
		SELECT 
			publishers.pub_id
		FROM
			publishers
		WHERE
			publishers.pub_name = 'Binnet & Hardley'
	 );
