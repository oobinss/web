# momentum
background.js + quotes.js

• 행렬을 형성하여 랜덤 백그라운드, 송출 문구 지정
• Math.random, Math.floor 기능을 사용한 행렬 순번 randomize

clock.js

• Date 객체를 사용하여 날짜, 시간 관련 정보 표현
• setInterval, setTimeout: 일정주기, 일정 시간 이후로 실행되는 타이머 설정

login.js

• submit event가 발생할 시, localstorage에 유저 정보 저장
• 유저 정보 저장 유무에 따라 기존의 form을 hidden, 이후 greeting message를 보이게 함

todo.js

• 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
• localstorage에 저장된 정보의 유무로 li 표현
• li의 추가 및 삭제 기능

weather.js

• openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현

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