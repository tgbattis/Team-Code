const greeting = ['greeting placeholder 1', 'greeting placeholder 2', 'greeting placeholder 3', 'greeting placeholder 4', 
                  'greeting placeholder 5'];
const workLifeBalance = ['workLifeBalance placeholder 1', 'workLifeBalance placeholder 2', 'workLifeBalance placeholder 3', 
                         'workLifeBalance placeholder 4', 'workLifeBalance placeholder 5'];
const howsWork = ['howsWork placeholder 1', 'howsWork placeholder 2', 'howsWork placeholder 3', 'howsWork placeholder 4', 
                  'howsWork placeholder 5'];
const coworkers = ['coworkers placeholder 1', 'coworkers placeholder 2', 'coworkers placeholder 3', 'coworkers placeholder 4',
                   'coworkers placeholder 5'];
const unknown = ['unknown placeholder 1', 'unknown placeholder 2', 'unknown placeholder 3', 'unknown placeholder 4', 
                 'unknown placeholder 5'];

let surveyAnswers; 

let greetingQuestion;
let workLifeQuestion;
let howsWorkQuestion;
let coworkersQuestion;
let unknownQuestion;

let greetingAnswer;
let workLifeAnswer;
let howsWorkAnswer;
let coworkersAnswer;
let unknownAnswer;

function autoTab(current, length, to) {
	if (document.getElementById(current).value.length == length) {
		document.getElementById(to).focus();
        }

    submitAppear()
}

function submitAppear() {
    if (document.getElementById('codeOne').value.length == 1
        && document.getElementById('codeTwo').value.length == 1
        && document.getElementById('codeThree').value.length == 1
        && document.getElementById('codeFour').value.length == 1
        && document.getElementById('codeFive').value.length == 1
        && document.getElementById('codeSix').value.length == 1) {
            document.getElementById('submitButton').style.visibility = "visible";
            document.getElementById('submitButton').style.transitionDuration = "1s";
            document.getElementById('submitButton').style.opacity = "1";
        } else {
            document.getElementById('submitButton').style.opacity="0";
            document.getElementById('submitButton').style.visibility = "hidden";
        }
}

function loginSubmit() {
    let one = document.getElementById('codeOne').value;
    let two = document.getElementById('codeTwo').value;
    let three = document.getElementById('codeThree').value;
    let four = document.getElementById('codeFour').value;
    let five = document.getElementById('codeFive').value;
    let six = document.getElementById('codeSix').value;

    const adminCode = "FD98WD"
    const empCode = "A2JND8"

    let loginCode = one + two + three + four + five + six;
    
    if (loginCode.toUpperCase() == adminCode) {
        window.location.href = "overview.html";
    } else if (loginCode.toUpperCase() == empCode){
        window.location.href = "survey.html";
    } else {
        document.getElementById('loginGreeting').innerHTML = "Invalid Code. Try Again!";
        document.getElementById('loginGreeting').style.color = "red";
        document.getElementById("codeOne").style.borderColor = "red";
        document.getElementById("codeTwo").style.borderColor = "red";
        document.getElementById("codeThree").style.borderColor = "red";
        document.getElementById("codeFour").style.borderColor = "red";
        document.getElementById("codeFive").style.borderColor = "red";
        document.getElementById("codeSix").style.borderColor = "red";
    }
}

function submitAnswers() {
    surveyAnswers = [["Greeting", greetingAnswer], ["Work Life Balance", workLifeAnswer], ["How's Work", howsWorkAnswer], 
                     ["How's Your CoWorkers", coworkersAnswer], ["Unknown", unknownAnswer]];
    window.location.href = "submission.html"
    console.log(surveyAnswers);
}

