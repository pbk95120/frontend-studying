package hello.login.domain.login;

import hello.login.domain.member.Member;
import hello.login.domain.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//@Service
// 이 클래스가 스프링의 서비스 컴포넌트임을 나타난다.
// 이 애노테이션을 통해 스프링은 이 클래스를 서비스 계층의 빈으로 등록한다.

//@RequiredArgsConstructor
// 롬복(Lombok) 라이브러리의 어노테이션으로, final로 선언된 필드에 대한 생성자를 자동으로 생성한다.
// 이는 의존성 주입을 간편하게 처리한다.
@Service
@RequiredArgsConstructor
public class LoginService {

    private final MemberRepository memberRepository;

    // 로그인에 성공하면 Member객체 반환하고 틀리면 null 반환하는 함수

    /**
     * @return null 로그인 실패
     */
    public Member login(String loginId, String password) {
        return memberRepository.findByLoginId(loginId)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }
}
