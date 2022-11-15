package com.example.project.models;


import org.springframework.jdbc.support.rowset.SqlRowSet;

public class Utilities {
    
    public static User convert(SqlRowSet rs) {
        User user = new User();
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("password"));
        user.setFirstName(rs.getString("firstName"));
        user.setLastName(rs.getString("lastName"));
        return user;
    }

}
