package hello.login.domain.item;

import lombok.Data;

//@Data
// 어노테이션을 사용하여,
// 이 클래스에 대한 getter, setter, toString, equals, hashCode 메서드를 자동으로 생성한다.
// 이를 통해 코드의 간결성을 높인다.
@Data
public class Item {

    private Long id;
    private String itemName;
    private Integer price;
    private Integer quantity;

    //기본 생성자: 아무런 인자를 받지 않으며, 객체를 생성할 때 사용됩니다.
    public Item() {
    }

    //매개변수가 있는 생성자: 아이템 이름, 가격, 수량을 인자로 받아 초기화합니다.
    public Item(String itemName, Integer price, Integer quantity) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }
}