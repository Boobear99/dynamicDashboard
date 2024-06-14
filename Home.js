function calculate(){
    const userSelect=document.getElementById("mainSelect").value;
    const selectResult=document.querySelector(".trip");
    const calculate=document.querySelector(".tripResult");
    if(userSelect==="trip"){
        calculate.style.visibility="visible";
        selectResult.innerHTML="";        
    }else{
        selectResult.innerHTML="Available calculation service for trip !";
    }
    
}

function showBudget(){
    const userSelect=document.getElementById("place").value;
    const showResult=document.querySelector(".showResult");
    const showTable=document.querySelector(".budgetTable");
    const budgetTotal=document.querySelector(".budgetTotal");
    if (userSelect==="ngweSaung") {
        showTable.style.visibility="visible";
        showResult.innerHTML="";
        budgetTotal.innerHTML="Ks-215000";
    }else{
        showResult.innerHTML="Available calculate service for Ngwe Saung Beach !"
    }
    
    }