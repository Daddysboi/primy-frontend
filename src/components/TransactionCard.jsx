import styled from "styled-components";

import myphoto from "../assets/images/myphoto.jpeg";
import { primaryColors } from "../assets/Colors";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  background-color: ${primaryColors.Gray};
  border-radius: 0.5rem;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.03);
  font-size: 0.7rem;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  font-size: 0.5rem;
`;

const Img = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.3rem;
`;

const MidLeft = styled.div`
  font-size: 0.7rem;
  flex: 1;
`;

const MidRight = styled.div`
  font-size: 0.7rem;
  flex: 1;
`;

const Right = styled.div`
  flex: 0.3;
  /* color: ${(props) => (props.hasPaid ? "green" : "red")}; */
`;

const Name = styled.p`
  font-size: 0.6rem;
  font-weight: 600;
  margin: 0;
`;

const TransactionCard = ({
  name,
  date,
  studentClass,
  amount,
  status,
  hasPaid,
}) => {
  return (
    <Card>
      <Left>
        <div>
          <Img src={myphoto} alt="" />
        </div>
        <div>
          <Name>{name}</Name>
          <span>{date}</span>
        </div>
      </Left>
      <MidLeft>{studentClass}</MidLeft>

      <MidRight>{amount}</MidRight>
      {status === "Paid" || status === "paid" ? (
        <Right style={{ color: "green" }}>{status}</Right>
      ) : (
        <Right style={{ color: "red" }}>{status}</Right>
      )}
    </Card>
  );
};

export default TransactionCard;
