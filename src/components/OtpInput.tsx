'use client';

import OtpInput from "react-otp-input";

export interface OTPInputProps {
  value?: string;
  name?: any;
  onChange?: any;
  numInputs?: number;
  separator?: React.JSX.Element | undefined;
  isDisabled?: boolean | undefined;
  shouldAutoFocus?: boolean | undefined;
  hasErrored?: boolean | undefined;
  containerStyle?: string | React.CSSProperties | undefined;
  inputStyle?: string | React.CSSProperties | undefined;
  focusStyle?: string | React.CSSProperties | undefined;
  disabledStyle?: string | React.CSSProperties | undefined;
  errorStyle?: string | React.CSSProperties | undefined;
  renderSeparator?: (props: any) => React.ReactNode;
  renderInput?: (props: any) => React.ReactNode;
}

const OTPInput = ({ value, onChange }: OTPInputProps) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={4}
      shouldAutoFocus={true}
      containerStyle={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
      }}
      inputStyle={{
        width: "3rem",
        height: "3rem",
        fontSize: "1.5rem",
        borderRadius: "5px",
        border: "1px solid #c2c2c2",
      }}
      // renderSeparator={(props) => <span {...props}> </span>}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default OTPInput;