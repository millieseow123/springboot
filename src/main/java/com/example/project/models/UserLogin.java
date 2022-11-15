package com.example.project.models;

import org.springframework.jdbc.support.rowset.SqlRowSet;

public class UserLogin {
    private String email;
    private String password;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public static UserLogin create(SqlRowSet rs) {
        UserLogin user = new UserLogin();
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("password"));
        return user;
    }
    
}
