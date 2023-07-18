const user = {
	name: 'moon',
	age: 22,
	tel: "010-1234-5678"
}

function getName(user){ // 함수의 매개변수에 user객체 받음
	return user.name // moon 반환
}

console.log(getName(user)); // moon

//구조분해할당
function getAge(user){ // user객체 받음
	const {age} = user
	return age // 22
}

console.log(getAge(user)); // 22


function getTel({tel = "전화번호 없음"}){ 
//tel이라는 키가 없을때 tel = "전화번호 없음" 라고 생성(저장) 후 출력
//있으면 원래 키의 벨류값 출력
	return tel
}
function getAddress({address = "서울시 금천구"}){
	return address
}

console.log(getTel(user)); //010-1234-5678
console.log(getAddress(user)); // 서울시 금천구

const str = ["안녕","반가워","고마워"]
function getStr(str){
	return str[2];
}
function getStr1([a,,b]){
	return a
}
console.log(str);
console.log(getStr(str));
console.log(getStr1(str));