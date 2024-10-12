import { auth } from "@/auth";
import { FC } from "react";

interface Props {}

const Home: FC<Props> = async () => {
  console.log(await auth());

  return <div></div>;
};

export default Home;
