import Vue from 'vue';

/**
 * 숫자를 한글로 변환한다.
 * @param value Filter 값으로 넘어온 숫자
 * @param priceMode true면 변환된 한글에 '일'이 붙는다. 예를 들어 '일십이만삼천원'과 같이 주로 금액을 표시할때 사용한다.
 *                  false라면 '일'이 생략된다. 다만 억과 같이 단독으로 사용했을때 어색한 숫자는 앞에 '일'을 붙인다.
 * @returns 한글로 변환된 숫자를 리턴한다. 만약 숫자가 아니거나, 범위를 초과하거나 기타 문제가 발생했을 경우 빈 문자열을 리턴한다.
 */
export function numToKr(value: number, priceMode = true): string {
    if (value === 0) {
        return '영';
    } else if (value === 1) {
        return '일';
    }

    const han1 = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    const han2 = ['', '만', '억', '조', '경', '해'];
    const han3 = ['', '십', '백', '천'];

    if (!priceMode) {
        // 1만 들어올 경우 문제가 생긴다.
        if (value !== 1) {
            han1[1] = '';
        }
    }

    const numStr = value.toString();
    const size = numStr.length;

    if (size > 4 * han2.length) {
        return '';
    }
    let kor = '';
    let tmp: string[] = [];

    for (let i = 1; i < numStr.length + 1; i++) {
        const v1 = Number.parseInt(numStr.charAt(i - 1), 10);
        if (isNaN(v1)) {
            break;
        }
        if (v1 !== 0) {
            tmp.push(han1[v1]);
            tmp.push(han3[(size - i) % 4]);
        }

        if ((size - i) % 4 === 0 && tmp.length !== 0) {
            // 일억과 같이 일을 생략하면 어색한 숫자는 '일'을 붙여준다.
            kor += tmp.join('');
            if (tmp.length === 2 && v1 === 1 && !priceMode) {
                kor += '일';
            }

            tmp = [];
            kor += han2[(size - i) / 4];
        }
    }
    return kor;
}

/**
 * 숫자로 된 금액을 한글로 변환한다.
 * 예) 994950 -> 구십구만사천구백오십원
 */
function install() {
    Vue.filter('numberToKor', numToKr);
}

export default install;
