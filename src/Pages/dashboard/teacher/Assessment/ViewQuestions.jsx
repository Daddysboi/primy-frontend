import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import "../../../../assets/CourseCard.css";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  deleteQuestion,
  getQuestionsByAssessment,
  updateQuestion,
} from "../../../../redux/features/gradeSlice";
import { setAssessmentTitle } from "../../../../redux/features/assessmentSlice";

import { parseAnswerInt, parseArrayAnswerInt } from "../../../../utils/helpers";
import Loading from "../../../../components/Loading";
import Modal from "../../../../components/Modal";
import BackButton from "../../../../components/BackButton";
import Button from "../../../../components/Button";

const ViewQuestions = () => {
  const [editedQuestion, setEditedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const { assessmentTitle } = useAppSelector((state) => state.assessment);
  const { course: questions, isLoading } = useAppSelector(
    (state) => state.course
  );

  const fetchData = (assessmentId) => {
    dispatch(getQuestionsByAssessment(assessmentId));
  };

  useEffect(() => {
    fetchData(assessmentId);
  }, [assessmentId]);

  const handleInputChange = (field, value) => {
    setEditedQuestion({ ...editedQuestion, [field]: value });
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleEdit = (question) => {
    setEditedQuestion({ ...question, questionId: question?._id });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteQuestion(id));
    fetchData(assessmentId);
  };

  const saveEditQuestion = async (e) => {
    e.preventDefault();
    await dispatch(updateQuestion(editedQuestion));
    toast("Update Successful", { type: "success", autoClose: 1000 });
    fetchData(assessmentId);
    setIsModalOpen(false);
  };
  const navigationHandler = (link, title) => {
    dispatch(setAssessmentTitle(title));
    navigate(link);
  };

  return (
    <div className="container">
      <div className="d-flex">
        <BackButton />
        {user?.role === "teacher" && (
          <button
            className="btn btn-outline"
            onClick={() =>
              navigationHandler(
                `/dashboard/teacher/assessment/${assessmentId}/add-questions`,
                assessmentTitle
              )
            }
          >
            Add
            <MdNoteAdd size={20} />
          </button>
        )}
      </div>

      <div className="center">
        <h2>{assessmentTitle}</h2>
      </div>
      <div className="assessment-table-container">
        <table className="assessment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Options</th>
              <th>Correct Answer</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questions &&
              questions.map((question, i) => (
                <tr key={question?._id}>
                  <td>{i + 1}.</td>
                  <td>{question?.text}</td>
                  <td>{question?.options.join(", ")}</td>
                  <td>{question?.correctAnswer}</td>
                  <td>{question?.marks}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(question)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(question?._id)}
                    >
                      {isLoading === question?._id ? "Del..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {editedQuestion && (
        <Modal
          hasCloseBtn={true}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h2>Edit Question</h2>
          <div className="grid-wrapper">
            <form onSubmit={saveEditQuestion} className="form-wrapper">
              <div className="row">
                <div className="col-12">
                  <label>Question</label>
                  <textarea
                    required
                    rows={3}
                    value={editedQuestion.text}
                    onChange={(e) => handleInputChange("text", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label>Options</label>
                  <textarea
                    required
                    rows={3}
                    value={editedQuestion.options.join(",")}
                    onChange={(e) =>
                      handleInputChange(
                        "options",
                        parseArrayAnswerInt(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="">Correct Answer</label>
                  <input
                    required
                    type="text"
                    value={editedQuestion.correctAnswer}
                    onChange={(e) =>
                      handleInputChange(
                        "correctAnswer",
                        parseAnswerInt(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Marks</label>
                  <input
                    required
                    type="number"
                    value={editedQuestion.marks}
                    onChange={(e) =>
                      handleInputChange("marks", parseAnswerInt(e.target.value))
                    }
                  />
                </div>
              </div>
              <Button text="Update" loading={isLoading} />
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ViewQuestions;
