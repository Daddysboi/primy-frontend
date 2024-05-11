import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getQuestionsByAssessment,
  nextAssessment,
  startAssessment,
} from "../../service/courseService";
import { useStoreContext } from "../../Contexts/StoreContext";
import StartCard from "../../components/StartCard";
import QuestionCard from "../../components/QuestionCard";
import Timer from "../../components/Timer";
import EndAssessmentCard from "../../components/EndAssessmentCard";

const StudentTestPage = () => {
  const { assId } = useParams();
  const {
    state: {
      assessment_info: { duration },
    },
    dispatch,
  } = useStoreContext();

  if (!assId) {
    return;
  }

  //HDR:   STATES
  const [assessmentQuestion, setAssessmentQuestion] = useState(null);
  const [endAssessment, setEndAssessment] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await getQuestionsByAssessment(assId);
      if (data) {
        dispatch({
          type: "SET_QUEST_LENGTH",
          payload: data.length,
        });
      }
    };

    getQuestions();
  }, [assId]);

  //HDR:   FUNCTIONS HANDLERS
  const startAssessmentHandler = async () => {
    setLoading(true);
    const data = await startAssessment(assId);
    setQuestionNumber(1);
    setAssessmentQuestion(data?.question);
    setLoading(false);
  };

  const nextQuestionHandler = async (ans) => {
    setLoading(true);
    const data = await nextAssessment(assId, { studentOption: ans });
    if (data?.message) {
      setEndAssessment(data);
    }
    if (data?.question) {
      setQuestionNumber((prev) => prev + 1);
      setAssessmentQuestion(data?.question);
    }

    setLoading(false);
  };

  return (
    <>
      {endAssessment ? (
        <div className="center">
          <EndAssessmentCard data={endAssessment} />
        </div>
      ) : assessmentQuestion ? (
        <div className="flex-col container">
          <div className="align-end">
            <Timer duration={duration} onTime={() => nextQuestionHandler("")} />
          </div>
          <div className="align-center">
            <QuestionCard
              question={assessmentQuestion}
              onClick={nextQuestionHandler}
              loading={loading}
              questionNumber={questionNumber}
            />
          </div>
        </div>
      ) : (
        <div className="center">
          <StartCard
            duration={duration}
            onClick={startAssessmentHandler}
            loading={loading}
          />
        </div>
      )}
    </>
  );
};

export default StudentTestPage;
