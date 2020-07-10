$(document).ready(function () {

    // use moment JS to display todays date
    const now = moment().format('[Today is] dddd, MMMM Do hA');
    let today = $('#currentDay');
    // console.log(now);
    today.text(now);

    //Gives me a start time for the value i'll have placed in the label
    const startTime = moment().startOf('day').format();

    //used to compare against startTime to dynamically change things
    const current = moment().format('H');
    // console.log(current);

    let tbContainer = $('#tbContainer');
    tbContainer.empty();

    let textID = 0;
    // makes a set number of rows based on the amount of hours 
    //and also current color function.
    for (let i = 8; i < startTime.length - 7 ; i++) {

        const id = ++textID;

        row = $('<div class="form-row col-10">');
        label = $('<label class="col-1 text-wrap" id="hour">0</label>');
        // WHEN I click into a timeblock
        // THEN I can enter an event
        textArea = $('<textarea type="text" name="notes" placeholder="notes" class="col-7 form-control" rows="3" id="textArea' + id + '"></textarea>');
        btn = $('<button type="submit" class="col-2 btn btn-primary" id="saveBtn"><i style="font-size:36px" class="far">&#xf0c7;</i></button>');
        //Make row with with all the pieces
        row.append(label);
        row.append(textArea)
        row.append(btn);

        //adds am or pm to the label text based on noon
        let timeBox = i;
        // console.log(i);
        let antiPost = "";
        if (i > 12) {
            timeBox = i - 12;
            antiPost = "pm";
        } else {
            i = i;
            antiPost = "am";
        }

        label.text(`${timeBox} ${antiPost}`);

        currentColor(textArea);

        //adds row to the container until the loop ends
        tbContainer.append(row);

        // // WHEN I view the timeblocks for that day
        // //THEN each timeblock is color coded to indicate whether it is in the past, present, or future
        function currentColor(text) {
            let hour = i;
            // console.log(hour, JSON.parse(current))

            if (hour < JSON.parse(current)) {

                //time has passed this block, so change the background color to
                textArea.css('background-color', '#d9534f');
                textArea.attr('readonly', 'true');
                btn.addClass('disabled btn-danger')
            } else if (hour > JSON.parse(current)) {
                //time has not passed this block, so change the background color to   
                textArea.css('background-color', '#5cb85c');
                btn.addClass('btn-success');
            } else {
                //current time
                textArea.addClass('present');
            }

        }
    };

    //puts saved value in textArea from local storage
    const lastNotes = JSON.parse(localStorage.getItem('notes'));
    $('#textArea1').append(lastNotes.text1);
    $('#textArea2').append(lastNotes.text2);
    $('#textArea3').append(lastNotes.text3);
    $('#textArea4').append(lastNotes.text4);
    $('#textArea5').append(lastNotes.text5);
    $('#textArea6').append(lastNotes.text6);
    $('#textArea7').append(lastNotes.text7);
    $('#textArea8').append(lastNotes.text8);
    $('#textArea9').append(lastNotes.text9);
    // console.log(lastNotes);

    // WHEN I click the save button for that timeblock
    const saveBtn = $('.btn');

    saveBtn.on('click', function () {
        // THEN the text for that event is saved in local storage
        console.log('button works')
        event.preventDefault();

        const savedNotes = {
            text1: $('#textArea1').val().trim(),
            text2: $('#textArea2').val().trim(),
            text3: $('#textArea3').val().trim(),
            text4: $('#textArea4').val().trim(),
            text5: $('#textArea5').val().trim(),
            text6: $('#textArea6').val().trim(),
            text7: $('#textArea7').val().trim(),
            text8: $('#textArea8').val().trim(),
            text9: $('#textArea9').val().trim()
        };

        localStorage.setItem('notes', JSON.stringify(savedNotes));
        console.log(savedNotes);

    });

});