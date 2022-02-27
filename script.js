const questionOne = "It can be hard getting up in the morning! How did you feel on your way to work this morning?";
const questionTwo = "Research shows that our work life can influence our stress levels. How would you rate your stress level today?";
const questionThree = "Everyone needs some time to have fun! What description best explains your social/recreational life outside of work?";
const questionFour = "It comes as no surprise that work can be on our mind often. When you think about your job right now how do you feel?";
const questionFive = "Nothing feels better than getting to come back home at the end of the day! How do you feel most days when you leave work at the end of the day?";
const questionSix = "Your coworkers can be like a second family. What mood best describes how you feel about your relationship with your coworkers?";
const questionSeven = "As humans we all need to be heard! Would you say that you feel heard in your current role right now?";
const questionEight = "We all have feelings! How do you feel right here, right now, in this moment?";
const questionNine = "As humans we all want to grow, how do you feel about the growth opportunities your company provides for you?";
const questionTen = "We all desire to reach our fullest potential. Do you feel like your current role utilizes all your potential? Or is helping you grow into your fullest potential?";
const questionEleven = "As humans our minds need to be engaged/entertained! Do you feel like your current role engages and stimulates your mind?";
const questionTwelve = "In order to do our job we need to be given the essential information and training. Do you feel like you're provided with the training and information you need to do your job to the best of your ability?";
const questionThirteen = "You're doing a great job! Do you feel like your hard work is recognized when you contribute to the company's success?";
const questionFourteen = "Life happens! Do you feel like your job gives you the needed flexibility to meet the needs of your personal life?";
const questionFifteen = "At the end of the day, we're all people. Do you feel like your boss/company cares about you as a person?";

const firstChart = document.getElementById('chartOne').getContext('2d');
const secondChart = document.getElementById('chartTwo').getContext('2d');
const thirdChart = document.getElementById('chartThree').getContext('2d');
const fourthChart = document.getElementById('chartFour').getContext('2d');
const fifthChart = document.getElementById('chartFive').getContext('2d');

let doughnutOne;
let doughnutTwo;
let doughnutThree;
let doughnutFour;
let doughnutFive;

const firstQuestionSet = [questionOne, questionTwo, questionThree];
const secondQuestionSet = [questionFour, questionFive, questionSix];
const thirdQuestionSet = [questionSeven, questionEight, questionNine];
const fourthQuestionSet = [questionTen, questionEleven, questionTwelve];
const fifthQuestionSet = [questionThirteen, questionFourteen, questionFifteen];

let quesOneChart;
let quesTwoChart;
let quesThreeChart;
let quesFourChart;
let quesFiveChart;
let quesSixChart;
let quesSevenChart;
let quesEightChart;
let quesNineChart;
let quesTenChart;
let quesElevenChart;
let quesTwelveChart;
let quesThirteenChart;
let quesFourteenChart;
let quesFifteenChart;

let currentPage;
let previousPage;
let currentQuestion;
let nextAnswer;

let surveyAnswers; 
let firstAnswer;
let secondAnswer;
let thirdAnswer;
let fourthAnswer;
let fifthAnswer;

let loginCode;

let fakeData = [98, 398, 324, 54, 874];
let fakeDataTwo = [234, 23, 98, 367, 204];
let fakeDataThree = [356, 67, 134, 223, 93];
let fakeDataFour = [23, 201, 233, 393, 178];
let fakeDataFive = [239, 33, 23, 98, 374];
let fakeDataSix = [349, 32, 123, 98, 293];
let fakeDataSeven = [94, 24, 238, 189, 83];
let fakeDataEight = [394, 193, 38, 87, 234];
let fakeDataNine = [98, 83, 442, 139, 132];
let fakeDataTen = [249, 234, 183, 23, 234];
let fakeDataEleven = [373, 231, 124, 94, 388];
let fakeDataTwelve= [134, 223, 198, 67, 104];
let fakeDataThirteen = [56, 167, 34, 323, 193];
let fakeDataFourteen = [223, 101, 33, 93, 128];
let fakeDataFifteen = [139, 233, 323, 198, 174];

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

    loginCode = one + two + three + four + five + six;
    
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

function getButtonValue(value) {
    currentAnswer = value;
}

function surveyQuestions() {
    firstSurveyQuestion = firstQuestionSet[Math.floor(Math.random() * firstQuestionSet.length)];
    secondSurveyQuestion = secondQuestionSet[Math.floor(Math.random() * secondQuestionSet.length)];
    thirdSurveyQuestion = thirdQuestionSet[Math.floor(Math.random() * thirdQuestionSet.length)];
    fourthSurveyQuestion = fourthQuestionSet[Math.floor(Math.random() * fourthQuestionSet.length)];
    fifthSurveyQuestion = fifthQuestionSet[Math.floor(Math.random() * fifthQuestionSet.length)];

    surveyAnswers = [[firstSurveyQuestion, ""], [secondSurveyQuestion, ""], [thirdSurveyQuestion, ""], [fourthSurveyQuestion, ""],
                    [fifthSurveyQuestion, ""]]

    document.getElementById('questionID').innerHTML = firstSurveyQuestion;
    currentQuestion = firstSurveyQuestion;
    nextAnswer = secondAnswer;
}

