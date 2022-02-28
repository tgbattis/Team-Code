/*
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
*/

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

// let currentPage;
// let previousPage;
// let currentQuestion;
// let nextAnswer;

let fakeData = questions[questionOne]; // 
let fakeDataTwo = questions[questionTwo];
let fakeDataThree = questions[questionThree];
let fakeDataFour = questions[questionFour];
let fakeDataFive = questions[questionFive];
let fakeDataSix = questions[questionSix];
let fakeDataSeven = questions[questionSeven];
let fakeDataEight = questions[questionEight];
let fakeDataNine = questions[questionNine];
let fakeDataTen = questions[questionTen];
let fakeDataEleven = questions[questionEleven];
let fakeDataTwelve= questions[questionTwelve];
let fakeDataThirteen = questions[questionThirteen];
let fakeDataFourteen = questions[questionFourteen];
let fakeDataFifteen = questions[questionFifteen];

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
                        '#FF0000', '#FB9494', '#FFFFFF', '#73C6FF', '#0073C2'
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
                    data: fakeDataTwo,
                    backgroundColor: [
                        '#FF0000', '#FB9494', '#FFFFFF', '#73C6FF', '#0073C2'
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
                    data: fakeDataThree,
                    backgroundColor: [
                        '#FF0000', '#FB9494', '#FFFFFF', '#73C6FF', '#0073C2'
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
                    data: fakeDataFour,
                    backgroundColor: [
                        '#FF0000', '#FB9494', '#FFFFFF', '#73C6FF', '#0073C2'
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
                    data: fakeDataFive,
                    backgroundColor: [
                        '#FF0000', '#FB9494', '#FFFFFF', '#73C6FF', '#0073C2'
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