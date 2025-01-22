package com.example.demo.repository;

import com.example.demo.domain.Member;
import com.example.demo.domain.MemoryMemberRepository;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class MemoryMemberRepositoryTest {

    MemberRepository memberRepository = new MemoryMemberRepository();

    @Test
    public void save() {
        Member member = new Member();
        member.setName("spring");

        memberRepository.save(member);

        Member result = memberRepository.findById(member.getId()).get();
        assertThat(member).isEqualTo(result);


    }
}
