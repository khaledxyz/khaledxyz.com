import { Fragment } from "react";
import Hero from "src/components/sections/hero";
import Projects from "src/components/sections/projects";
import Technologies from "src/components/sections/technologies";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Projects />
      <Technologies />
    </Fragment>
  )
}