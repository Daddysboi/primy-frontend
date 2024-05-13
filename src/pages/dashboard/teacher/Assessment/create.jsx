import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  createAssessment,
  getTeacherGrades,
} from "../../../../redux/features/gradeSlice";

import BackButton from "../../../../components/BackButton";
import Button from "../../../../components/Button";
import { getCurrentDate } from "../../../../utils/helpers";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { grades } = useAppSelector((state) => state.grade);

  useEffect(() => {
    dispatch(getTeacherGrades());
  }, []);

  const [formData, setFormData] = useState({
    courseId: "",
    assessmentTittle: "",
    startTime: getCurrentDate(),
    endTime: getCurrentDate(),
    maximumScore: 100,
    duration: 60,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.courseId == "") {
      toast("Select a course", { type: "error", autoClose: 1000 });
      return;
    }

    const res = createAssessment(formData);

    if (res) {
      navigate("/dashboard/teacher/assessment");
    }
  };
  return (
    <div>
      <div className="spacing-wrapper mb-2">
        <BackButton />
      </div>
      <div className="grid-wrapper">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="spacing-wrapper">
            <h1 className="my-3">
              <strong>Create New Assessment</strong>
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="courseId">Course ID:</label>
              <select
                id="courseId"
                name="courseId"
                value={formData?.courseId}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                {grades ? (
                  grades.map((grade, i) => (
                    <option key={i} value={grade?.grade?._id}>
                      {`${grade?.grade?.gradeTittle} (${grade?.grade?.gradeCode})`}
                    </option>
                  ))
                ) : (
                  <option value="">Select a course</option>
                )}
                {/* Add your course options dynamically based on your data */}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="assessmentTittle">Assessment Title:</label>
              <input
                type="text"
                id="assessmentTittle"
                name="assessmentTittle"
                value={formData?.assessmentTittle}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="startTime">Start Time:</label>
              <input
                type="date"
                id="startTime"
                name="startTime"
                value={formData?.startTime}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="endTime">End Time:</label>
              <input
                type="date"
                id="endTime"
                name="endTime"
                value={formData?.endTime}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="maximumScore">Maximum Score:</label>
              <input
                type="number"
                id="maximumScore"
                name="maximumScore"
                max={100}
                min={1}
                value={formData?.maximumScore}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="duration">Duration (minutes):</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData?.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Create;
