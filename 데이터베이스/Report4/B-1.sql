# by. software 32151671 parkminhyeok

use world;
    
SELECT
	count(*) as NumberOfCityInChina
FROM 
	city
JOIN 
	country
on
	city.CountryCode = country.Code
WHERE
	country.Name = 'China';
