const data = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

//객체를 배열로 변환하는 메서드
//Object.keys()는 객체의 속성을 동일한 순서로 배열로 반환
//Object.values() 객체의 속성의 값들로 이루어진 배열을 반환
//Object.entries() 똑같이 객체를 인자로 받아서,
//[key, value]쌍으로 가진 배열을 반환

//아래처럼 keys와 Object.keys(data)를 비교하면 같게 나옴
const keys = Object.keys(data);
console.log(Object.keys(data));
console.log(keys);

const values = Object.values(data);
console.log(Object.values(data));
console.log(values);

//entries는 배열안에 배열들이 계속 나열된 형태(중첩된 배열)
//객체로{} 쓰여있던 것들이 배열[]로 바뀜
const entries = Object.entries(data);
console.log(Object.entries(data));
console.log(entries);
