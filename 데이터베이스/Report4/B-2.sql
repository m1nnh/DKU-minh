# by. software 32151671 parkminhyeok

use world;

SELECT
	Country.Name, Country.Population
FROM
	Country
WHERE
	Country.Population = ( SELECT MIN(Population) FROM Country);