function nextQuestion(answerValue) {
    if (currentQuestion == greetingQuestion) {
        greetingAnswer = answerValue;
        currentQuestion = workLifeQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == workLifeQuestion) {
        workLifeAnswer = answerValue;
        currentQuestion = howsWorkQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == howsWorkQuestion) {
        howsWorkAnswer = answerValue;
        currentQuestion = coworkersQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == coworkersQuestion) {
        coworkersAnswer = answerValue;
        currentQuestion = unknownQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else {
        unknownAnswer = answerValue;
        document.getElementById('submitAnswers').style.visibility = "visible";
        document.getElementById('submitAnswers').style.transitionDuration = "1s";
        document.getElementById('submitAnswers').style.opacity = "1";
    }

}

function empCodeGenerator() {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (i=0; i<6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function outputEmpCode() {
    let validEmpId = "JB23MD";
    let newEmpCode = "";
    let employeeID = document.getElementById('empIdInput').value;

    if (employeeID == validEmpId) {
        newEmpCode = empCodeGenerator();
        document.getElementById('codeOutput').innerHTML = newEmpCode;
        document.getElementById('codeOutput').style.fontSize = "20px";
        document.getElementById('codeOutput').style.color = "black";
    } else {
        document.getElementById('codeOutput').innerHTML = "Employee ID Is Already In Use Or Invalid";
        document.getElementById('codeOutput').style.fontSize = "10px";
        document.getElementById('codeOutput').style.color = "red";
    }
}

function surveyQuestions() {
    greetingQuestion = greeting[Math.floor(Math.random() * greeting.length)];
    workLifeQuestion = workLifeBalance[Math.floor(Math.random() * workLifeBalance.length)];
    howsWorkQuestion = howsWork[Math.floor(Math.random() * howsWork.length)];
    coworkersQuestion = coworkers[Math.floor(Math.random() * coworkers.length)];
    unknownQuestion = unknown[Math.floor(Math.random() * unknown.length)];

    document.getElementById('questionID').innerHTML = greetingQuestion;
    currentQuestion = greetingQuestion;
}

function createOverview() {
    let greetingChart = document.getElementById('greetingOverview').getContext('2d');
    let workLifeChart = document.getElementById('workLifeOverview').getContext('2d');
    let howsWorkChart = document.getElementById('howsWorkOverview').getContext('2d');
    let coworkersChart = document.getElementById('coworkersOverview').getContext('2d');
    let unknownChart = document.getElementById('unknownOverview').getContext('2d');

    let greetDoughChart = new Chart(greetingChart, {
        type: 'doughnut',
        data: {
            labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
            datasets: [{
                label: 'Amount',
                data: [43, 34, 243, 654, 432],
                backgroundColor: [
                    '#754fa0', '#F2D40D', '#90D36B', '#09B7BF', '#ED1B72'
                ]
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    let workLifeDoughChart = new Chart(workLifeChart, {
        type: 'doughnut',
        data: {
            labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
            datasets: [{
                label: 'Amount',
                data: [26, 45, 382, 462, 217],
                backgroundColor: [
                    '#754fa0', '#F2D40D', '#90D36B', '#09B7BF', '#ED1B72'
                ]
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    let howsWorkDoughChart = new Chart(howsWorkChart, {
        type: 'doughnut',
        data: {
            labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
            datasets: [{
                label: 'Amount',
                data: [101, 31, 243, 354, 132],
                backgroundColor: [
                    '#754fa0', '#F2D40D', '#90D36B', '#09B7BF', '#ED1B72'
                ]
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    let coworkersDoughChart = new Chart(coworkersChart, {
        type: 'doughnut',
        data: {
            labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
            datasets: [{
                label: 'Amount',
                data: [43, 18, 643, 224, 82],
                backgroundColor: [
                    '#754fa0', '#F2D40D', '#90D36B', '#09B7BF', '#ED1B72'
                ]
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    let unknownDoughChart = new Chart(unknownChart, {
        type: 'doughnut',
        data: {
            labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
            datasets: [{
                label: 'Amount',
                data: [73, 102, 311, 438, 132],
                backgroundColor: [
                    '#754fa0', '#F2D40D', '#90D36B', '#09B7BF', '#ED1B72'
                ]
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function TestButtonHandler() {
    var parameters = '{"data":"clickSucessfull"}'

    //jQuery ajax method
    $.ajax({
        type: "POST",
        url: "/testConnection",
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            // Receive JSON Object back form server
            console.log(msg)
            // Parse Json
            let status = msg['status']
            // Display
            alert(status);
        },
        error: function (e) {
            alert("this code will only execute if javascript is unable to access the webservice");
        }
    });
}

