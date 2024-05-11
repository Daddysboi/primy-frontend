import "../assets/ResultCard.css";
import PropTypes from "prop-types";

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <h3>
        {result.student?.firstName} {result.student?.lastName}
      </h3>
      <p>Total Score: {result?.totalScore}</p>
      <p>Percentage Score: {result?.percentageScore}</p>
      <p>Submitted On: {new Date(result?.createAt).toLocaleString()}</p>
    </div>
  );
};

ResultCard.propTypes = {
  result: PropTypes.shape({
    student: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    totalScore: PropTypes.string,
    percentageScore: PropTypes.string,
    createAt: PropTypes.string,
  }),
};

export default ResultCard;
