package com.example.project.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.project.models.Response;
import com.example.project.models.User;
import com.example.project.services.RegistrationService;
import com.example.project.services.UserException;

import jakarta.json.Json;
import jakarta.json.JsonObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path = "/register")
public class RegistrationRestController {


    @Autowired
    private RegistrationService registrationSvc;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> newUser(@RequestPart String email, 
    @RequestPart String password, @RequestPart String firstName, 
    @RequestPart String lastName) throws UserException {
        System.out.println("TESTING");
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setFirstName(firstName);
        user.setLastName(lastName);

        // if(profilePicture.getOriginalFilename().isEmpty()){
        //     user.setProfilePic("/assets/images/icon-calendar.png");
        // }
        // else {
        //     String imgUrl = registrationSvc.uploadToS3(user, profilePicture);
        //     user.setProfilePic(imgUrl);
        // }

        Response resp;

        try {
            registrationSvc.addNewUser(user);
        } catch (Exception e) {
            JsonObject result = Json.createObjectBuilder()
                .add("error", "Bad request")
                .build();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.toString());
        }
        
        resp = new Response();
        resp.setCode(201);
        resp.setMessage("OK");
        resp.setData(user.toJson().toString());
        return ResponseEntity.status(HttpStatus.CREATED).body(resp.toJson().toString());
            
    }
}
