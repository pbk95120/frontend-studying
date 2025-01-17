package hello.login.domain.item;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@Repository 어노테이션을 통해 스프링의 컴포넌트로 등록되어 데이터 접근을 담당한다.
@Repository
public class ItemRepository {

    private static final Map<Long, Item> store = new HashMap<>(); //static
    private static long sequence = 0L; //static

    // 아이템을 저장하고 Id를 자동으로 부여합니다.
    public Item save(Item item) {
        item.setId(++sequence);
        store.put(item.getId(), item);
        return item;
    }

    // 주어진 id에 해당하는 아이템 반환
    public Item findById(Long id) {
        return store.get(id);
    }

    // 저장소에있는 모든 아이템 리스트로 반환
    public List<Item> findAll() {
        return new ArrayList<>(store.values());
    }

    // id를 찾아서 파라미터로 아이템 속성 업데이트
    public void update(Long itemId, Item updateParam) {
        Item findItem = findById(itemId);
        findItem.setItemName(updateParam.getItemName());
        findItem.setPrice(updateParam.getPrice());
        findItem.setQuantity(updateParam.getQuantity());
    }

    // store 비우기
    public void clearStore() {
        store.clear();
    }

}
