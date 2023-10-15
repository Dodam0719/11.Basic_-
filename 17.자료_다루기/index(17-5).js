/**
 * unshift => 배열의 앞에 요소 추가
 * push => 배열의 끝에 요소 추가
 * shift => 배열의 앞에 요소 제거
 * pop => 배열의 끝에 요소 제거
 * splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제
 * 이 메서드들은 원본 배열을 변경. 새로운 배열을 만들어내지 못함
 * 원본배열을 지켜야 하는 경우는 이 메서드들 조심해야 함
 */

//arr이 배열이라면, 이 안에 있는 하나하나의 요소들은 element
const arr = ["one", "two", "three"];

//push => 배열의 끝에 요소 추가
arr.push(1);
arr.push(2);
console.log(arr);
//unshift => 배열의 앞에 요소 추가
arr.unshift(0);
arr.unshift(-0);
console.log(arr);
//pop => 배열의 끝에 요소 제거
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
//shift => 배열의 앞에 요소 제거
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);
//splice => 배열의 기존 요소를 삭제, 교체, 추가하여 내용을 변경
//splice(start, deleteCount, item1, item2, ...)으로 구성
//start는 배열의 변경을 시작할 인덱스
//deleteCount는 배열에서 제거할 요소의 수
//그리고 item1, ...은 배열에 추가할 요소이나 지정하지 않으면 제거만 함

//0번째 인덱스에서 0개를 제거하고 four를 추가한 것이므로 four가 앞에 옴
arr.splice(0, 0, "four");
console.log(arr);

//다시 one, two, three만 있도록 four를 삭제한 상태에서
arr.shift();
//0번째 인덱스에서 1개를 제거하고 four를 추가한 것이므로 one을 삭제하고 four가 들어감
arr.splice(0, 1, "four");
console.log(arr);

//다시 0번째 인덱스에 one을 넣어서 one, two, three 상태로 만들어주고
arr.splice(0, 1, "one");
//1번째 인덱스에서 0개를 제거하고 four를 추가한 것이므로 two 앞에 four가 들어감
arr.splice(1, 0, "four");
console.log(arr);

//다시 1번쨰 인덱스에서 1개(four)를 제거해서 one, two, three 상태로 만들어주고
arr.splice(1, 1);
//1번째 인덱스에서 1개를 제거하고 four를 추가한 것이므로 two를 삭제하고 four가 들어감
arr.splice(1, 1, "four");
console.log(arr);

//다시 1번쨰 인덱스에서 1개(four)를 제거해서 one, two, three 상태로 만들어주고
arr.splice(1, 1, "two");

//이 모든 메서드들의 단점은, 원본 배열을 훼손시킴
//그래서 결국 arr로 조작하게 되면 copyArr도 같이 조작됨
//바로 원본 배열을 복사하지 못했기 때문
const copyArr = arr;
arr.push(0);
arr.unshift(10);
arr.splice(1, 1, "four");
console.log(copyArr);

//다시 제거해서 one, two, three 상태로 만들어주고
arr.splice(0, 2, "one");
arr.pop();

//반대로 copyArr을 조작해도 원본배열인 arr도 같이 조작됨
copyArr.push(0);
copyArr.unshift(10);
copyArr.splice(1, 1, "four");
console.log(arr);
