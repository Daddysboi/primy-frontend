import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "./Button";

import { getAllTeachers } from "../services/userService";
import { assignTeacher } from "../services/courseService";

import AppSelectInput from "./SelectInput";
import courseList from "../data/courseList.json";
import classList from "../data/classList.json";

const AssignTeacherCourse = () => {
  var initialState = {
    subject: "",
    class: "",
    teacherId: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [selectedClass, setSelectedClass] = useState("");

  const { data: teachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getAllTeachers(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "class") {
      setSelectedClass(value);
      setFormData((prevData) => ({ ...prevData, subject: "" }));
    }
  };
  const mutation = useMutation({
    mutationFn: async () => await assignTeacher(formData),
    onSuccess: async () => {
      setIsAssigning(false);
      setFormData(initialState);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  let options =
    selectedClass && courseList[selectedClass] !== "Select"
      ? courseList[selectedClass]
      : [];

  const isJSSorSSClass = (className) => {
    return className.startsWith("JSS") || className.startsWith("SS");
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1>Assign Teacher</h1>
      </div>

      <AppSelectInput
        label="Class"
        name="class"
        value={formData.class}
        options={classList}
        onChange={handleChange}
        required={true}
      />

      {selectedClass && isJSSorSSClass(selectedClass) && (
        <AppSelectInput
          label={"Subject"}
          name="subject"
          value={formData.subject}
          options={options}
          onChange={handleChange}
          required={true}
        />
      )}

      <div className="col-12 ">
        <label>Teacher</label>
        <select
          name="teacherId"
          required
          value={formData?.teacherId}
          onChange={handleChange}
        >
          <option value="">Select Teacher</option>
          {teachers &&
            teachers.map((teacher) => (
              <option key={teacher?._id} value={teacher?._id}>
                {`${teacher?.firstName} ${teacher?.middleName} ${teacher?.lastName}`}
              </option>
            ))}
        </select>
      </div>

      <Button loading={mutation.isPending} text={`Assign`} />
    </form>
  );
};

AssignTeacherCourse.propTypes = {
  setIsAssigning: PropTypes.func,
};

export default AssignTeacherCourse;
