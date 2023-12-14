import { nanoid } from "@reduxjs/toolkit";

export const data = {
  options: { bgColor: "rgb(140, 174, 222)", fColor: "#fff", aColor: "#425168" },
  specialty: "You'r specialty",
  name: "You'r Name",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore, sunt officiis placeat, atque fuga, tenetur beatae recusandae quas voluptates vitae quo non? Ut expedita vero iure dolore repudiandae fugiat recusandae, sequi tempora enim itaque tenetur! Natus recusandae quis accusantium, esse reprehenderit animi adipisci iste voluptate...",
  projects: [
    {
      gitLink: "https://github.com/",
      lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
      id: nanoid(),
      name: "Project #1",
      technology: "project technology",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore, sunt officiis placeat, atque fuga, tenetur beatae recusandae quas voluptates vitae quo non? Ut expedita vero iure dolore...",
    },
    {
      gitLink: "https://github.com/",
      lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
      id: nanoid(),
      name: "Project #2",
      technology: "project technology",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore, sunt officiis placeat, atque fuga, tenetur beatae recusandae quas voluptates vitae quo non? Ut expedita vero iure dolore...",
    },
    {
      gitLink: "https://github.com/",
      lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
      id: nanoid(),
      name: "Project #3",
      technology: "project technology",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore, sunt officiis placeat, atque fuga, tenetur beatae recusandae quas voluptates vitae quo non? Ut expedita vero iure dolore...",
    },
    {
      gitLink: "https://github.com/",
      lifeLink: "https://olesrezvaniuk.github.io/resume-template/",
      id: nanoid(),
      name: "Project #4",
      technology: "project technology",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore, sunt officiis placeat, atque fuga, tenetur beatae recusandae quas voluptates vitae quo non? Ut expedita vero iure dolore...",
    },
  ],
  workExperience: [
    {
      startYear: "0000",
      endYear: "0000",
      company: "Company #1",
      position: "Position #1",
      responsibilities: [
        {
          id: nanoid(),
          value: "Lorem ipsum dolor sit amet...",
        },
        {
          id: nanoid(),
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque...",
        },
        {
          id: nanoid(),
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
        {
          id: nanoid(),
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore...",
        },
      ],
      id: nanoid(),
    },
    {
      startYear: "0000",
      endYear: "0000",
      company: "Company #2",
      position: "Position #2",
      responsibilities: [
        {
          id: nanoid(),
          value: "Lorem ipsum dolor sit amet consectetur...",
        },
        {
          id: nanoid(),
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque...",
        },
        {
          id: nanoid(),
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil eveniet dolore...",
        },
      ],
      id: nanoid(),
    },
  ],
  education: [
    {
      startYear: "2000",
      endYear: "2023",
      name: "Institution #1",
      position: "Position #1",
      id: nanoid(),
    },
    {
      startYear: "2000",
      endYear: "2023",
      name: "Institution #2",
      position: "Position #2",
      id: nanoid(),
    },
  ],
  contacts: {
    tel: "+000000000000",
    email: "yourEmail@gmail.com",
    city: "yourCity",
  },
  social: {
    facebook: "facebookLink",
    telegram: "telegramLink",
    gitHub: "githubLink",
    LinkedIn: "LinkedinLink",
  },
  techSkills: [
    { id: nanoid(), value: "tech skill #1" },
    { id: nanoid(), value: "tech skill #2" },
    { id: nanoid(), value: "tech skill #3" },
    { id: nanoid(), value: "tech skill #4" },
    { id: nanoid(), value: "tech skill #5" },
    { id: nanoid(), value: "tech skill #6" },
  ],
  softSkills: [
    { id: nanoid(), value: "soft skill #1" },
    { id: nanoid(), value: "soft skill #2" },
    { id: nanoid(), value: "soft skill #3" },
    { id: nanoid(), value: "soft skill #4" },
    { id: nanoid(), value: "soft skill #5" },
    { id: nanoid(), value: "soft skill #6" },
  ],
  languages: [
    { id: nanoid(), value: "Language #1", level: "level?" },
    { id: nanoid(), value: "Language #2", level: "level?" },
    { id: nanoid(), value: "Language #3", level: "level?" },
    { id: nanoid(), value: "Language #4", level: "level?" },
  ],
  avatar: null,
};
