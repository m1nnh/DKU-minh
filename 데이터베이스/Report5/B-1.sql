# By. Dankook University Software 32151671 ParkMinHyeok

use classicmodels;

SELECT
	month(orders.orderDate) as '월', count(orders.orderNumber) as '판매량'
FROM
	orders
WHERE
	year(orderDate) = 2004
GROUP BY
	month(orderDate);