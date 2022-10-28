package com.ssafy.be.db.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Table(name="t_user")
public class User {
    /*
    *user_seq bigint AI PK
    user_email varchar(50)
    user_password varchar(260)
    user_nickname varchar(15)
    user_name varchar(15)
    user_location varchar(10)
    *
 */


    @Id
    @Column(name="user_seq")
    long userSeq;
    @Column(name="user_email")
    String userEmail;
    @Column(name = "user_nickname")
    String userNickname;
    @Column(name = "user_name")
    String userName;
    @Column(name = "user_location")
    String userLocation;
}