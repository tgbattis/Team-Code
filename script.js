const greeting = ['It can be hard getting up in the morning! How did you feel on your way to work this morning?',
                  'Research shows that our work life can influence our stress levels. How would you rate your stress level today?',
                  'Everyone needs some time to have fun! What description best explains your social/recreational life outside of work?'];

const workLifeBalance = ['It comes as no surprise that work can be on our mind often. When you think about your job right now how do you feel?',
                         'Nothing feels better than getting to come back home at the end of the day! How do you feel most days when you leave work at the end of the day?',
                         'Your coworkers can be like a second family. What word best describes how you feel about your relationship with your coworkers?'];

const howsWork = ['As humans we all need to be heard! Would you say that you feel heard in your current role right now?',
                  'We all have feelings! How do you feel right here, right now, in this moment?',
                  'As humans we all want to grow, how do you feel about the growth opportunities your company provides for you?'];

const coworkers = ['We all desire to reach our fullest potential. Do you feel like your current role utilizes all your potential? Or is helping you grow into your fullest potential?',
                   'As humans our minds need to be engaged/entertained! Do you feel like your current role engages and stimulates your mind?',
                   'In order to do our job we need to be given the essential information and training. Do you feel like you\'92re provided with the training and information you need to do your job to the best of your ability?'];

const unknown = ["You're doing a great job! Do you feel like your hard work is recognized when you contribute to the company's success?",
                 'Life happens! Do you feel like your job gives you the needed flexibility to meet the needs of your personal life?',
                 "At the end of the day, we're all people. Do you feel like your boss/ company cares about you as a person?"];

let surveyAnswers = [["Greeting", ""], ["Work Life Balance", ""], ["How's Work", ""], ["How's Your CoWorkers", ""], ["Unknown", ""]];

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

function submit() {
    let one = document.getElementById('codeOne').value;
    let two = document.getElementById('codeTwo').value;
    let three = document.getElementById('codeThree').value;
    let four = document.getElementById('codeFour').value;
    let five = document.getElementById('codeFive').value;
    let six = document.getElementById('codeSix').value;

    let loginCode = one + two + three + four + five + six;

    let loggedOn = 'success';

    if (loggedOn = 'success') {
        window.location.href = "survey.html"
    }
}

function submitAnswers() {
    
}

function nextQuestion() {
    if (currentQuestion == greetingQuestion) {
        currentQuestion = workLifeQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == workLifeQuestion) {
        currentQuestion = howsWorkQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == howsWorkQuestion) {
        currentQuestion = coworkersQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else if (currentQuestion == coworkersQuestion) {
        currentQuestion = unknownQuestion;
        document.getElementById('questionID').innerHTML = currentQuestion;
    } else {
        document.getElementById('submitAnswers').style.visibility = "visible";
        document.getElementById('submitAnswers').style.transitionDuration = "1s";
        document.getElementById('submitAnswers').style.opacity = "1";
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
