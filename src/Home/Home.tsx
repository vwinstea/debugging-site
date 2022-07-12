import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import reactIcon from "../assets/icons8-react-200.png";
import tsIcon from "../assets/icons8-typescript-200.png";
import npmIcon from "../assets/icons8-npm-200.png";
import styles from "./home.module.css";

const techstack = [
  {
    src: reactIcon,
    title: "React",
    desc: "A lot of the examples of code I will be demonstrating will be specific to React, since that is the most popular web develpment framework and the one I'm most familiar with.",
  },
  {
    src: tsIcon,
    title: "TypeScript",
    desc: "Code examples will be written in TypeScript. Typescript looks very similar to Javascript, except in some cases you are required to explicitly declare types. Typescript makes it easier to catch bugs because of static type checking and may also may lead to a more enjoyable development experience since your IDE may use the type information to provide more accurate autocomplete suggestions. The only minor downside of TypeScript is that some node packages may not have TypeScript support, but most of the big packages do.",
  },
  {
    src: npmIcon,
    title: "NPM",
    desc: "There will be a few node packages used throughout this process since NPM can drastically speed up code production by allowing you to borrow functionality that's already been written. If you use yarn for your package management, the expeerience should be almost identical",
  },
];

function Home() {
  const [techStackSelected, setTechStackSelected] = useState(0);

  return (
    <Box>
      <Typography variant="h2">What is this site?</Typography>
      <Typography gutterBottom>
        This website is a space dedicated to exploring the act of setting up,
        testing, and debugging web development projects, as well as exploring
        some of the tools that can be used to aid you along your web development
        journey. My goal is not to convince you of what I think the best
        practices are, but rather expose you to the tools and practcies that you
        may or may not use while doing web development. Before we get started,
        there&apos;s a couple of ground rules and assumptions I want to clear up
        before getting into the meat of this site.
      </Typography>
      <Typography variant="h4">Assumptions</Typography>
      <Typography>
        Unfortunately, there are so many aspects of web development that it
        would be hard to cover all of them in a single site. While some aspects
        of web development can be generalized regaurdless of tech stack, others
        require a bit more specificity.
      </Typography>
      <Typography variant="h5">Experience</Typography>
      <Typography>
        The purpose of this site is not to teach you the skills required for web
        development, but rather good practices as a solo dev or as a team.
        Hopefully, coming into this site you have some basic understanding of
        HTML, CSS, JS, React, GitHub, and databases. You certainly don&apos;t
        have to be proficient in these topics, but having some exposure
        beforehand will make this site much easier to use.
      </Typography>
      <Typography variant="h5">Tech Stack</Typography>
      <Stack direction="row" spacing={5} alignItems="center">
        <Stack direction="row" justifyContent="center" spacing={10}>
          {techstack.map(({ src, title }, idx) => (
            <Box onClick={() => setTechStackSelected(idx)}>
              <img
                src={src}
                alt={title}
                className={techStackSelected === idx ? "" : styles.techIcon}
              />
              <Typography
                align="center"
                variant="h6"
                fontWeight={techStackSelected === idx ? "bold" : "normal"}
              >
                {title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Typography>{techstack[techStackSelected].desc}</Typography>
      </Stack>
      <Typography variant="h4">How It&apos;s Organized</Typography>
      <Typography>
        TODO: Add table of contents once there is more content available
      </Typography>
    </Box>
  );
}

export default Home;
