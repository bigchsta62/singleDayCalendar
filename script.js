$(document).ready(function () {

    // use moment JS to display todays date
    const now = moment().subtract(16, 'hours').format('[Today is] dddd, MMMM Do hA');
    let today = $('#currentDay');
    console.log(now);
    today.text(now);
    let tbContainer = $('#tbContainer')
    let row = $('<div class="form-row col-10">');
    let label = $('<label class="col-1 text-wrap" time-stamp="hour">8</label>');
    let textArea = $('<textarea class="col-7 form-control" id="textArea" rows="3"></textarea>');
    let btn = $('<button class="col-2 btn btn-secondary"><i style="font-size:36px" class="far">&#xf0c7;</i></button>');

    // makes a set number of rows based on the amount of hours 
    for (let hour = 8; hour <= 17; hour++) {

        row = $('<div class="form-row col-10">');
        label = $('<label class="col-1 text-wrap" time-stamp="hour">8</label>');
        textArea = $('<textarea class="col-7 form-control" id="textArea" rows="3"></textarea>');
        btn = $('<button class="col-2 btn btn-secondary"><i style="font-size:36px" class="far">&#xf0c7;</i></button>');
        //Make row with with all the pieces
        row.append(label);
        row.append(textArea)
        row.append(btn);

        //adds am or pm to the label text based on noon
        let timeBox = hour;
        let antiPost = "";
        if (hour > 12) {
            timeBox = hour - 12;
            antiPost = "pm";
        } else {
            hour = hour;
            antiPost = "am";
        }

        label.text(`${timeBox} ${antiPost}`);


       
        //adds row to the container until the loop ends
        tbContainer.append(row);
    };


    










});