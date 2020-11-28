# by. software 32151671 parkminhyeok

use classicmodels;

SELECT
	Products.productName
FROM
	OrderDetails
JOIN
	Products
ON
	OrderDetails.ProductCode = Products.ProductCode
WHERE
	OrderDetails.OrderNumber = 10100;
	

