const name1 = ['병현이 index','채현이 index','진영이 index','윤수 index'];

name1.forEach((number,index) => {
    console.log(number);
    console.log(index);
})


const name2 = ['병현이','채현이','진영이','윤수']
for(number of name2){
	console.log(number);
}


const name3 = {
    title:"신나는 자바스크립트~!",
    member:"병현, 채현, 진영, 윤수"
}
for(key in name3){
    console.log(`${key} : ${name3[key]}`)
}