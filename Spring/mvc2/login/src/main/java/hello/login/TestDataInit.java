package hello.login;

import hello.login.domain.item.Item;
import hello.login.domain.item.ItemRepository;
import hello.login.domain.member.Member;
import hello.login.domain.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

//@Component: 이 클래스가 스프링의 컴포넌트로 등록되어, 스프링 컨테이너에 의해 관리된다.
//@RequiredArgsConstructor:
// 롬복(Lombok) 라이브러리의 어노테이션으로,
// final 필드에 대한 생성자를 자동으로 생성한다.
// 이를 통해 의존성 주입을 간편하게 처리할 수 있다.
@Component
@RequiredArgsConstructor
public class TestDataInit {

    private final ItemRepository itemRepository;
    private final MemberRepository memberRepository;

    /**
     * 테스트용 데이터 추가
     */
    //@PostConstruct: 이 아노테이션이 붙은 메서드는 스프링 빈이 초기화된 후에 자동으로 호출된다.
    // 이 메서드 내에서 초기 데이터 설정을 수행합니다.
    @PostConstruct
    public void init() {
        // repository.save()는 객체에 데이터베이스를 저장하는 역할
        // itemRepository 객체에 값 전잘
        itemRepository.save(new Item("itemA", 10000, 10));
        itemRepository.save(new Item("itemB", 20000, 20));

        // 멤버 객체 생성후 값 전달
        Member member = new Member();
        member.setLoginId("test");
        member.setPassword("test!");
        member.setName("테스터");

        memberRepository.save(member);

    }

}