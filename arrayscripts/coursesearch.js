"use strict"

let courses = [
{
CourseId: "PROG100",
Title: "Introduction to HTML/CSS/Git",
Location: "Classroom 7",
StartDate: "09/08/22",
Fee: "100.00",
},
{
CourseId: "PROG200",
Title: "Introduction to JavaScript",
Location: "Classroom 9",
StartDate: "11/22/22",
Fee: "350.00",
},
{
CourseId: "PROG300",
Title: "Introduction to Java",
Location: "Classroom 1",
StartDate: "01/09/23",
Fee: "50.00",
},
{
CourseId: "PROG400",
Title: "Introduction to SQL and Databases",
Location: "Classroom 7",
StartDate: "03/16/23",
Fee: "50.00",
},
{
CourseId: "PROJ500",
Title: "Introduction to Angular",
Location: "Classroom 1",
StartDate: "04/25/23",
Fee: "50.00",
}
];
///cris example//push

//const numberArray = [ 1, 2, 3]

//function addToArray(newNumber){
  

    //newNumber.push(newNumber);

//}

 //addToArray(4)

//console.log({numberArray});
//////instruction


// When does the PROG200 course start?

const  startDate =["01/08/22"]

function    PROG200(startDate) {

    
}
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?



let results = {
    prog200StartDate: [],
    proj500Title: [],
    cheapCoursesTitles: [],
    classroom1Courses: []
};

// 1. When does the PROG200 course start?
const prog200StartDate = courses.find(course => course.CourseId === "PROG200").StartDate;
results.prog200StartDate.push(prog200StartDate);

