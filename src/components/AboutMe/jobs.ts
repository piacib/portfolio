export type WorkData = {
  jobTitle: string;
  text: string;
  workPlace: string;
  employmentPeriod: string;
  skills: string[];
};
const TutorJob = {
  jobTitle: "Physics Tutor",
  text: "As a physics tutor I developed a deep understanding of the subject and an ability to break down complex concepts into easy-to-understand explanations. I learned to identify individual's learning needs and tailor my approach to maximize student understanding and engagement.",
  workPlace: "The University of Washington",
  employmentPeriod: '2016-2018',
  skills: [
    "Critical thinking",
    "Problem solving",
    "Explaining Complex Concepts",
  ],
};
const diveJob = {
  jobTitle: "Safety diver",
  employmentPeriod: '2021-2023',

  text: `I developed my skills in assessing and managing risks associated with water operations. While in the water I was responsible for the safety of up to 20 individuals 
  while also providing an engaging and memorable experience. This helped my impove my communication, teamworking abilities and stress management.`,
  workPlace: "Kona Snorkel Trips",
  skills: ["Communication", "Managing multiple people", "Enusuring Safety"],
};
const researchJob = {
  employmentPeriod: '2018-2019',

  jobTitle: "Plasma Physics Researcher",
  text: `
   While working in my role as a Researcher I was responsible for working on a small team to organize, design, and implement plasma physics research experiments. 
   After completion I compiled the data into easy to understand visuals and explained the work to the larger team.
  `,
  workPlace: "Justus liebig University",
  skills: [
    "Working with others",
    "Problem solving",
    "Designing and implementing an experiment ",
  ],
};
export const jobs = [TutorJob, diveJob, researchJob];
