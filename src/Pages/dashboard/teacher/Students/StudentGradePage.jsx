import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../Contexts/StoreContext";
import {
  getAssessmentByCourse,
  getStudentResult,
} from "../../service/courseService";
import AdminHeader from "../components/AdminHeader";
import StudentAssessmentCard from "../../components/StudentAssessmentCard";
import StudentResultCard from "../../components/StudentResultCard";
import Modal from "../../components/Modal";
import ProgressBar from "../../components/ProgressBar";

const StudentGradePage = () => {
  const {
    state: { user_info },
  } = useStoreContext();
  const [searchValue, setSearchValue] = useState("");
  const [assessment, setAssessment] = useState([]);
  const [loading, setLoading] = useState("");
  const [results, setResults] = useState(null);
  const [title, setTitle] = useState("");

  const [openModal, setOpenModal] = useState(false);

  let courseId = user_info?.course?._id;

  useEffect(() => {
    const getAssessment = async () => {
      if (courseId !== undefined) {
        const data = await getAssessmentByCourse(courseId);
        if (data) {
          setAssessment(data);
        }
      }
    };
    getAssessment();
  }, [courseId]);

  const viewResultHandler = async (id, title) => {
    setLoading(id);
    const res = await getStudentResult(id);
    setTitle(title);
    setLoading("");
    setOpenModal(true);
    setResults(res);
  };

  let PercentScore = results?.percentageScore ?? "0%";
  let convertPercent = parseInt(PercentScore?.split("%")[0]);

  return (
    <>
      <div className="container">
        <div className="center mb-2 sticky">
          <h2>Student Grades</h2>
        </div>
        <AdminHeader
          type="assessment"
          onChange={(e) => setSearchValue(e.target?.value)}
          value={searchValue}
        />

        <ul className="row">
          {assessment &&
            assessment
              ?.filter((val) => {
                let searchVal = searchValue.toLowerCase();
                if (
                  val.assessmentTittle.toLowerCase().startsWith(searchVal) ||
                  val.teacher.firstName.toLowerCase().startsWith(searchVal)
                ) {
                  return val;
                }
              })
              ?.map((ass, index) => {
                let currentDate = new Date();
                let startDate = new Date(ass.startTime);

                let disabled = currentDate < startDate;

                return (
                  <div className="col-md-4 mb-2" key={index}>
                    <StudentResultCard
                      title={ass?.assessmentTittle}
                      assignBy={ass?.teacher?.firstName}
                      onClick={() =>
                        viewResultHandler(ass?._id, ass?.assessmentTittle)
                      }
                      loading={ass?._id === loading ? true : false}
                      disabled={disabled}
                    />
                  </div>
                );
              })}
        </ul>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="center mb-2">
          <h3>{title}</h3>
        </div>
        <div className="result_cont d-flex">
          <div className="total">
            <p>Total Score:</p>
            <h3>{results?.totalScore}</h3>
          </div>
          <div>
            <ProgressBar percentage={convertPercent} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StudentGradePage;
