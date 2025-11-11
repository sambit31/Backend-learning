\! cls = clear

\d = describe table

\list or \l = list [Query:SELECT *(all) FROM table_name] [Query:SELECT datname(database_name) FROM pg_database]

create database database_name; = [create a new database]

\c database_name = change connection to a database

drop database database_name; = [delete a database]


//crud

create table table_name (column1 datatype, column2 datatype, ...); = [create a new table]

select * from table_name; = [retrieve all records from a table]

insert into table_name (column1, column2) values (value1, value2); = [insert a new record into a table]

update table_name set column1 = value1, column2 = value2 where condition; = [update existing records in a table]

delete from table_name where condition; = [delete records from a table]