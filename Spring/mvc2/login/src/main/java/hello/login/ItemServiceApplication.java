package hello.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@SpringBootApplication
// 이 어노테이션은 스프링 부트 애플리케이션의 설정을 자동으로 구성한다.
// 여기에는 컴포넌트 스캔, 자동 설정, 설정 프로퍼티를 포함한다.
@SpringBootApplication
public class ItemServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ItemServiceApplication.class, args);
    }

}
