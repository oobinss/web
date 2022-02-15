# momentum

localStorage 값 저장하기 (array로 저장이 안되기때문에)
a,b,c,d
JSON.stringify()  -> 값을 스트링으로 변경 "[\"a\",\"b\",\"c\",\"d\"]" (string)
JSON.parse() -> 스트링으로 변경된 값을 object로 다시 바꿔줌 ["a","b","c","d"](array)

forEach -> JavaScript의 array에 있는 각각의 item에 대해 
           function을 실행할 수 있게 해줌

--arrow function (화살표함수)--

function sayHello(item) {
    console.log("this is the turn of", item);
}
forEach(sayHello);

forEach((item) => console.log("this is the turn of", item));

Date.now()  // id를 랜덤값으로 저장하기 위해 사용
filter // forEach처럼 배열의 모든 값을 하나씩 대입해서 true 값들만 return