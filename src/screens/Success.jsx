import { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import FullButton from "../components/Buttons/FullButton";

export default function Success() {
  const [loading, setLoading] = useState(false);
  const [sessionID, setSessionID] = useState(null);

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("session_id")) {
      const session_id = searchParams.get("session_id");
      setSessionID(session_id);
    }
  }, []);

  const billingInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://us-central1-the-outside-app.cloudfunctions.net/api/billingInfo`,
        {
          method: "post",
          body: JSON.stringify({ session_id: sessionID }),
        }
      );

      const data = await res.json();
      console.log(data);
      const url = data?.url;
      var myWindow = window.open(url, "_self");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper id="home" className="container flex justify-center items-center">
      <LeftSide className="flexCenter">
        <div>
          <h6 className="extraBold font60">
            Subscription to Starter plan successful!
          </h6>

          <BtnWrapper>
            <FullButton
              title="Manage your billing information"
              action={billingInfo}
              disabled={loading}
            />
          </BtnWrapper>
        </div>
      </LeftSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
