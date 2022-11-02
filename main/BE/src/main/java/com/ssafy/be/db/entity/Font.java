package com.ssafy.be.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicUpdate
@Table(name = "t_font")
public class Font {
    /*font_seq bigint PK
font_name varchar(45)
font_path varchar(100)
font_description varchar(45)
font_fav_count bigint
font_deleteYN varchar(1)
font_preview bigint
font_download_file bigint
*/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "font_seq")
    Long fontSeq;
    @Column(name = "font_name")
    String fontName;
    @Column(name= "font_path")
    String fontPath;
    @Column(name = "font_description")
    String fontDescription;
    @Column(name = "font_fav_count")
    long fontFavCount;
    @Column(name = "font_download_count")
    Long fontDownloadCount;
    @Column(name = "font_reg_date")
    LocalDateTime fontRegDate;
    @OneToOne
    @JoinColumn(name = "font_preview",referencedColumnName = "file_seq")
    File fontPreview;
    @OneToOne
    @JoinColumn(name = "font_download_file",referencedColumnName = "file_seq")
    File fontDownloadFile;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "font_creater", referencedColumnName = "user_seq")
    User fontCreater;

    @OneToMany(mappedBy = "font")
    //@JoinColumn(name = "font_seq", referencedColumnName = "font_seq")
    List<UserFont> likeUsers;

    @OneToMany(mappedBy = "downloadFont")
    //@JoinColumn(name = "font_seq", referencedColumnName = "font_seq")
    List <FontDownloadHistory> downloadUsers;

    @PrePersist
    public void createdAt() {
        this.fontRegDate = LocalDateTime.now();
    }

    public void updateFavCount(String flag){
        if("FavRegist".equals(flag)){
            this.fontFavCount+=1;
        }
        else if("FavClear".equals(flag)){
            this.fontFavCount-=1;
        }
    }
}
