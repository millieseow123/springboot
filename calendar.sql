drop schema if exists schedule;
create schema schedule;
use schedule;

create table user (
	email varchar(64) not null,
	password varchar(128) not null,
	firstName varchar(128),
	lastName varchar(128),
	profilePic mediumblob,

	primary key(email)
);

create table schedule (
	email varchar(64) not null,
	schedule_id int auto_increment,
	date date not null,
	title text,
	time varchar(128),
	
	primary key(schedule_id),
	constraint fk_email foreign key(email) references user(email)
);
