package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller  // 스프링 MVC 컨트롤러 명시
public class HelloController {

    @GetMapping("/hello")  // GET 방식으로 /hello URL 요청이 오면 이 메서드가 처리
    public String hello(Model model) {
        // "data"라는 키로 "hello!!" 값을 뷰로 전달
        // 뷰에서는 ${data}로 접근 가능
        model.addAttribute("data", "hello!!");

        // resources/templates/hello.html 템플릿을 찾아 렌더링
        return "hello";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";
    }

    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name) {
        return "hello " + name;
    }


    @GetMapping("hello-api")  // GET 방식으로 /hello-api URL 요청 처리
    @ResponseBody  // HTTP 응답 본문에 직접 데이터를 담아서 반환 (객체를 JSON으로 변환)
    public Hello helloApi(@RequestParam("name") String name) {  // URL 파라미터에서 name 값을 받음 (예: /hello-api?name=spring)
        Hello hello = new Hello();  // Hello 객체 생성
        hello.setName(name);  // 파라미터로 받은 name 값을 설정
        return hello;  // 객체를 반환하면 JSON 형식으로 변환되어 전달됨 (예: {"name": "spring"})
    }

    // Hello 클래스 정의 (내부 정적 클래스)
    static class Hello {
        private String name;  // name 필드 (private으로 캡슐화)

        // name의 getter 메서드
        public String getName() {
            return name;
        }

        // name의 setter 메서드
        public void setName(String name) {
            this.name = name;
        }
    }
}