const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const upload = multer({ dest: './db/uploads' });
const { nexmo } = require('./lib/sendSMS');

const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, './../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {

  let data = req.body.json.split(';');
  let outgoing = '1' + data[0].toString();
  let url = data[1];
  let $res = res;

  nexmo.message.sendSms('18777506942', outgoing, url, (err, res) => {
    if (err) {
      console.log('err = ', err);
      $res.send(400);
    } else {
      if (res.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
        $res.send(201);
      } else {
        console.log(`Message failed with error: ${res.messages[0]['error-text']}`);
        $res.send(400);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Listening for request at http://localhost:${port}/`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcHAuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJtdWx0ZXIiLCJib2R5UGFyc2VyIiwiY29ycyIsInBhdGgiLCJ1cGxvYWQiLCJkZXN0IiwibmV4bW8iLCJhcHAiLCJwb3J0IiwidXNlIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJwb3N0IiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJzcGxpdCIsIm91dGdvaW5nIiwidG9TdHJpbmciLCJ1cmwiLCIkcmVzIiwibWVzc2FnZSIsInNlbmRTbXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsIm1lc3NhZ2VzIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxNQUFNQyxTQUFTRCxRQUFRLFFBQVIsQ0FBZjtBQUNBLE1BQU1FLGFBQWFGLFFBQVEsYUFBUixDQUFuQjtBQUNBLE1BQU1HLE9BQU9ILFFBQVEsTUFBUixDQUFiO0FBQ0EsTUFBTUksT0FBT0osUUFBUSxNQUFSLENBQWI7QUFDQSxNQUFNSyxTQUFTSixPQUFPLEVBQUVLLE1BQU0sY0FBUixFQUFQLENBQWY7QUFDQSxNQUFNLEVBQUVDLEtBQUYsS0FBWVAsUUFBUSxlQUFSLENBQWxCOztBQUVBLE1BQU1RLE1BQU1ULFNBQVo7QUFDQSxNQUFNVSxPQUFPLElBQWI7O0FBRUFELElBQUlFLEdBQUosQ0FBUVAsTUFBUjtBQUNBSyxJQUFJRSxHQUFKLENBQVEsR0FBUixFQUFhWCxRQUFRWSxNQUFSLENBQWVQLEtBQUtRLElBQUwsQ0FBVUMsU0FBVixFQUFxQixjQUFyQixDQUFmLENBQWI7QUFDQUwsSUFBSUUsR0FBSixDQUFRUixXQUFXWSxJQUFYLEVBQVI7QUFDQU4sSUFBSUUsR0FBSixDQUFRUixXQUFXYSxVQUFYLENBQXNCLEVBQUNDLFVBQVUsS0FBWCxFQUF0QixDQUFSOztBQUVBUixJQUFJUyxJQUFKLENBQVMsTUFBVCxFQUFpQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYzs7QUFFN0IsTUFBSUMsT0FBT0YsSUFBSUcsSUFBSixDQUFTUCxJQUFULENBQWNRLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBWDtBQUNBLE1BQUlDLFdBQVcsTUFBTUgsS0FBSyxDQUFMLEVBQVFJLFFBQVIsRUFBckI7QUFDQSxNQUFJQyxNQUFNTCxLQUFLLENBQUwsQ0FBVjtBQUNBLE1BQUlNLE9BQU9QLEdBQVg7O0FBRUFaLFFBQU1vQixPQUFOLENBQWNDLE9BQWQsQ0FBc0IsYUFBdEIsRUFBcUNMLFFBQXJDLEVBQStDRSxHQUEvQyxFQUFvRCxDQUFDSSxHQUFELEVBQU1WLEdBQU4sS0FBYztBQUNoRSxRQUFJVSxHQUFKLEVBQVM7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JGLEdBQXRCO0FBQ0FILFdBQUtNLElBQUwsQ0FBVSxHQUFWO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsVUFBSWIsSUFBSWMsUUFBSixDQUFhLENBQWIsRUFBZ0IsUUFBaEIsTUFBOEIsR0FBbEMsRUFBdUM7QUFDckNILGdCQUFRQyxHQUFSLENBQVksNEJBQVo7QUFDQUwsYUFBS00sSUFBTCxDQUFVLEdBQVY7QUFDRCxPQUhELE1BR087QUFDTEYsZ0JBQVFDLEdBQVIsQ0FBYSw4QkFBNkJaLElBQUljLFFBQUosQ0FBYSxDQUFiLEVBQWdCLFlBQWhCLENBQThCLEVBQXhFO0FBQ0FQLGFBQUtNLElBQUwsQ0FBVSxHQUFWO0FBQ0Q7QUFDRjtBQUNGLEdBYkQ7QUFjRCxDQXJCRDs7QUF1QkF4QixJQUFJMEIsTUFBSixDQUFXekIsSUFBWCxFQUFpQixNQUFNO0FBQ3JCcUIsVUFBUUMsR0FBUixDQUFhLDZDQUE0Q3RCLElBQUssR0FBOUQ7QUFDRCxDQUZEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiAnLi9kYi91cGxvYWRzJ30pO1xuY29uc3QgeyBuZXhtbyB9ID0gcmVxdWlyZSgnLi9saWIvc2VuZFNNUycpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gMzAwMDtcblxuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLy4uL3B1YmxpYy8nKSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpO1xuXG5hcHAucG9zdCgnL3NtcycsIChyZXEsIHJlcykgPT4ge1xuXG4gIGxldCBkYXRhID0gcmVxLmJvZHkuanNvbi5zcGxpdCgnOycpO1xuICBsZXQgb3V0Z29pbmcgPSAnMScgKyBkYXRhWzBdLnRvU3RyaW5nKCk7XG4gIGxldCB1cmwgPSBkYXRhWzFdO1xuICBsZXQgJHJlcyA9IHJlcztcblxuICBuZXhtby5tZXNzYWdlLnNlbmRTbXMoJzE4Nzc3NTA2OTQyJywgb3V0Z29pbmcsIHVybCwgKGVyciwgcmVzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gICAgICAkcmVzLnNlbmQoNDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlcy5tZXNzYWdlc1swXVsnc3RhdHVzJ10gPT09IFwiMFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICRyZXMuc2VuZCgyMDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYE1lc3NhZ2UgZmFpbGVkIHdpdGggZXJyb3I6ICR7cmVzLm1lc3NhZ2VzWzBdWydlcnJvci10ZXh0J119YCk7XG4gICAgICAgICRyZXMuc2VuZCg0MDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgZm9yIHJlcXVlc3QgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xufSk7Il19