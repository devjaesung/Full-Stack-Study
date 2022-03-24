//sync
//promise
//JSONPlaceholder : https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data[1].title);
    });

let fetched = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(fetched);
fetched.then(function(result){
    console.log('result : ',result);
    console.log('result.json : ',result.json());
});
fetched.catch(function(reason){
    console.log('reason : ',reason) ;//실패하면 출력 (url을 잘못 입력한다는 경우 등..)
})


//promise정리
//1. then은 결과 성공일 때 callback 함수 result를 받음
//2. catch는 결과 실패일 때 callback 함수 결과값(실패한 원인) reason을 받음
//3. 어떤함수를 사용하는데 그 함수의 리턴값이 promise라면 그 함수는 비동기적 함수일 가능성이 매우 높다. 그 함수가 리턴한 값은 두 개ㅡ이 함수 then(), catch()가 된다.