# By. Dankook University Software 32151671 ParkMinHyeok

use classicmodels;

SELECT
	customers.customername as '회사명', count(orders.ordernumber) as '주문 횟수', avg(p.average), max(p.price) as '최대 주문 금액'
FROM
	customers, orders, (SELECT
				ordernumber, avg(priceeach * quantityordered) as average, max(priceeach * quantityordered) as price
			 FROM
				orderdetails
		 	 GROUP BY
				ordernumber) as p
WHERE
	customers.customerNumber = orders.customerNumber and
   	orders.orderNumber = p.ordernumber
GROUP BY
	customers.customerName;