let calculate =()=>{
    let english = document.querySelector("#english").value ||0
    let maths = document.querySelector("#maths").value || 0
    let physics = document.querySelector("#physics").value || 0
    let chemistry = document.querySelector("#chemistry").value ||0
    let computer = document.querySelector("#computer").value ||0

    let grades = "";
    
    let totalPoints = parseFloat(english)+parseFloat(maths)+parseFloat(physics)+parseFloat(chemistry)+parseFloat(computer)
    let Overallgrade = (parseFloat(totalPoints/500)*100).toFixed(2);
    if(Overallgrade<=100 && Overallgrade >=90){
        grades = "A";
    }
    else if(Overallgrade<=89 && Overallgrade >=80){
        grades = "B";
    }
    else if(Overallgrade<=79 && Overallgrade >=70){
        grades = "C";
    }
    else if(Overallgrade<=69 && Overallgrade >=60){
        grades = "D";
    }
    else {
        grades = "F";
    }

   

    if((english <0 || english>100) || (maths <0 || maths>100) || (physics <0 || physics>100 )|| (chemistry<0 || chemistry>100) || (computer <0 ||computer>100)){
        alert("Please Enter the Marks in range of 100")
    }
    else{
        document.querySelector(".total").innerHTML=`Total Marks: ${totalPoints}`;
        document.querySelector(".average").innerHTML=`Your Average Marks are: ${Overallgrade}`
        if(Overallgrade<36 || (english>=0 && english<=35) || (physics>=0 && physics<=35) || (chemistry>=0 && chemistry<=35) || (computer>=0 && computer<=35) || (maths>=0 && maths<=35)){
            document.querySelector(".grade").innerHTML=`You Got F Grade`
        }
        
        else{
            document.querySelector(".grade").innerHTML=`You got ${grades} Grade`
        }
    }
}