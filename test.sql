-- select id, age and gender fields from table persons
SELECT id, age, gender FROM persons;
-- select all from table persons
SELECT * FROM persons;

SELECT * FROM persons WHERE age=17;

SELECT * FROM persons WHERE gender='Female';

SELECT * FROM persons WHERE gender!='Female';

SELECT * FROM persons WHERE NOT gender!='Female';

SELECT * FROM persons WHERE age=17 AND gender='Female';

SELECT * FROM persons WHERE age=17 OR gender='Female';

SELECT * FROM persons WHERE age>30 AND age<40;

SELECT * FROM persons WHERE age IN (32, 18, 17, 22);

SELECT * FROM persons WHERE first_name='Ilise';

SELECT * FROM persons WHERE first_name LIKE 'A%';

SELECT * FROM persons WHERE first_name LIKE '%a';

SELECT * FROM persons WHERE first_name LIKE '%x%';

SELECT * FROM persons LIMIT 10;

SELECT * FROM persons LIMIT 10 OFFSET 20;

SELECT * FROM persons ORDER BY age;

SELECT * FROM persons ORDER BY age DESC;

SELECT * FROM persons ORDER BY age DESC, gender, first_name;

SELECT MIN(age) FROM  persons;

SELECT MIN(age),MAX(age) FROM  persons;

SELECT AVG(age) FROM  persons;

SELECT SUM(age) FROM  persons;

SELECT COUNT(*) FROM  persons;

SELECT MIN(age), MAX(age), AVG(age), SUM(age), COUNT(*)
FROM  persons
WHERE gender='Female';

SELECT MIN(age), MAX(age), AVG(age), SUM(age), COUNT(*)
FROM  persons
WHERE gender NOT IN ('Female', 'Male');

SELECT DISTINCT gender FROM persons;

SELECT DISTINCT country FROM persons;

