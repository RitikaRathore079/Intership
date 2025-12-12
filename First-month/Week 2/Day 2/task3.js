
    const scores = [45, 80, 90, 35, 60, 75];
    const passStudent = scores.filter(score => score>=50);
    console.log(`Passing Score : ${passStudent}` );

     // passing student give 10 bouns marks
 const bounsMarks = passStudent.map(score => score+5);
 console.log(bounsMarks);

 const calculate = bounsMarks.reduce((sum,num)=>sum + num,0);
 console.log(calculate);
  