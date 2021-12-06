//khai bao ham
//Cach 1: function sum1(a, b) {
//     return a + b;
// }
// sum1(5,10);

//Cach 2: var sum2 = function(a, b) {
//     return a + b;
// };
// sum2(15, 5);


//Cach 3: arrow function
// var sum3 = (a, b) => {
//     return a + b;
// }
// sum3(20, 30);
//neu noi dung ham chi co 1 dong thi bo cap ngoac {}
//1 dong ma return ra ket qua thi bo luon return
//neu chi co 1 bien truyen vao thi bo luon dau ngoac ()


// var square = x => x * x;

// var arr = [1, 3, 5, 7 , 9];
// arr.map(function(x) {
//     return x*x;
// });

// arr.map(x => x*x);

var a = {
    foo: 'abcd',
    run: function(){
        setTimeout(function() {
            console.log(this.foo)
        },3000)
    }
}
a.run(); //tra ve undefined, do this trong function cua setTimeout khong thua ke context cua function ben ngoai, muon chay thi them setTimeout(function() {console.log(this.foo)}).bind(this)/.bind(a)/ben ngoai them var that = this, console.log(that)



var a = {
    foo: 'christ',
    run: function() {
        setTimeout(() => console.log(this.foo),3000);
    }
};

a.run(); //tra ve christ sau 3s
//arrow function khong co CONTEXT nen bien this trong arrow function se co context cua ham gan nhat chua no
