//my solution
    //     let s = prompt('글자 입력');

    //     if(s.length>100){
    //         alert('글자수는 100자 이하로!');
    //     }else{
    //         solution();
    //     }

    //     function solution(){
    //     if(s.length%2 == 0){
    //         console.log(s.substr(s.length/2 - 1,2)); 
    //     }else{
    //         console.log(s.substr(s.length/2,1)); 
    //     }
    // }
        //substr(start,length) 이용
        //Working!!...:)

        
        // teacher's solution

        function solution(str){
        
            let s = Math.ceil(str.length/2) - 1;
            let cut = (str.length%2 === 0)? 2 : 1;

            console.log(cut);
            return str.substr(s,cut);

        }

