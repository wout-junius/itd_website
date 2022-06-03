import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Image } from "antd";
import "./../../css/DetailedPage.css";

export default function Locomotive() {
  const { id } = useParams();
  return (
    <div className="background">
      <div className="DetailedPage">
        <Carousel autoplay dotPosition={"left"} effect="fade" style={{
          width: "25rem"
        }}>
          <div>
            <Image
              width={"100%"}
              src="//live.staticflickr.com/65535/51907668460_92ff5163a7_k.jpg"
            />
          </div>
          <div>
            <Image
              width={"100%"}
              src="//live.staticflickr.com/65535/51907668460_92ff5163a7_k.jpg"
            />
          </div>
          <div>
            <Image
              width={"100%"}
              src="//live.staticflickr.com/65535/51907668460_92ff5163a7_k.jpg"
            />
          </div>
          <div>
            <Image
              width={"100%"}
              src="//live.staticflickr.com/65535/51907668460_92ff5163a7_k.jpg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
