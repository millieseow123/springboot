package com.example.project.models;


import jakarta.json.Json;
import jakarta.json.JsonObject;

public class User {
    
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String profilePic;

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

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("email", email)
            .add("password", password)
            .add("firstName", firstName)
            .add("lastName", lastName)
            .build();
    }
}
