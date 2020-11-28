# by. software 32151671 parkminhyeok

use world;

SELECT
	country.code, country.name
FROM
	country
WHERE
	code 
NOT IN
    	(
		SELECT
			distinct countryCode
		FROM
			countrylanguage
	 );
