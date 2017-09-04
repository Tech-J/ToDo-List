DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks(
id SERIAL PRIMARY KEY,
task VARCHAR(255) NOT NULL
);

INSERT INTO tasks(task)
VALUES
('Pick Up Laundry'),
('Finish HW'),
('Do The Bonus');
