const express = require("express");
const fs = require("fs");
const port = process.env.port || 3030;
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const { v4: uuidv4 } = require("uuid");
const app = express();
const path = require("path");
const dataFilePath = path.join(__dirname, "./init/data.js");
const initData = require("./init/data.js");

let Allquestion = initData.data;
let subject = new Set();

for (let subj of Allquestion) {
  subject.add(subj.subject);
}

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

//indexing
app.get("/", (req, res) => {
  res.render("./listing/index.ejs", { Allquestion });
});

//create new
app.get("/listings/new", (req, res) => {
  res.render("./listing/new.ejs", { subject });
});

//generate
app.get("/listings/generate", (req, res) => {
  res.render("./listing/generate.ejs", { subject });
});

//edit route
app.get("/listings/:id/edit", (req, res) => {
  let { id } = req.params;
  let listing = Allquestion.find((p) => id === p.id);
  console.log({ listing });
  res.render("./listing/edit.ejs", { listing, subject });
});

//adding new question in all question
app.post("/listings", (req, res) => {
  let { question, subject, topic, difficulty, marks } = req.body;
  let id = uuidv4();
  let newQuestion = { id, question, subject, topic, difficulty, marks };

  // Add the new question to the existing data
  Allquestion.push(newQuestion);

  // Write the updated data back to data.js file
  fs.writeFile(
    dataFilePath,
    `const sampleListings = ${JSON.stringify(
      Allquestion,
      null,
      2
    )};   module.exports = { data: sampleListings };`,
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error writing data to file");
      } else {
        res.redirect("/");
      }
    }
  );
});

//edit question
app.patch("/listings/:id", (req, res) => {
  let { id } = req.params;

  let newquestion = req.body.question;
  let newsubject = req.body.subject;
  let newtopic = req.body.topic;
  let newdiff = req.body.difficulty;
  let newmarks = req.body.marks;

  let post = Allquestion.find((p) => id === p.id);
  post.question = newquestion;
  post.subject = newsubject;
  post.topic = newtopic;
  post.difficulty = newdiff;
  post.marks = newmarks;
  console.log(post);
  const indexToEdit = Allquestion.findIndex((item) => item.id === id);

  // Write the updated data back to data.js file
  fs.writeFile(
    dataFilePath,
    `const sampleListings = ${JSON.stringify(
      Allquestion,
      null,
      2
    )};   module.exports = { data: sampleListings };`,
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error writing data to file");
      } else {
        res.redirect("/");
        //res.status(404).send('Question not found'); // Respond if the question is not found
      }
    }
  );
});

//delete question
app.delete("/listings/:id/", (req, res) => {
  let { id } = req.params;
  // Allquestion = Allquestion.filter((p) => id != p.id);
  // res.redirect("/");

  const indexToDelete = Allquestion.findIndex((item) => item.id === id);

  if (indexToDelete !== -1) {
    // Remove the entry from the array
    Allquestion.splice(indexToDelete, 1);

    // Write the updated data back to data.js file
    fs.writeFile(
      dataFilePath,
      `const sampleListings = ${JSON.stringify(
        Allquestion,
        null,
        2
      )};   module.exports = { data: sampleListings };`,
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error writing data to file");
        } else {
          res.redirect("/");
          //res.sendStatus(204); // Respond with success status
        }
      }
    );
  } else {
    res.status(404).send("Entry not found"); // Respond if the entry is not found
  }
});

app.post("/listings/generate", (req, res) => {
  let subject = req.body.subject;
  let noOfEasy = Number(req.body.Easy);
  let noOfMedium = Number(req.body.Medium);
  let noOfHard = Number(req.body.Hard);
  let maxMarks = Number(req.body.max_marks);

  let generatedQuestions = [];
  let easyQuestions = [];
  let mediumQuestions = [];
  let hardQuestions = [];
  let currentMarks = 0;

  const sub_ques = Allquestion.find((p) => subject === p.subject);

  for (listing of Allquestion) {
    if (listing.subject === subject && listing.difficulty === "Easy") {
      easyQuestions.push(listing);
    } else if (listing.subject === subject && listing.difficulty === "Medium") {
      mediumQuestions.push(listing);
    } else if (listing.subject === subject && listing.difficulty === "Hard") {
      hardQuestions.push(listing);
    }
  }
  let totalMarks = 0;

  function setQuestions(questionArray, percentageOfDifficulty) {
    let maxMarksOfDifficulty = Math.floor(
      maxMarks * (percentageOfDifficulty / 100)
    );

    while (
      maxMarksOfDifficulty > 0 &&
      questionArray.length > 0 &&
      totalMarks < maxMarks
    ) {
      let randomIndex = Math.floor(Math.random() * questionArray.length);
      let selectedQuestion = questionArray[randomIndex];

      if (selectedQuestion.marks <= maxMarksOfDifficulty) {
        generatedQuestions.push(selectedQuestion);
        maxMarksOfDifficulty = maxMarksOfDifficulty - selectedQuestion.marks;
        totalMarks += selectedQuestion.marks;
        questionArray.splice(randomIndex, 1);
      } else {
        questionArray.splice(randomIndex, 1);
      }
    }
  }

  setQuestions(easyQuestions, noOfEasy);
  setQuestions(mediumQuestions, noOfMedium);
  setQuestions(hardQuestions, noOfHard);

  res.render("./listing/generated_paper.ejs", { generatedQuestions });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
