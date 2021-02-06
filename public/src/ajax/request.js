$(document).ready(function() {


  $('#sms-submit').on('click', (e) => {

    let number = $('#sms').val();
    let url = $('#url').attr('href');
    let data = number + ';' + url;

    return $.ajax({
      url: 'http://localhost:3000/sms',
      type: 'POST',
      data: { json: data },
      sucesss: 'Successfully sent to mobile #',
      error: 'failed to send'
    });
  });


});