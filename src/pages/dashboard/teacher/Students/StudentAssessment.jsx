import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../Contexts/StoreContext";
import { useQuery } from "@tanstack/react-query";
import { getAssessmentByCourse } from "../../service/courseService";
import Loading from "../../components/Loading";
import StudentAssessmentCard from "../../components/StudentAssessmentCard";
import AdminHeader from "../components/AdminHeader";

const StudentAssessment = () => {
  const {
    state: { user_info },
  } = useStoreContext();
  const [searchValue, setSearchValue] = useState("");
  const [assessment, setAssessment] = useState([]);
  const [loading, setLoading] = useState(false);

  let courseId = user_info?.course?._id;

  useEffect(() => {
    const getAssessment = async () => {
      if (courseId !== undefined) {
        setLoading(true);
        const data = await getAssessmentByCourse(courseId);
        if (data) {
          setLoading(false);
          setAssessment(data);
        }
      }
    };
    getAssessment();
  }, [courseId]);

  return (
    <div className="container">
      <center className="sticky mb-2">
        <h2>Student Assessment</h2>
      </center>

      <AdminHeader
        type="assessment"
        onChange={(e) => setSearchValue(e.target?.value)}
        value={searchValue}
      />

      <div style={{ marginTop: "2rem" }} className="grid-wrapper">
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loading />
          </div>
        ) : (
          <div className="row">
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
                ?.map((ass, index) => (
                  <div className="col-md-4 mb-2" key={index}>
                    <StudentAssessmentCard assessment={ass} />
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentAssessment;
