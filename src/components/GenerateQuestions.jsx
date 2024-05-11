import { useState } from "react";
import { generateQuestions } from "../services/AiService";
import { toast } from "react-toastify";
import Button from "./Button";
import PropTypes from "prop-types";

const GenerateQuestions = ({ saveQuestions }) => {
  const [formData, setFormData] = useState({
    topic: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.topic == "") {
      toast("Enter a topic", { type: "error", autoClose: 1000 });
      return;
    }
    setLoading(true);
    var res = await generateQuestions(formData.topic);
    await saveQuestions(res);
    setLoading(false);
  };
  return (
    <>
      <div className="grid-wrapper">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="spacing-wrapper">
            <h1 className="my-3">
              <strong>Generate with A.I</strong>
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="assessmentTittle">Topic:</label>
              <input
                type="text"
                id="topic"
                name="topic"
                placeholder="Enter a topic"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button text="Generate" loading={loading} />
        </form>
      </div>
    </>
  );
};

GenerateQuestions.propTypes = {
  saveQuestions: PropTypes.func,
};

export default GenerateQuestions;
