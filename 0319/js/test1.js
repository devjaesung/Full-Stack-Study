//my solution
        // const d = new Date(2016,3,21);

        // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // let day = days[d.getDay()];

        // console.log(day);
        // --> not working...:(

        //teahcer's solution
        function solution(a,b){
            let d = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
            //getDay는 0이 일요일 
    
            let gd = new Date(2016,a - 1, b).getDay();
            
            return d[gd];
    
            //return ['SUN','MON','TUE','WED','THU','FRI','SAT'][new Date(2016,a - 1, b).getDay()]; 로 축약 가능
        }
    
        console.log(solution(3,21));
    
    