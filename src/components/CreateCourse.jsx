import { useState } from "react";
import Button from "../../../../educativ/educativ-frontend/src/components/Button";
import PropTypes from "prop-types";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const CreateCourse = ({
  setIsCreating,
  editing = false,
  course = undefined,
}) => {
  if (course !== undefined) {
    var initialState = {
      courseId: course?._id,
      courseTittle: course?.courseTittle,
      courseCode: course?.courseCode,
      courseStatus: course?.courseStatus,
    };
  } else {
    initialState = {
      courseTittle: "",
      courseCode: "",
      courseStatus: "",
    };
  }

  const [formData, setFormData] = useState(initialState);

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: async () => await createEditCourse(formData, editing),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
      setIsCreating(false);
      setFormData(initialState);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <div className="grid-wrapper">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>Create Course</h1>
            </center>
          </div>

          <div className="col-12 ">
            <label>Course Title</label>
            <input
              type="text"
              name="courseTittle"
              required
              value={formData?.courseTittle}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 ">
            <label>Course Code</label>
            <input
              type="text"
              name="courseCode"
              required
              value={formData?.courseCode}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 ">
            <label>Status</label>
            <select
              name="courseStatus"
              required
              value={formData?.courseStatus}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        </div>

        <Button loading={mutation.isPending} text={`Save`} />
      </form>
    </div>
  );
};

CreateCourse.propTypes = {
  setIsCreating: PropTypes.func,
  editing: PropTypes.bool,
  course: PropTypes.shape({
    _id: PropTypes.string,
    courseTittle: PropTypes.string,
    courseCode: PropTypes.string,
    courseStatus: PropTypes.string,
  }),
};

export default CreateCourse;
