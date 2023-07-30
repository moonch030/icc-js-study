```javaScript
class Kpop { // 클래스 생성
	constructor() {
	  this.singerName = null; // 가수 이름
	  this.releaseDate = null; // 발매일
	  this.members = null; // 멤버 수
	}
  
	set reset(value) { //setter로 값 설정
	  [this.singerName, this.releaseDate, this.members] = value.split(' '); //공백 기준으로 split
	}
  }

const k_pop = new Kpop(); // 객체 생성

  class SuperShy extends Kpop { //supershy클래스는 kpop클래스 상속받음
	constructor() {
	  super(); //부모 클래스 생성자 호출
	  this.leaderName = null; //leaderName 속성 추가
	}
  
	sing() {
	  console.log("super shy~ super shy~"); // super shy~ super shy~ 노래 부르는중
	}
  }
  
  const supershy = new SuperShy(); // 객체 생성
  supershy.reset = "NewJeans 2023.07.21 5";  //setter 메서드를 이용해 값 설정
  supershy.leaderName = "민지"; // leaderName 민지로 값 설정

  console.log("\nSuperShy 인스턴스 정보:");
  console.log("가수 이름:", supershy.singerName);
  console.log("발매일:", supershy.releaseDate);
  console.log("멤버 수:", supershy.members);
  console.log("소속 그룹 리더명:", supershy.leaderName);
  supershy.sing();
  console.log(supershy);
  
```