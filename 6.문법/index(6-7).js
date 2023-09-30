// use strict
function func() {
  "use strict"; // 제거하면 동작함
  globalVal = 10; // globalVal is not defined

  return "hello";
}

func();
