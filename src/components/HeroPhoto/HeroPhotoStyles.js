import styled from "styled-components";
import { ImageContainer } from "../Technologies/TechnologiesStyles";
import { headshot } from "../../../public/images/headshot.jpg";

export const HeroSection = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ImgContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: crimson;
  /* background-image: ${headshot}; */
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;

  /* @include mobile {
    align-items: flex-start;
  } */
`;

export const HeadshotImg = styled.image`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  @include mobile {
    height: 50%;
  }
`;