function nextQuestion() {
    if (currentQuestion == firstSurveyQuestion) {
        currentQuestion = secondSurveyQuestion;
        nextAnswer = secondAnswer;
        firstAnswer = currentAnswer;
        document.getElementById('questionID').innerHTML = currentQuestion;
        unCheckAll(secondAnswer);
    } else if (currentQuestion == secondSurveyQuestion) {
        currentQuestion = thirdSurveyQuestion;
        nextAnswer = thirdAnswer;
        secondAnswer = currentAnswer;
        document.getElementById('questionID').innerHTML = currentQuestion;
        unCheckAll(thirdAnswer);
    } else if (currentQuestion == thirdSurveyQuestion) {
        currentQuestion = fourthSurveyQuestion;
        nextAnswer = fourthAnswer;
        thirdAnswer = currentAnswer;
        document.getElementById('questionID').innerHTML = currentQuestion;
        unCheckAll(fourthAnswer);
    } else if (currentQuestion == fourthSurveyQuestion) {
        currentQuestion = fifthSurveyQuestion;
        nextAnswer = fifthAnswer;
        fourthAnswer = currentAnswer;
        document.getElementById('questionID').innerHTML = currentQuestion;
        document.getElementById('submitAnswers').innerHTML = "SUBMIT";
        document.getElementById('submitAnswers').setAttribute("onClick", "submitAnswers()");
        unCheckAll(fifthAnswer);
    } 
}

