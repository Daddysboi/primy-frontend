import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getResultsByAssessment } from "../../../../redux/features/assessmentSlice";
import { setAssessmentTitle } from "../../../../redux/features/assessmentSlice";

import Loading from "../../../../components/Loading";
import BackButton from "../../../../components/BackButton";
import ResultCard from "../../../../components/ResultCard";

const ShowResult = () => {
  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, assessmentTitle } = useAppSelector((state) => state.user);
  const { isLoading } = useAppSelector((state) => state.assessment);

  const sortByTotalScore = (data) => {
    const sorted = data.sort((a, b) => b.totalScore - a.totalScore);
    return sorted;
  };

  let results;
  useEffect(() => {
    const fetchData = async () => {
      getResultsByAssessment(assessmentId)
        .unwrap()
        .then((resp) => {
          data = resp.payload;
          results = sortByTotalScore(data);
          toast.success(
            resp?.payload?.message || "Results fetched Successfully"
          );
          resetForm();
        })
        .catch((error) => {
          toast.error(error?.message || "Something went wrong");
        });
    };
    fetchData();
  }, [assessmentId]);

  const navigationHandler = (link, title) => {
    dispatch(setAssessmentTitle(title));
    navigate(link);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <BackButton />
          {user?.role === "teacher" && (
            <button
              className="btn btn-outline"
              onClick={() =>
                navigationHandler(
                  `/dashboard/teacher/assessment/${assessmentId}/view-questions`,
                  assessmentTitle
                )
              }
            >
              View
              <HiDocumentMagnifyingGlass size={20} />
            </button>
          )}
        </div>

        <div className="center">
          <h2>{assessmentTitle} Results</h2>
        </div>

        <div className="grid-wrapper">
          <div className="row">
            {results &&
              results?.map((result, index) => (
                <div key={index} className="col-md-4 gy-2 my-2">
                  <ResultCard result={result} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowResult;
