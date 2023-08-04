const numbers = [4,102,2,30,13,20]
numbers.push(32) // 32 추가
console.log(numbers)

numbers.sort((a,b) => {
	return a-b;  // 오름차순으로 배열 정리
})
numbers.forEach((number) => {
    console.log(number); // 하나씩 콘솔 출력
});


const users = [
    {name: '윤병현', age: 24, class: '1반'},
    {name: '문채현',  age: 22, class: '1반'},
    {name: '최진영',  age: 21, class: '2반'},
    {name: '이윤수', age: 20, class: '2반'}
];

const userData = users.filter(user => user.age > 21 && user.class === '1반'); //주어진 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환

console.log(userData);

const userData1 = userData.map(user => ({ //대상 배열의 길이만큼 주어진 콜백 실행, 콜백의 반환 값을 모아 새로운 배열 반환
    ...user,
	name: '윤병현', 
	age: 24, 
	class: '1반', 
	email: '1234@naver.com',
    tel: '010-1234-5678'
}));

console.log(userData1);
