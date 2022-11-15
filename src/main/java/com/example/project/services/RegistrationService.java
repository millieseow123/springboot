package com.example.project.services;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.example.project.models.User;
import com.example.project.repositories.RegistrationRepository;

@Service
public class RegistrationService {

    @Autowired
    AmazonS3 s3;
    
    @Autowired
    RegistrationRepository registrationRepo;

    public Boolean addNewUser(User user) throws UserException {
        try {
            return registrationRepo.insertNewUser(user);
        } catch (Exception e) {
            return false;
        }
}

public String uploadToS3(User user, MultipartFile profilePic) {
    Map<String, String> myData = new HashMap<>();
    myData.put("email", user.getEmail());
    myData.put("createdOn", (new Date().toString()));

    ObjectMetadata metadata = new ObjectMetadata();
    metadata.setContentType(profilePic.getContentType());
    metadata.setContentLength(profilePic.getSize());
    metadata.setUserMetadata(myData);

    String hash = UUID.randomUUID().toString().substring(0, 8);

    try {
        PutObjectRequest putReq = new PutObjectRequest("schedulo", "post/%s".formatted(hash), 
        profilePic.getInputStream(), metadata);
        putReq = putReq.withCannedAcl(CannedAccessControlList.PublicRead);
        PutObjectResult result = s3.putObject(putReq);
        System.out.printf("result s3 ", result);
    } catch (Exception e) {
        e.printStackTrace();
    }

    String imgURL = s3.getUrl("schedulo", "post/%s".formatted(hash)).toString();

    return imgURL;
}

}
