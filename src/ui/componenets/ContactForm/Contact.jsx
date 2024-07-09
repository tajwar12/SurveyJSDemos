import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./json";

function Contact() {
  const survey = new Model(json);

  survey.data = {
    question1: "dsdad",
    question2: "adas",
    question3: "dadas",
    question4: "adas",
    question5: "dasdasdasd",
    question6: "sdasdadas",
  };

  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return <Survey model={survey} />;
}

export default Contact;
