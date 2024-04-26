import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

import AppButton from "./Button";

const Text = styled.h1`
  margin-top: 1rem;
  color: gray;
  font-size: 0.7rem;
`;

const InputContainer = styled.div`
  margin: 1rem 0;
`;

const WebcamContainer = styled.div`
  width: 7rem;
  height: 7rem;
  border: 1px solid #ccc;
  border-radius: 7rem;
  overflow: hidden;
  display: inline-flex;
  margin-right: 1rem;
`;

const CapturedImageContainer = styled.div`
  width: 7rem;
  height: 7rem;
  border: 1px solid #ccc;
  border-radius: 7rem;
  display: inline-flex;
  margin-right: 1rem;
  overflow: hidden;
`;

const WebcamCapture = ({ setImageSrc, imageSrc }) => {
  const [webcamActive, setWebcamActive] = useState(false);
  const webcamRef = useRef(null);

  const startWebcam = () => {
    setWebcamActive(true);
  };

  const stopWebcam = () => {
    setWebcamActive(false);
  };

  const recapture = () => {
    setImageSrc("");
    startWebcam();
  };

  const Capture = () => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      stopWebcam();
    } catch (error) {
      console.error("Error capturing image:", error);
      return error;
    }
  };

  return (
    <section>
      <Text>Take a Headshot</Text>
      <InputContainer>
        {webcamActive && (
          <WebcamContainer>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width="100%"
            />
          </WebcamContainer>
        )}
        {imageSrc ? (
          <div>
            <CapturedImageContainer>
              <img src={imageSrc} alt="Captured" />
            </CapturedImageContainer>
            <AppButton onClick={recapture} text="Recapture" />
          </div>
        ) : (
          <AppButton
            onClick={webcamActive ? Capture : startWebcam}
            text={webcamActive ? "Capture Photo" : "Start Webcam"}
          />
        )}
      </InputContainer>
    </section>
  );
};

export default WebcamCapture;
