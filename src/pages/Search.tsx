import { Card, BackTop, Segmented, Skeleton } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
const { Meta } = Card;

export default function Search() {
  const { query } = useParams();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <BackTop />
      <Segmented
        options={[
          "Locomotive",
          "Wagon",
          "Motor Coach",
          "Operator",
          "Manufacturer",
        ]}
      />
      <div
        className="CardList"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          padding: "1em",
        }}
      >
        {genFakeCardList(query!)}
      </div>
    </div>
  );
}

function genFakeCardList(name:string) {
  var loading = false;
  return Array.from({ length: 30 }).map(() => (
    <Card
    key={Math.random()}
      style={{
        width: "30rem",
        margin: "1em",
      }}
      loading={loading}
      hoverable
      cover={
        loading ? (
          <Skeleton.Image />
        ) : (
          <img
            alt="example"
            src="//live.staticflickr.com/65535/51907668460_92ff5163a7_k.jpg"
          />
        )
      }
    >
      <Meta
        title={name}
        style={{
          marginBottom: ".5rem",
        }}
      />
      <b>Manufacturer:</b> Alstom <br />
      <b>Operator:</b> NMBS, Lineas <br />
      <b>In service since:</b> 2005 <br />
    </Card>
  ));
}
