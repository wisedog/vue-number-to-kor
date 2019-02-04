# vue-number-to-kor

Vue.js용으로 만든 숫자 -> 한글 변환 패키지입니다. 필터 형태로 사용할 수 있으며 함수를 불러다 쓸 수도 있습니다. 웹 사이트 기능 중 견적서 부분을 만들다가 개발하게 되었습니다. 견적서의 금액은 '일천사백만삼천구십육원'과 같은 형태로 출력해야 하는데, 기존의 vue 라이브러리가 없더군요. 다른 vue 사용자들도 쉽고 편하게 썼으면 하는 바램에서 따로 패키징했습니다.

## 사용 방법

npm에서 인스톨 합니다.

```
npm install vue-number-to-kor
```

필터로 사용하시려면 아래와 같이 하세요~
```js
// main.js or main.ts
import NumberToKorFilter from 'vue-number-to-kor';

Vue.use(NumberToKorFilter);
```

```html
<div>일금 {{ totalPrice | numberToKor }}</div>
```

혹은 함수로 사용할 수 있습니다.
```js
import { numToKr } from 'vue-number-to-kor';

// ...

function someFunc(v) {
    return numToKr(v);
}
```

### 기타 사용법

견적서와 같이 '삼만일백일십' 형태가 아닌 '삼만백십' 형태로 받으려면 단순히 파라미터에 false를 추가하세요.

```html
<div>{{ price | numberToKor(false) }}원</div>
```

```js
import { numToKr } from 'vue-number-to-kor';

// ...

function someFunc(v) {
    return numToKr(v, false);
}

```

## 개발 및 테스트
### 컴파일 및 Hot-reload 개발
```
npm run serve
```

### Unit 테스트
```
npm run test
```

### 사용 기술

Vue 2.x, Vue-cli 3.x, Typescript 3.x, Jest
