import { themeGet } from "@styled-system/theme-get";
import { base } from "common/components/base";
import styled from "styled-components";

export const LeaderWrapper = styled("div")`
  margin: auto;
  max-width: 300px;
  margin-top: 60px;

  @media screen and (min-width: 420px) {
    max-width: 400px;
  }

  ${themeGet("mediaQueries.sm")} {
    max-width: 600px;
  }

  ${themeGet("mediaQueries.lg")} {
    max-width: 800px;
    margin-top: 90px;
  }

  ${themeGet("mediaQueries.xxl")} {
    max-width: 900px;
  }

  .leader {
    display: flex;
  }

  .image {
    height: 58px;
    object-fit: cover;
    width: 58px;
    background-color: black;
    img {
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .topThree {
    display: flex;
    position: relative;
    min-height: 120px;

    @media screen and (min-width: 420px) {
      min-height: 130px;
    }

    ${themeGet("mediaQueries.sm")} {
      min-height: 150px;
    }

    ${themeGet("mediaQueries.lg")} {
      min-height: 200px;
    }

    .image {
      border-radius: 50%;
      border-style: solid;
      border-width: 3px;
      border-color: rgba(241, 245, 249, 0.12);
      
    }

    .leader:nth-child(1) {
      position: absolute;
      z-index: 99;
      left: 50%;
      transform: translateX(-50%);

      .image {
        width: 130px;
        height: 130px;

        @media screen and (min-width: 420px) {
          width: 150px;
          height: 150px;
        }

        ${themeGet("mediaQueries.sm")} {
          width: 200px;
          height: 200px;
        }

        ${themeGet("mediaQueries.lg")} {
          width: 270px;
          height: 270px;
        }

        ${themeGet("mediaQueries.xxl")} {
          width: 300px;
          height: 300px;
        }
      }
    }

    .leader:nth-child(2) {
      color: black;
      position: absolute;
      left: 15%;
      transform: translateX(-15%);
      bottom: -20%;

      .image {
        width: 110px;
        height: 110px;
        opacity: 0.9;

        @media screen and (min-width: 420px) {
          width: 130px;
          height: 130px;
        }

        ${themeGet("mediaQueries.sm")} {
          width: 170px;
          height: 170px;
        }

        ${themeGet("mediaQueries.lg")} {
          width: 200px;
          height: 200px;
        }

        ${themeGet("mediaQueries.xxl")} {
          width: 220px;
          height: 220px;
        }
      }
    }

    .leader:nth-child(3) {
      color: black;
      position: absolute;
      left: 85%;
      transform: translateX(-85%);
      bottom: -20%;

      .image {
        width: 110px;
        height: 110px;
        opacity: 0.9;

        @media screen and (min-width: 420px) {
          width: 130px;
          height: 130px;
        }

        ${themeGet("mediaQueries.sm")} {
          width: 170px;
          height: 170px;
        }

        ${themeGet("mediaQueries.lg")} {
          width: 200px;
          height: 200px;
        }

        ${themeGet("mediaQueries.xxl")} {
          width: 220px;
          height: 220px;
        }
      }
    }
  }

  .leaderRank {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: -60px;
    transform: translateX(-50%);

    ${themeGet("mediaQueries.lg")} {
      top: -90px;
    }
  }

  .leaderInfo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -60px;
    display: none;

    @media screen and (min-width: 420px) {
      display: flex;
      justify-content: center;
    }

    ${themeGet("mediaQueries.lg")} {
      width: 150px;
    }

    ${themeGet("mediaQueries.xxl")} {
      width: 200px;
      bottom: -70px;
    }
  }
`;

export const AvatarWrapper = styled("img")`
  width: 64px;
  height: 64px;
  border-radius: 0;
  margin-right: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(241, 245, 249, 0.12);

  ${themeGet("mediaQueries.xxl")} {
    width: 87px;
    height: 87px;
  }
`;

export const CellWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TableWrapper = styled("div")`
  margin: auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 420px) {
    max-width: 400px;
  }

  ${themeGet("mediaQueries.sm")} {
    max-width: 600px;
  }

  ${themeGet("mediaQueries.lg")} {
    max-width: 800px;
    margin-top: 90px;
  }

  ${themeGet("mediaQueries.xxl")} {
    max-width: 900px;
  }
`;

export const AutTable = styled("table")`
  padding-top: 120px;
  tbody,
  thead {
  }

  tr {
    width: 100%;
    &:first-of-type {
      td {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: rgba(241, 245, 249, 0.12);
      }
    }
  }

  td,
  th {
    width: 33%;
    min-width: 80px;
    padding: 20px 0;
    height: 32px;
    border-top: 0;

    @media screen and (min-width: 300px) {
      min-width: 100px;
    }

    @media screen and (min-width: 420px) {
      min-width: 133px;
    }

    ${themeGet("mediaQueries.sm")} {
      min-width: 200px;
    }

    ${themeGet("mediaQueries.lg")} {
      min-width: 266px;
    }

    ${themeGet("mediaQueries.xxl")} {
      min-width: 300px;
    }
    &:not(:first-of-type) {
    }

    &:first-of-type {
    }

    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(241, 245, 249, 0.12);
  }
`;

export const BubbleImageWrapper = styled("div")`
  position: relative;
  margin: 0 auto;
  width: 130px;
  height: 130px;
  figure {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 420px) {
    width: 150px;
    height: 150px;
    figure {
      width: 230px;
      height: 230px;
    }
  }
  ${themeGet("mediaQueries.sm")} {
    width: 200px;
    height: 200px;
    figure {
      width: 310px;
      height: 310px;
    }
  }
  ${themeGet("mediaQueries.lg")} {
    width: 270px;
    height: 270px;
    figure {
      width: 400px;
      height: 400px;
    }
  }
  ${themeGet("mediaQueries.xxl")} {
    width: 300px;
    height: 300px;
    figure {
      width: 450px;
      height: 450px;
    }
  }
  ${base}
`;

export const BlackHoleWrapper = styled("div")`
  flex: 1;
  position: relative;
  .content {
    top: 0;
    border-radius: 50px;
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${base}
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 80px;
  .content {
    top: -8px;
    width: 315px;
    height: 315px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 30px;
  }
  @media screen and (min-width: 420px) {
    .content {
      top: 8px;
      width: 200px;
      height: 200px;
    }
  }
  ${themeGet("mediaQueries.sm")} {
    .content {
      top: 8px;
      width: 250px;
      height: 250px;
      padding: 50px;
    }
  }
  ${themeGet("mediaQueries.md")} {
    .content {
      width: 250px;
      height: 250px;
      padding: 60px;
    }
    grid-template-areas:
      "first first first first"
      "second second third third";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .item-1 {
      grid-area: first;
    }
    .item-2 {
      grid-area: second;
    }
    .item-3 {
      grid-area: third;
    }
  }
  ${themeGet("mediaQueries.lg")} {
    grid-gap: 40px;
  }
  ${themeGet("mediaQueries.xxl")} {
    grid-gap: 0;
    .content {
      top: 55px;
      width: 300px;
      height: 300px;
      padding: 50px;
    }
    .item-2 {
      margin-top: 100px;
    }
    grid-template-areas: "first second third";
    grid-template-columns: repeat(3, 1fr);
  }
`;
