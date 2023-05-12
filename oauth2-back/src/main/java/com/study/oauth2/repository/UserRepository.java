package com.study.oauth2.repository;

import org.apache.ibatis.annotations.Mapper;

import com.study.oauth2.entity.Authority;
import com.study.oauth2.entity.User;

@Mapper
public interface UserRepository {

//	public int addAuthorities(List<Authority> authorities);
	// User 이메일 조회
	public User findUserByEmail(String email);
	// 회원가입
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
	public int updateProvider(User user);
}
