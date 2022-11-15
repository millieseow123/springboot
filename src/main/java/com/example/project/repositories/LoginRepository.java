package com.example.project.repositories;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.example.project.models.UserLogin;
import static com.example.project.repositories.Queries.*;

@Repository
public class LoginRepository {

    @Autowired
    private JdbcTemplate template;

    public Optional<UserLogin> findUserByEmailAndPassword(String username, String password) {
        SqlRowSet rs = template.queryForRowSet(SQL_SELECT_USER_BY_EMAIL_AND_PASSWORD, username, password);
        if (rs.next())
            return Optional.of(UserLogin.create(rs));
        return Optional.empty();
    }
       
}
