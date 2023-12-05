let a=[10,20,30,40,50,60,70];
console.log(a);

a.push(80);
console.log(a);

a.push(90);
console.log(a);

a.pop();
console.log(a);


a.unshift(0);
console.log(a);

a.unshift(-10);
console.log(a);

a.shift();
console.log(a);

let b=a.map(function(el,index,arr) {
    return el + 2})
    console.log(b);


    let f=a.filter( function (el,index,arr) {
        return el % 7==0
    })
    console.log(f);


    let r=a.reduce(function (acc,el ,index, arr) {
        return el + acc},0);
        console.log(r);



        let e=a.forEach(function (el ,index, arr) {
           
            console.log('wellcome',el);
        });


        let q=a.find(function (el ,index, arr) {
            return el > 30 });
            console.log(q);
    
    
            let s=a.findIndex(function (el ,index, arr) {
                return el > 30 });
                console.log(s);

                
            let d=a.some(function (el ,index, arr) {
                return el > 30 });
                console.log(d);

                
            let g=a.every(function (el ,index, arr) {
                return el > 30 });
                console.log(g);
        
        
        
        

