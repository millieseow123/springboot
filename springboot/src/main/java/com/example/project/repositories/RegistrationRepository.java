package com.example.project.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.example.project.models.User;
import static com.example.project.models.Utilities.*;

import static com.example.project.repositories.Queries.*;

import java.util.Optional;

@Repository
public class RegistrationRepository {

    @Autowired
    private JdbcTemplate template;

   public Boolean insertNewUser(User user) {
    int count = template.update(SQL_INSERT_NEW_USER, user.getEmail(),
        user.getPassword(), user.getFirstName(), user.getLastName(), user.getProfilePic());
    System.out.println("2");
        return 1 == count;
   }

   public Optional<User> findUserByEmail(String email) {
    final SqlRowSet rs = template.queryForRowSet(SQL_SELECT_USER_BY_EMAIL, email);
        if (!rs.next())
            return Optional.empty();

        return Optional.of(convert(rs));
   }

}
