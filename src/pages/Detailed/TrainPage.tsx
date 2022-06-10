import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel, Image } from "antd";
import "./../../css/DetailedPage.css";
import { Locomotive } from "../../Entities/locomotive.entity";
import { PowerSource } from "../../Entities/Enums";
import LocomotiveStats from "../../components/stats/LocomotiveStats";
import { Wagon } from "../../Entities/wagon.entity";
import { MotorCoach } from "../../Entities/motor-coach.entity";
import WagonStats from "../../components/stats/WagonStats";
import MotorCoachStats from "../../components/stats/MotorCoachStats";

export default function TrainPage() {
  // const { id } = useParams();
  const { type } = useParams();
  const navigate = useNavigate();
  const [entity, setEntity] = React.useState<Locomotive | Wagon | MotorCoach>(
    tempMC
  );
  React.useEffect(() => {
    switch (type) {
      case "locomotive":
        setEntity(tempLoc);
        break;
      case "wagon":
        break;
      case "motorcoach":
        setEntity(tempMC);
        break;
      default:
        navigate("/404");
        break;
    }
  });

  return (
    <div className="background">
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
        {loadStats(entity)}
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
    </div>
  );
}

function loadStats(entity?: Locomotive | Wagon | MotorCoach) {
  if (isLocomotive(entity)) {
    return (
      <div>
        <LocomotiveStats locomotive={entity as Locomotive} />
      </div>
    );
  }
  if (isWagon(entity)) {
    return (
      <div>
        <WagonStats wagon={entity as Wagon} />
      </div>
    );
  }
  if (isMotorCoach(entity)) {
    return (
      <div>
        <MotorCoachStats motorCoach={entity as MotorCoach} />
      </div>
    );
  }
}

const tempLoc: Locomotive = {
  locomotiveId: 1,

  modelName: "HLE 13",

  buildYear: new Date(),

  maxSpeed: 200,

  horsePower: 120,

  brakePower: 120,

  weight: 90000,

  length: 19.11,

  width: 2,

  height: 5,

  nickNames: ["HLE-13", "HLE-13-1", "HLE-13-2"],

  description: `
  Amet deserunt dolore et eiusmod do anim et ullamco eiusmod. Amet sint nostrud enim eiusmod ullamco amet exercitation ad. Laborum quis elit ipsum aliqua in ut proident. Aliqua ea fugiat labore cillum. Reprehenderit anim esse culpa nostrud nostrud id incididunt exercitation anim aliquip aliqua. Eiusmod excepteur eiusmod voluptate ea. Velit irure in ea exercitation laboris aute nostrud qui non ex quis.

Commodo pariatur dolore ad dolore nisi esse aute duis sit do occaecat Lorem aliqua. Irure ut labore exercitation esse ex sint. Elit laboris officia aliquip ad magna nulla labore anim sit commodo. Excepteur veniam amet id occaecat Lorem in esse ut quis do et ad consequat.

Deserunt dolor adipisicing eu deserunt cupidatat id ut elit culpa ea. Aliqua dolor sit culpa excepteur tempor officia nostrud excepteur Lorem ea voluptate magna sunt. Consequat non sunt Lorem aliquip deserunt aute do. Fugiat duis esse consequat sit. Ex tempor ea occaecat dolore pariatur commodo veniam aliqua aliqua. Sunt nulla dolor anim voluptate. Consectetur cillum ad proident esse ea enim deserunt in ea cupidatat ea amet labore aute.
  `,

  amountMade: 100,

  PowerSource: PowerSource.Electric,
};

const tempMC: MotorCoach = {
  motorCoachId: 1,

  modelName: "MS 96",

  buildYear: new Date(),

  maxSpeed: 200,

  horsePower: 120,

  brakePower: 120,

  weight: 90000,

  length: 19.11,

  width: 2,

  height: 5,

  nickNames: ["Deense neus", "AR 96", "HLE-13-2"],

  description: `Exercitation magna labore aliquip nulla nisi dolore cillum. Anim commodo adipisicing veniam dolore tempor eu ipsum ullamco excepteur aute reprehenderit. Velit magna officia non mollit enim enim enim adipisicing amet nostrud culpa. Tempor reprehenderit consequat ex eiusmod culpa laborum sit eiusmod amet sunt amet reprehenderit sint. Irure Lorem ea cillum commodo eu esse.

Veniam ad proident proident ullamco ut minim aliquip cupidatat sit culpa ullamco minim et mollit. Pariatur nisi magna nulla et ut fugiat tempor est in. In Lorem non reprehenderit proident aliqua magna fugiat exercitation quis sit laboris aliqua. Enim in elit excepteur tempor ex laborum amet adipisicing cillum consequat ullamco. Magna do Lorem cupidatat deserunt ut laboris laboris commodo amet aliqua dolor. Elit consectetur eu fugiat voluptate aliquip.

Cillum do dolor ex amet esse anim nulla qui minim aute ea officia sint culpa. Aute occaecat velit exercitation labore labore ea irure qui et. Adipisicing deserunt et aute ex aliquip culpa in velit.

Adipisicing eu amet irure velit consequat fugiat sint culpa aliquip consequat pariatur ut non irure. Excepteur proident qui eu sunt nostrud velit ut reprehenderit culpa et sunt. Nostrud enim ipsum dolore enim id est non cupidatat irure nulla elit Lorem eu. Irure magna labore quis nisi duis minim tempor. Consequat culpa irure id dolore amet nisi et fugiat culpa. Mollit cillum pariatur officia ut aliqua et.`,

  amountMade: 100,

  powerSource: PowerSource.Electric,

  steatTypes: ["first class", "bussines class", "second class"],

  steatAmount: [10, 20, 30],
};

const isLocomotive = (x: any): x is Locomotive => {
  return x.locomotiveId !== undefined;
};

const isWagon = (x: any): x is Wagon => {
  return x.wagonId !== undefined;
};

const isMotorCoach = (x: any): x is MotorCoach => {
  return x.motorCoachId !== undefined;
};
