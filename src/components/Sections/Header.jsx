import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/girl-dancing.jpeg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

import playstore from "../../assets/img/google-play-badge.png";
import appstore from "../../assets/img/app-store-badge.png";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold lg:text-7xl leading-none text-5xl">
            Looking for an event?
          </h1>
          <HeaderP className="text-lg font-light mx-8 lg:mx-0">
            Find events happening around you, schedule reminders and favourite
            events. You can also see popular and trending events that everyone
            is going to.
          </HeaderP>

          <div className="flex  justify-center lg:justify-start px-10 lg:px-0 ">
            <div className="w-[150px] lg:w-[190px] h-auto">
              <a
                className=""
                href="https://bit.ly/3Jd5Kkq"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={playstore} alt="" />
              </a>
            </div>
            <div className="w-[150px] lg:w-[190px] ml-[15px] h-auto">
              <a
                href="https://apple.co/3i78NyQ"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={appstore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8 w-[426px] h-[507px] lg:w-[400px] lg:h-[607px] !z-[9]"
            src={HeaderImage}
            alt="office"
          />
          <QuoteWrapper className="flexCenter bg-brandBlueSeven radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  Some people look for a beautiful place. Others make a place
                  beautiful.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                Hazrat Inayat Khan
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
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
  width: 50%;
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
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 20px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 20px 0;
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
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
