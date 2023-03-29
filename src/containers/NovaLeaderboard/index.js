import React, { useEffect, useState } from "react";
import Container from "common/components/Container";
import Typography from "common/components/Typography";
import Section from "common/components/Section";
import Image from "common/components/Image";
import BlackHoleImage from "common/assets/image/black-hole.svg";
import {
  AutTable,
  AvatarWrapper,
  BlackHoleWrapper,
  BubbleImageWrapper,
  CellWrapper,
  Containerr,
  Grid,
  LeaderWrapper,
  TableWrapper,
} from "./leaderboard.style";
import Button from "common/components/Button";
import { memo } from "react";
import { NovaLeaderboardData, TryOutData } from "common/data";
import { fetchMetadata } from "@aut-labs-private/sdk";
import axios from "axios";
import AutLoading from "common/components/AutLoading";

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

export function ipfsCIDToHttpUrl(url) {
  if (!url) {
    return url;
  }
  if (!url.includes("https://")) {
    return `${process.env.NEXT_PUBLIC_IPFS_URL}/${replaceAll(
      url,
      "ipfs://",
      ""
    )}`;
  }
  return url;
}

const NovaLeaderBoard = () => {
  const { title, subtitle } = NovaLeaderboardData;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/autID/user/leaderDaos`
        );

        const daos = response.data;

        const daoData = [];

        for (let i = 0; i < daos.length; i++) {
          const dao = daos[i];
          const metadata = await fetchMetadata(
            dao.daoMetadataUri,
            process.env.NEXT_PUBLIC_IPFS_URL
          );

          daoData.push({
            ...metadata,
            ...dao,
          });
        }
        setItems(daoData);
        setLoading(false);
        console.log(daoData);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section
      mt={{
        _: "100px",
      }}
    >
      <Container
        noGutter
        maxWidth={{
          lg: "1180px",
          xl: "1300px",
          xxl: "1900px",
        }}
      >
        <Typography
          textAlign="center"
          mb="10px"
          mt={{
            _: "140px",
          }}
          as="h1"
        >
          {title}
        </Typography>
        <Typography
          textAlign="center"
          mt="0"
          px={{
            _: "12px",
            sm: "0",
          }}
          mb={{
            _: "60px",
          }}
          as="subtitle1"
        >
          {subtitle}
        </Typography>
        {/* <Grid className="wrapper">
          {items.map((leader, index) => (
            // <BlackHoleWrapper
            //   key={`item-${index}`}
            //   className={`item-${index + 1}`}
            // >
            //   {index === 0 ? (
            //     <>
            //       <BubbleImageWrapper className="image-wrapper">
            //         <Image alt="black-hole" src={BlackHoleImage.src} />
            //       </BubbleImageWrapper>
            //       <div className="content">Image here</div>
            //     </>
            //   ) : (
            //     <div className="content">Image here</div>
            //   )}
            // </BlackHoleWrapper>
            <div className="leader" key={leader.id}>
              {index + 1 <= 3 && (
                <div className="containerImage">
                  <img className="image" loading="lazy" src={leader.image} />
                  <div className="crown">
                    <svg
                      id="crown1"
                      fill="#0f74b5"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 50"
                    >
                      <polygon
                        className="cls-1"
                        points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                      />
                    </svg>
                  </div>
                  <div className="leaderName">{leader.name}</div>
                </div>
              )}
            </div>
          ))}
        </Grid> */}

        <LeaderWrapper>
          {loading && <AutLoading width="130px" height="130px" />}
          {!loading && !items?.length && (
            <Typography
              textAlign="center"
              mt="0"
              px={{
                _: "12px",
                sm: "0",
              }}
              mb={{
                _: "60px",
              }}
              as="subtitle1"
            >
              No {`DAO's`} yet!
            </Typography>
          )}
          {!!items.length && (
            <div className="topThree">
              {items.map((leader, index) => (
                <div className="leader" key={`leader-${index}`}>
                  {index === 0 ? (
                    <>
                      <div className="leaderRank">
                        <Typography
                          color="white"
                          fontWeight="bold"
                          fontSize={{
                            xs: "24px",
                            lg: "35px",
                          }}
                        >
                          {`${index + 1}`}
                        </Typography>
                      </div>
                      <BlackHoleWrapper
                        key={`item-${index}`}
                        className={`item-${index + 1}`}
                      >
                        <BubbleImageWrapper className="image-wrapper">
                          <Image alt="black-hole" src={BlackHoleImage.src} />
                        </BubbleImageWrapper>
                        <div className="content">
                          <Image
                            className="image"
                            alt="Leader image"
                            src={ipfsCIDToHttpUrl(leader?.image)}
                          />
                        </div>
                      </BlackHoleWrapper>
                      <div className="leaderInfo">
                        <Typography
                          as="subtitle2"
                          color="white"
                          margin="0"
                          textAlign="center"
                        >
                          {leader?.name}
                        </Typography>
                      </div>
                    </>
                  ) : (
                    <>
                      {index + 1 <= 3 && (
                        <>
                          <div className="leaderRank">
                            <Typography
                              as="h2"
                              fontWeight="bold"
                              fontSize={{
                                xs: "24px",
                                lg: "35px",
                              }}
                              color="white"
                            >
                              {`${index + 1}`}
                            </Typography>
                          </div>
                          <div className="containerImage">
                            <Image
                              className="image"
                              alt="Leader image 2"
                              src={ipfsCIDToHttpUrl(leader?.image)}
                            />
                          </div>

                          <div className="leaderInfo">
                            <Typography
                              as="subtitle2"
                              color="white"
                              margin="0"
                              textAlign="center"
                            >
                              {leader.name}
                            </Typography>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </LeaderWrapper>
        <TableWrapper>
          <AutTable aria-label="table" cellSpacing="0">
            <thead>
              <th>
                <CellWrapper style={{ paddingRight: "30%" }}>
                  <Typography
                    as="subtitle2"
                    fontWeight="normal"
                    color="white"
                    textAlign="left"
                  >
                    Rank
                  </Typography>
                </CellWrapper>
              </th>
              <th>
                <CellWrapper>
                  <Typography
                    as="subtitle2"
                    fontWeight="normal"
                    color="white"
                    textAlign="left"
                  >
                    Nova
                  </Typography>
                </CellWrapper>
              </th>
              <th>
                <CellWrapper style={{ paddingLeft: "30%" }}>
                  <Typography
                    as="subtitle2"
                    fontWeight="normal"
                    color="white"
                    textAlign="left"
                  >
                    Members
                  </Typography>
                </CellWrapper>
              </th>
            </thead>
            <tbody>
              {items.map(({ image, name, totalMembers }, index) => (
                <tr key={`row-key-${index}`}>
                  <td>
                    <CellWrapper style={{ paddingRight: "30%" }}>
                      <Typography
                        as="subtitle2"
                        fontWeight="normal"
                        textAlign="left"
                        color="white"
                        sx={{ pb: "5px", ml: "50px" }}
                      >
                        {`${index + 1}`}
                      </Typography>
                    </CellWrapper>
                  </td>
                  <td>
                    <CellWrapper style={{ justifyContent: "flex-start" }}>
                      <AvatarWrapper src={ipfsCIDToHttpUrl(image)} />
                      <Typography
                        as="subtitle2"
                        fontWeight="normal"
                        textAlign="left"
                        color="white"
                        sx={{ pb: "5px", pl: "30px" }}
                      >
                        {name}
                      </Typography>
                    </CellWrapper>
                  </td>

                  <td>
                    <CellWrapper style={{ paddingLeft: "30%" }}>
                      <Typography
                        as="subtitle2"
                        fontWeight="normal"
                        textAlign="left"
                        color="white"
                        sx={{ pb: "5px", pl: "30px" }}
                      >
                        {totalMembers}
                      </Typography>
                    </CellWrapper>
                  </td>
                </tr>
              ))}
            </tbody>
          </AutTable>
        </TableWrapper>
      </Container>
    </Section>
  );
};

export default memo(NovaLeaderBoard);
