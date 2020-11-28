# by. software 32151671 parkminhyeok

use world;

SELECT
	ac.Name, ac.ID, bc.ID
FROM
	city ac, city bc
WHERE
	ac.ID <> bc.ID and
   	ac.Name = bc.Name
ORDER BY
	1,2,3 desc;
