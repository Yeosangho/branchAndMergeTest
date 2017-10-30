var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("openModalButton");
var submit = document.getElementById("submit");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//모달부분 구현내용
// 버튼클릭시 모달 오픈
btn.onclick = function() {
    modal.style.display = "block";
}

submit.onclick = function(){
    var plan = new Object();
    plan.id = '';
    plan.subject = '';
    plan.content = '';
    plan.planState = '';
    var subject = document.getElementById("subject").value;
    var content = document.getElementById("content").value;
    var planState = document.getElementById("planState").value;
    plan.subject = subject;
    plan.content = content;
    plan.planState = planState;
    var newPlan = makePlanDiv(plan);
    addNewPlan(newPlan,plan.planState);
}
//X를 누르면 모달 종료
span.onclick = function() {
    modal.style.display = "none";
}

// 모달 바깥에 아무거나 누르면 모달 종료
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//HTML5 Drag & Drop 관련 내용
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    var el = ev.target;
    ev.preventDefault();
    var eleid = ev.dataTransfer.getData("text");
    if (el.id  != 'toDoPlan' && el.id != 'doingPlan' && el.id != 'donePlan') {
        el = el.parentNode;
    }
    el.appendChild(document.getElementById(eleid));
}

//Card를 만드는 함수
function makePlanDiv(planInfo){
    var planDiv = document.createElement("div");
    var newContent = document.createTextNode(planInfo.subject);
    planDiv.appendChild(newContent);
    planDiv.setAttribute('id', planInfo._id);
    planDiv.setAttribute('draggable', "true");
    planDiv.setAttribute('ondragstart', "drag(event)");
    planDiv.setAttribute('class', "plan");
    return planDiv;
}
function addNewPlan(planDiv, planState){
    var toDoPlan = document.getElementById('toDoPlan');
    var doingPlan = document.getElementById('doingPlan');
    var donePlan = document.getElementById('donePlan');

    if(planState == 'toDo'){
        toDoPlan.appendChild(planDiv);
    }
    else if(planState == 'doing'){
        doingPlan.appendChild(planDiv);
    }
    else if(planState == 'done'){
        donePlan.appendChild(planDiv);
    }
}

