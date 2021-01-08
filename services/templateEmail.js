const moment = require('moment');

module.exports = (body) => {
  const { user, wayFlight, returnFlight, search } = body;
  const wayDate = moment.utc(wayFlight.depTime).format('LL');
  const returnDate = moment.utc(returnFlight.depTime).format('LL');
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <style>
      .card{
        margin-top: 20px;
      }
    .card-header, .card-footer{
      background: #0078d2; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #0078d2,
      #6dd5fa,
      #ffffff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #0078d2,
      #6dd5fa,
      #ffffff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .company{
      width: 120px;
      height: 20px
    }
    .card-body{
      padding: 0px;
    }
    .company-title{
      font-size: 18px;
      color: #999999;
      letter-spacing: 3px;
    }
    .fa-plane-departure{
      color: #0078d2;
    }

    .card-body{
      color: #36495a;
    }

    .body-title{
      padding: 20px;
    }
    .information{
      padding: 20px;
      background-color: #999999;
    }

    .information p{
      color: #fff
    }

    .barcode{

    left: 8px;
    bottom: 6px;
    height: 30px;
    width: 90px;
    background: #222;
    box-shadow: inset 0 1px 0 #fff, inset -2px 0 0 #fff,
      inset -4px 0 0 #222,
      inset -5px 0 0 #fff,
      inset -6px 0 0 #222,
      inset -9px 0 0 #fff,
      inset -12px 0 0 #222,
      inset -13px 0 0 #fff,
      inset -14px 0 0 #222,
      inset -15px 0 0 #fff,
      inset -16px 0 0 #222,
      inset -17px 0 0 #fff,
      inset -19px 0 0 #222,
      inset -20px 0 0 #fff,
      inset -23px 0 0 #222,
      inset -25px 0 0 #fff,
      inset -26px 0 0 #222,
      inset -26px 0 0 #fff,
      inset -27px 0 0 #222,
      inset -30px 0 0 #fff,
      inset -31px 0 0 #222,
      inset -33px 0 0 #fff,
      inset -35px 0 0 #222,
      inset -37px 0 0 #fff,
      inset -40px 0 0 #222,
      inset -43px 0 0 #fff,
      inset -44px 0 0 #222,
      inset -45px 0 0 #fff,
      inset -46px 0 0 #222,
      inset -48px 0 0 #fff,
      inset -49px 0 0 #222,
      inset -50px 0 0 #fff,
      inset -52px 0 0 #222,
      inset -54px 0 0 #fff,
      inset -55px 0 0 #222,
      inset -57px 0 0 #fff,
      inset -59px 0 0 #222,
      inset -61px 0 0 #fff,
      inset -64px 0 0 #222,
      inset -66px 0 0 #fff,
      inset -67px 0 0 #222,
      inset -68px 0 0 #fff,
      inset -69px 0 0 #222,
      inset -71px 0 0 #fff,
      inset -72px 0 0 #222,
      inset -73px 0 0 #fff,
      inset -75px 0 0 #222,
      inset -77px 0 0 #fff,
      inset -80px 0 0 #222,
      inset -82px 0 0 #fff,
      inset -83px 0 0 #222,
      inset -84px 0 0 #fff,
      inset -86px 0 0 #222,
      inset -88px 0 0 #fff,
      inset -89px 0 0 #222,
      inset -90px 0 0 #fff;
  }

  .card-footer{
    color: #fff;
  }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card ">
          <div class="card-header">
            <div class='d-flex justify-content-between'> 
              <img class='img-fluid company' src=${wayFlight.company}></img>
              <div class='company-title'>BORDING PASS</div>
            </div>
          </div>
          <div class="card-body">
            <div class="body-title">
              <h2 class="card-title">${wayFlight.from.toUpperCase()} <i class="fas fa-plane-departure"></i> ${wayFlight.to.toUpperCase()}</h2>
            </div>
            <div class="information">
              <div class="d-flex justify-content-between">
                <div>PASSENGER<p>${user.firstName} ${user.lastName}</p></div>
                <div>TYPE<p>${wayFlight.type}</p></div>
                <div>FLIGHT N°<p>${wayFlight._id
                  .slice(0, 8)
                  .toUpperCase()}</p></div>
                <div>GATE<p>D12</p></div>
                
              </div>
              <div>BORDING TIME<p>${wayDate}</p></div>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between">
            Seat and Passenger (${
              search.persons
            }): Present the ticket at the kiosk
            <div class="barcode slip"></div>
          </div>
      </div>
      ${
        Object.keys(returnFlight).length === 0
          ? ''
          : `
      <div class="card ">
        <div class="card-header">
          <div class='d-flex justify-content-between'> 
            <img class='img-fluid company' src=${returnFlight.company}></img>
            <div class='company-title'>BORDING PASS</div>
          </div>
        </div>
        <div class="card-body">
          <div class="body-title">
            <h2 class="card-title">${returnFlight.from.toUpperCase()} <i class="fas fa-plane-departure"></i> ${returnFlight.to.toUpperCase()}</h2>
          </div>
          <div class="information">
            <div class="d-flex justify-content-between">
              <div>PASSENGER<p>${user.firstName} ${user.lastName}</p></div>
              <div>TYPE<p>${returnFlight.type}</p></div>
              <div>FLIGHT N°<p>${returnFlight._id
                .slice(0, 8)
                .toUpperCase()}</p></div>
              <div>GATE<p>D12</p></div>
              
            </div>
            <div>BORDING TIME<p>${returnDate}</p></div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
        Seat and Passenger (${search.persons}): Present the ticket at the kiosk
          <div class="barcode slip"></div>
        </div>
      </div>`
      }
    </div>
  </body>
</html>
  `;
};
