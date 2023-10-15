//프로퍼티 열거
const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  prop4: "value4",
};
//보통 for in문을 객체를 열거할 떄 사용할 수 있음
//object는 열거하고 싶은 대상의 객체가 들어오면 되고,
//그 안에서 key를 열거하는 것
//let말고 const 사용추천
for (const key in obj) {
  console.log(key);
}
//객체의 값을 가져올때는 .단연산자 사용 또는 대괄호 사용
console.log(obj.prop1);
console.log(obj["prop1"]);

//객체에 접근을 할 때 계승?된 변수의 값을 활용할 수 있음
//prop1이라는 일반적인 변수에 문자열 prop1을 넣음
//이는 obj객체의 첫번째 key인 prop1이랑 동일한데
//이를 대괄호안에 넣으면 표현식처럼 사용가능한 것
const prop1 = "prop1";
console.log(obj[prop1]);
//표현식처럼 사용가능하다면 아래처럼 사용도 가능
const prop = "prop";
console.log(obj[prop + 1]);
//그럼 for in문으로도 꺼내서 열거가능
//객체가 나열될거니까 나열될 객체에 접근하는건 똑같음
for (const key in obj) {
  console.log(obj[key]);
}

//체이닝. 값을 찾을때까지 위로 올라감
//스코프에서 내부에 값이 없으면 위로 올라가면서 찾음.
{
  let val = 1;
  {
    let val = 4;
    {
      let val = 10;
      {
        console.log(val);
      }
    }
  }
}

//객체도 자신의 프로토타입에 없는게 있으면, 계속 체이닝 하게 되는데
//이를 방지하기 위해서는 hasOwnProperty라는게 있음
for (const key in obj) {
  //obj라는 객체에 property를 가지고 있느냐
  //이 key가 이 obj라는 객체가 가진게 맞느냐
  //그럼 체이닝이되서 이거외에도 상위에 가진것을을 꺼내오지 않도록 하는것
  //상속되거나 확장되서 사용된 객체의 속성같은걸 꺼내오지 않기 위해 쓰는 방어문
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}
