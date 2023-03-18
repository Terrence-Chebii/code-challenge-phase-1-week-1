const gradeShow = document.getElementById(
    "gradeShow"
);


function convert() {
    const number = parseInt(grade.value);
    if(number >= 101){
      grade = "Please write the correct marks";
    }else if (number >= 80 ) { 
      grade = "Your Grade is A";
    } else if(number >= 60) {
      grade = "Your Grade is B";
    } else if(number >= 49) {
      grade =  "Your Grade is C";
    } else if(number >= 40) {
      grade = "Your Grade is D";
    } else if(number < 40) {
      grade = "Your Grade is E";
    }else{
        grade = "please fill out your marks"
    }
    console.log(grade)
    gradeShow.innerText = `${grade}`;
}