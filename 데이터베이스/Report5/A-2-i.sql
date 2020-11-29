# By. Dankook University Software 32151671 ParkMinHyeok

use pubs;

SELECT
	titles.title, sales.qty, (titles.price * sales.qty) as total_price, stores.stor_name
FROM
	titles, sales, stores
WHERE
	sales.title_id = titles.title_id and
	stores.stor_id = stores.stor_id and
    	year(sales.ord_date) = 1993;
    