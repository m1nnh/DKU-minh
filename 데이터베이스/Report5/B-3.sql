# By. Dankook University Software 32151671 ParkMinHyeok

use classicmodels;

SELECT
	concat(employees.firstName, ' ', employees.lastName) as '직원이름',
    (SELECT
		sum(orderDetails.quantityOrdered * orderDetails.priceEach)
	 FROM
		orderDetails
	 WHERE
		orderDetails.orderNumber = orders.orderNumber) as '주문금액',
		orders.orderDate as '주문날짜',
        customers.customerName as '고객회사'
FROM
	(orders
     	JOIN
		customers
	 ON
		orders.customerNumber = customers.customerNumber)
JOIN
	employees
ON
	customers.salesRepEmployeeNumber = employees.employeeNumber
WHERE
	orders.orderNumber = (SELECT
									orderDetails.orderNumber
								FROM
									orderDetails
								GROUP BY
									orderDetails.orderNumber
								ORDER BY
									sum(orderDetails.quantityOrdered * orderDetails.priceEach) desc limit 1);