package com.example.project.repositories;

public interface Queries {
    
    public static final String SQL_INSERT_NEW_USER = "insert into user(username, email, password, firstName, lastName, profilePicture) values (?, ?, sha1(?), ?, ?, ?)";
    public static final String SQL_SELECT_USER_BY_EMAIL = "select * from user where email = ?";
    public static final String SQL_SELECT_USER_BY_EMAIL_AND_PASSWORD = "select * from user where username = ? AND password = ?";

}
