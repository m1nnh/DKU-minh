# by. software 32151671 parkminhyeok

use world;

SELECT 
	distinct world.countrylanguage.Language
FROM
	world.country
LEFT JOIN
	world.countrylanguage
ON
	world.country.Code = world.countrylanguage.CountryCode
WHERE
	world.country.Region = "Caribbean";