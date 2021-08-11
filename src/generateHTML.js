//create function to generate markdown for README
function generateHTML(data) {
  let finalTeam = "";
  for (var i = 0; i < data.length; i++) {
    let temp = "";
    // check what type of employee it is
    if (data[i].role == "Intern") {
      temp = `
        <div> name ${data[i].name} </div>
        <div> name ${data[i].id} </div>
        <div> name ${data[i].school} </div>
        `;
    } else if (data[i].role == "Enginner") {
      temp = `
        <div> name ${data[i].name} </div>
        <div> name ${data[i].id} </div>
        <div> name ${data[i].github} </div>
        `;
    }

    finalTeam = finalTeam + temp;
  }

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Bootstrap Theme Company</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./dist/styles.css" />
      </head>
      <body>
        <style>
          .jumbotron {
            background-color: #f1724c;
            color: #ffffff;
          }
        </style>
        <div class="jumbotron text-center">
          <h1>Zana's Team Profile Generator</h1>
          <p>We specialize in creating YOUR company profiles</p>
        </div>
        <div class="container-fluid text-center">
          <h2>TEAM PROFILES</h2>
          <h4>Who We Are</h4>
          <br />
          <div class="row">
          ${finalTeam}
          </div>
            
        </div>
    
        <footer>Created by Zana Mathuthu: August 2021</footer>
      </body>
    </html>
    `;
}

//initialization ==========
determineMemberIcon();

//module.exports makes this file's function below for generateHTML
