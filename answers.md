1. Explain the difference between RDBMS and SQL.

An RDBMS is a Relational Database Management System. It is the database software itself,
while SQL is the language that you use to interact with the system

2. Why do tables need a primary key?

It ensures row-level accessibility.  Each primary key is unique so that you are able to query
every individual row.  If they weren't unique, then you would have no way of querying individual rows.

3. What is the name given to a table column that references the primary key on another table.

Foreign Key

4. What do we need in order to have a many to many relationship between two tables.

A third table with a foreign key of each of the other individual tablees.