function previousQuestion() {
    if (currentQuestion == fifthSurveyQuestion) {
        currentQuestion = fourthSurveyQuestion;
        currentAnswer = fourthAnswer;
        previousAnswer();
        document.getElementById('questionID').innerHTML = currentQuestion;
        document.getElementById('submitAnswers').innerHTML = "NEXT QUESTION &rarr;";
        document.getElementById('submitAnswers').setAttribute("onClick", "nextQuestion()");
    } else if (currentQuestion == fourthSurveyQuestion) {
        currentQuestion = thirdSurveyQuestion;
        currentAnswer = thirdAnswer;
        previousAnswer();
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == thirdSurveyQuestion) {
        currentQuestion = secondSurveyQuestion;
        currentAnswer = secondAnswer;
        previousAnswer();
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == secondSurveyQuestion) {
        currentQuestion = firstSurveyQuestion
        currentAnswer = firstAnswer;
        previousAnswer();
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else {

    }
}

function submitAnswers() {
    fifthAnswer = currentAnswer;
    surveyAnswers = [[firstSurveyQuestion, firstAnswer], [secondSurveyQuestion, secondAnswer], [thirdSurveyQuestion, thirdAnswer], 
                     [fourthSurveyQuestion, fourthAnswer], [fifthSurveyQuestion, fifthAnswer]];
    window.location = "./submission.html";
    console.log(surveyAnswers);
}

function unCheckAll(value) {
    if (nextAnswer == null) {
        var radio = document.querySelector('input[type=radio][name=answer]:checked');
        radio.checked = false;
    } else {
        alreadyAnswered(value);
    }

}

function alreadyAnswered(value) {
    if (value == -2) {
        document.getElementById('madFace').checked = true;
    } else if (value == -1) {
        document.getElementById('sadFace').checked = true;
    } else if (value == 0) {
        document.getElementById('contentFace').checked = true;
    } else if (value == 1) {
        document.getElementById('joyfulFace').checked = true;
    } else if (value== 2) {
        document.getElementById('happyFace').checked = true;
    }
}

function previousAnswer() {
    if (currentAnswer == -2) {
        document.getElementById('madFace').checked = true;
    } else if (currentAnswer == -1) {
        document.getElementById('sadFace').checked = true;
    } else if (currentAnswer == 0) {
        document.getElementById('contentFace').checked = true;
    } else if (currentAnswer == 1) {
        document.getElementById('joyfulFace').checked = true;
    } else if (currentAnswer == 2) {
        document.getElementById('happyFace').checked = true;
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

function alignCharts() {
    document.getElementsByClassName('graphContainer').style.width = "100%";
    document.getElementsByClassName('graphContainer').style.height = "35%";
}

function overviewPage() {
    currentPage = 1;

    document.getElementById('chartDescOne').innerHTML = questionOne;
    document.getElementById('chartDescTwo').innerHTML = questionTwo;
    document.getElementById('chartDescThree').innerHTML = questionThree;
    document.getElementById('chartDescFour').innerHTML = questionFour;
    document.getElementById('chartDescFive').innerHTML = questionFive;

    if (firstChart == null) {
        firstChart.destroy();
        secondChart.destroy();
        thirdChart.destroy();
        fourthChart.destroy();
        fifthChart.destroy();
    } else {
        let firstChart = document.getElementById('chartOne').getContext('2d');
        let secondChart = document.getElementById('chartTwo').getContext('2d');
        let thirdChart = document.getElementById('chartThree').getContext('2d');
        let fourthChart = document.getElementById('chartFour').getContext('2d');
        let fifthChart = document.getElementById('chartFive').getContext('2d');

        doughnutOne = new Chart(firstChart, {
            type: 'doughnut',
            data: {
                labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
                datasets: [{
                    label: 'Amount',
                    data: fakeData,
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

        doughnutTwo = new Chart(secondChart, {
            type: 'doughnut',
            data: {
                labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
                datasets: [{
                    label: 'Amount',
                    data: [234, 23, 98, 367, 204],
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

        doughnutThree = new Chart(thirdChart, {
            type: 'doughnut',
            data: {
                labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
                datasets: [{
                    label: 'Amount',
                    data: [356, 67, 134, 223, 93],
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

        doughnutFour = new Chart(fourthChart, {
            type: 'doughnut',
            data: {
                labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
                datasets: [{
                    label: 'Amount',
                    data: [23, 201, 233, 393, 178],
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

        doughnutFive = new Chart(fifthChart, {
            type: 'doughnut',
            data: {
                labels: ['Mad', 'Sad', 'Content', 'Joyful', 'Happy'],
                datasets: [{
                    label: 'Amount',
                    data: [239, 33, 23, 98, 374],
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
}

function pageOne() {
    currentPage = 1;

    document.getElementById('chartDescOne').innerHTML = questionOne;
    document.getElementById('chartDescTwo').innerHTML = questionTwo;
    document.getElementById('chartDescThree').innerHTML = questionThree;
    document.getElementById('chartDescFour').innerHTML = questionFour;
    document.getElementById('chartDescFive').innerHTML = questionFive;

    doughnutOne.data.datasets[0].data = fakeData;
    doughnutTwo.data.datasets[0].data = fakeDataTwo;
    doughnutThree.data.datasets[0].data = fakeDataThree;
    doughnutFour.data.datasets[0].data = fakeDataFour;
    doughnutFive.data.datasets[0].data = fakeDataFive;
    doughnutOne.update();
    doughnutTwo.update();
    doughnutThree.update();
    doughnutFour.update();
    doughnutFive.update();
}

function pageTwo() {
    currentPage = 2;

    document.getElementById('chartDescOne').innerHTML = questionSix;
    document.getElementById('chartDescTwo').innerHTML = questionSeven;
    document.getElementById('chartDescThree').innerHTML = questionEight;
    document.getElementById('chartDescFour').innerHTML = questionNine;
    document.getElementById('chartDescFive').innerHTML = questionTen;

    doughnutOne.data.datasets[0].data = fakeDataSix;
    doughnutTwo.data.datasets[0].data = fakeDataSeven;
    doughnutThree.data.datasets[0].data = fakeDataEight;
    doughnutFour.data.datasets[0].data = fakeDataNine;
    doughnutFive.data.datasets[0].data = fakeDataTen;
    doughnutOne.update();
    doughnutTwo.update();
    doughnutThree.update();
    doughnutFour.update();
    doughnutFive.update();

}

function pageThree() {
    currentPage = 3;

    document.getElementById('chartDescOne').innerHTML = questionEleven;
    document.getElementById('chartDescTwo').innerHTML = questionTwelve;
    document.getElementById('chartDescThree').innerHTML = questionThirteen;
    document.getElementById('chartDescFour').innerHTML = questionFourteen;
    document.getElementById('chartDescFive').innerHTML = questionFifteen;

    doughnutOne.data.datasets[0].data = fakeDataEleven;
    doughnutTwo.data.datasets[0].data = fakeDataTwelve;
    doughnutThree.data.datasets[0].data = fakeDataThirteen;
    doughnutFour.data.datasets[0].data = fakeDataFourteen;
    doughnutFive.data.datasets[0].data = fakeDataFifteen;
    doughnutOne.update();
    doughnutTwo.update();
    doughnutThree.update();
    doughnutFour.update();
    doughnutFive.update();
}

function nextChartPage() {
    if (currentPage == 1) {
        pageTwo();
        previousPage = 1;
    } else if (currentPage == 2) {
        pageThree();
        previousPage = 2;
    } else if (currentPage == 3) {
        pageOne();
        previousPage = 3;
    }
}

function previousChartPage() {
    if (currentPage == 1) {
        pageThree();
        previousPage = 1;
    } else if (currentPage == 3) {
        pageTwo();
        previousPage = 3;
    } else if (currentPage == 2) {
        pageOne();
        previousPage = 2;
    }
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

