import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import { ComponentCollection } from "survey-core";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

//Register new "country" component
ComponentCollection.Instance.add({
  //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
  name: "country",
  //The text that shows on toolbox
  title: "Country",
  //The actual question that will do the job
  questionJSON: {
    type: "dropdown",
    placeholder: "Select a country...",
    choicesByUrl: {
      url: "https://surveyjs.io/api/CountriesExample",
    },
  },
});
function SurveyCreatorRenderComponent() {
  const options = {
    showLogicTab: true,
  };
  const creator = new SurveyCreator(options);
  creator.JSON = {
    elements: [
      {
        type: "country",
        name: "question1",
      },
    ],
  };
  //Select the order table component
  creator.selectedElement = creator.survey.getAllQuestions()[0];
  //Show property grid
  creator.rightContainerActiveItem("property-grid");
  return <SurveyCreatorComponent creator={creator} />;
}

export default SurveyCreatorRenderComponent;
