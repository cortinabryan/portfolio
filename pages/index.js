import Acomplishments from "../src/components/Acomplishments/Acomplishments";
import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/TimeLine/TimeLine";
import { Layout } from "../src/layout/Layout";
import { Section } from "../src/styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
