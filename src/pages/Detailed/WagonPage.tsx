import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Carousel, Image } from "antd";
import "./../../css/DetailedPage.css";
import { Wagon } from "../../Entities/wagon.entity";
import WagonStats from "../../components/stats/WagonStats";
import { useQuery } from "@apollo/client";
import { GET_WAGON_BY_ID } from "../../Graphql/WagonQueries";

export default function WagonPage() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_WAGON_BY_ID, {
    variables: { id: +id! },
    context: { clientName: "apiEndpoint" },
  });
  let entity: Wagon = data?.wagon;

  return (
    <div className="background">
      {loading || !entity || error ? (
        error ? (
          <Navigate to="/404" />
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div className="DetailedPage">
          <div>
            <h1>{entity?.modelName}</h1>
            <b>nicknames: </b>
            {entity?.nickNames.map((nick) => {
              return nick + ", ";
            })}
            <br />
            <div>{entity?.description}</div>
          </div>
          <WagonStats wagon={entity} />
          <Carousel
            autoplay
            dotPosition={"left"}
            effect="fade"
            style={{
              width: "25rem",
              margin: "1rem",
            }}
          >
            <div>
              <Image
                width={"100%"}
                src="//live.staticflickr.com/65535/51907668460_92ff5163a7_k.jpg"
              />
            </div>
            <div>
              <Image
                width={"100%"}
                src="//live.staticflickr.com/65535/51859826507_05cce0104e_b.jpg"
              />
            </div>
            <div>
              <Image
                width={"100%"}
                src="//live.staticflickr.com/65535/51859765887_16b0978564_b.jpg"
              />
            </div>
            <div>
              <Image
                width={"100%"}
                src="//live.staticflickr.com/65535/51859765987_429126d4c1_b.jpg"
              />
            </div>
            <div>
              <Image
                width={"100%"}
                src="//live.staticflickr.com/65535/51860802318_41caf7f8a4_b.jpg"
              />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
}
