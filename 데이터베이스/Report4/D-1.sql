# by. software 32151671 parkminhyeok

use classicmodels;

SELECT
	orders.orderNumber, customers.customerName, employees.lastName EmployeeName,
    	orders.orderDate, orders.comments
FROM
	orders
JOIN 
	customers
ON
	orders.customerNumber = customers.customerNumber
LEFT OUTER JOIN
	employees
ON
	customers.salesRepEmployeeNumber = employees.employeeNumber
WHERE
	status = 'Cancelled';
