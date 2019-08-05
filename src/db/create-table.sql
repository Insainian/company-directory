CREATE TABLE profile (
	username text,
	domain text,
	directory_role text,
	name text,
	title text,
	gender text,
	phone text,
	skills text[],
	PRIMARY KEY (username, domain)
);
