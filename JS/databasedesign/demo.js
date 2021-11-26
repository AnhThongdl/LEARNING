var classes = [
    {id: 0, name: '1A', teacher: 1},
    {id: 1, name: '2A', teacher: 2},
    {id: 2, name: '3A', teacher: 3},
    {id: 3, name: '4A', teacher: 0},
    {id: 4, name: '5A', teacher: 0}
];

var teachers = [
    {id: 0, name: 'thong', age: 30},
    {id: 1, name: 'tuan', age: 40},
    {id: 2, name: 'dat', age: 45},
    {id: 3, name: 'uyen', age:35}
];

var students = [
    {id: 0, name: 'minh', age: 12, class: 0},
    {id: 1, name: 'tien', age: 12, class: 3},
    {id: 2, name: 'trung', age: 12, class: 1},
    {id: 3, name: 'ngoc', age: 12, class: 2},
    {id: 4, name: 'chi', age: 12, class: 4},
    {id: 5, name: 'thanh', age: 12, class: 4}
];

function StudentsOfTeacher(teacherName) {
    var findTeacher = teachers.find(function(x) {
        return x.name === teacherName;
    });
   
    var findClass = classes.filter(function(y) {
        return y.teacher === findTeacher.id;
    });

    var sum = [];
    for (var i = 0; i < findClass.length; i++) {
        var findStudents = students.filter(function(st) {
            return st.class === findClass[i].id;
        });
        sum.push(findStudents);
    }
    return sum;
}


function getStudents(className) {
    var classFind = classes.find(function(x) {
        return x.name === className;
    });

    var studentInClass = students.filter(function(student) {
        return student.class === classFind.id;
    });

    return studentInClass;
}
 

function getTeacher(className) {
    var classFind = classes.find(function(x) {
        return x.name === className;
    });

    var teacherOfClass = teachers.filter(function(y) {
        return y.id === classFind.teacher
    });
    return teacherOfClass;
}


    
var resultStudents = getStudents('2A');
console.log('danh sach hoc sinh cua lop: ' ,resultStudents);

var resultTeacher = getTeacher('5A');
console.log('giao vien cua lop: ',resultTeacher);

var resultStudentsOfTeacher = StudentsOfTeacher('thong');
console.log('Danh sach hoc sinh cua giao vien:', resultStudentsOfTeacher);
