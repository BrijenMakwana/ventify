import mail from "../../assets/mail.svg";
import display from "../../assets/display.svg";
import confess from "../../assets/confess.svg";
import cat from "../../assets/cat.svg";

import { AiOutlineLike } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";
import { ImShocked } from "react-icons/im";

const confessCategories = [
  {
    id: "1",
    title: "academics",
  },
  {
    id: "2",
    title: "canteen",
  },
  {
    id: "3",
    title: "friendship",
  },
  {
    id: "4",
    title: "relationship",
  },
  {
    id: "5",
    title: "roommates",
  },
  {
    id: "6",
    title: "career",
  },

  {
    id: "7",
    title: "faculty",
  },
  {
    id: "8",
    title: "events",
  },
  {
    id: "9",
    title: "suggestion",
  },
  {
    id: "10",
    title: "library",
  },
  {
    id: "11",
    title: "food",
  },
  {
    id: "12",
    title: "classroom",
  },
  {
    id: "13",
    title: "hostel",
  },
  {
    id: "14",
    title: "other",
  },
];

const communityGuidelines = [
  { id: 1, title: "Respect and kindness towards all users" },
  { id: 2, title: "No personal attacks or offensive behavior" },
  { id: 3, title: "Maintain confidentiality and respect privacy" },
  { id: 4, title: "Prohibit hate speech and discrimination" },
  { id: 5, title: "No bullying, harassment, or cyberbullying" },
  { id: 6, title: "Provide constructive criticism, avoid personal attacks" },
  { id: 7, title: "Report violations for prompt moderation" },
  { id: 8, title: "Embrace inclusivity and diversity" },
  { id: 9, title: "Focus on educational discussions and insights" },
  { id: 10, title: "Comply with laws and regulations" },
];

const availableBatches = [
  {
    id: "1",
    title: 2018,
  },
  {
    id: "2",

    title: 2019,
  },
  {
    id: "3",
    title: 2020,
  },
  {
    id: "4",

    title: 2021,
  },
  {
    id: "5",

    title: 2022,
  },
];

const confessionsSortingOptions = [
  {
    id: "1",
    title: "most liked",
  },
  {
    id: "2",
    title: "most commented",
  },
  {
    id: "3",
    title: "recently added",
  },
];

const availableReactions = [
  {
    id: "1",
    title: "like",
    icon: <AiOutlineLike />,
  },
  {
    id: "2",
    title: "funny",
    icon: <BsEmojiLaughing />,
  },
  {
    id: "3",
    title: "shock",
    icon: <ImShocked />,
  },
];

const availablePollDurations = [
  {
    id: "1",
    title: "24 hour",
    value: 1,
  },
  {
    id: "2",
    title: "3 days",
    value: 3,
  },
  {
    id: "3",
    title: "5 days",
    value: 5,
  },
  {
    id: "4",
    title: "1 week",
    value: 7,
  },
];

const CONFESSION_CHAR_LIMIT = 280;
const POLL_QUESTION_CHAR_LIMIT = CONFESSION_CHAR_LIMIT;
const COMMENT_CHAR_LIMIT = CONFESSION_CHAR_LIMIT;
const CHOICE_CHAR_LIMIT = 25;
const ALLOWED_VISIBLE_COMMENTS = 3;

const EMAIL_DOMAIN = "@daiict.ac.in";

const availableTabs = [
  {
    id: "1",
    title: "All",
    value: "all",
  },
  {
    id: "2",
    title: "Confessions",
    value: "confession",
  },
  {
    id: "3",
    title: "Polls",
    value: "poll",
  },
];

const howItWorks = [
  {
    id: "1",
    title: "Get Login Link",
    image: mail,
    description:
      "Gain access to an exclusive gateway by simply providing your DAIICT Roll number. Experience the convenience of receiving the login link directly in your email inbox, streamlining the process and ensuring seamless connectivity.",
  },
  {
    id: "2",
    title: "Anonymity",
    image: cat,

    description:
      "Rest assured, your email serves solely as a verification mechanism for DAIICT students. We uphold a steadfast commitment to privacy, refraining from establishing any user databases. Your information remains confidential, reinforcing a culture of anonymity and fostering a trusted environment.",
  },
  {
    id: "3",
    title: "Confess",
    image: confess,

    description:
      "Upon logging in, indulge in a cathartic experience where you can freely express your emotions and share stories. Embrace the liberating power of anonymity as you unburden yourself, without the fear of judgment or disclosure. Here, within the confines of our platform, your confessions shall find solace and resonate with others.",
  },
  {
    id: "4",
    title: "How We Display It?",
    image: display,

    description:
      "Our platform ensures the complete anonymity of confessions, safeguarding individual identities throughout the process. Our commitment to privacy extends to our backend systems, as we refrain from storing or accessing any user-specific information. Confessions are attributed solely to the respective batch numbers, preserving anonymity while providing a sense of collective representation.",
  },
];

const aboutDiscription =[
  'At Ventify, we provide a safe and anonymous space for students to express their thoughts, experiences, and confessions related to college life. We understand that college can be a transformative and challenging period, filled with memorable moments, personal struggles, and the need for an outlet to share it all.',
  'Our platform aims to foster a supportive and understanding community where students can freely express themselves without fear of judgment or repercussions. Whether you have a funny anecdote to share, a personal challenge to overcome, or simply want to connect with others who understand your journey, Ventify is here for you.',
  'We believe in the power of anonymity as it allows individuals to open up and share their stories more authentically. Rest assured that your identity will remain confidential, empowering you to express yourself openly and honestly. By embracing this anonymity, we encourage users to contribute, connect, and support each other through shared experiences.',
  
  'Through a range of features, such as anonymous posting, categorise confessions, voting and commenting systems, and batch-specific visibility, Ventify offers an engaging and interactive platform. This enables users to navigate through different topics, engage in discussions, and build connections with peers who relate to their experiences.',
  'However, with this freedom, we also emphasise the importance of responsible and respectful behaviour. Our community guidelines promote inclusivity, respect, and tolerance. We have implemented robust moderation systems to ensure that the platform remains a safe space for all users. Any content violating our guidelines will be promptly reviewed and appropriate actions will be taken.',
  'We value your privacy and prioritise the security of your data. Our platform is designed to safeguard your personal information, and we have implemented security measures to protect against unauthorised access. You can confide in Ventify with confidence, knowing that your privacy is a top priority.',
  'We encourage you to explore our platform, connect with fellow students, and share your unique college experiences. Together, lets build a vibrant community where everyones voice is heard, valued, and respected.',
  'If you have any questions, feedback, or concerns, please do not hesitate to reach out to us. We are here to support you and continuously improve Ventify based on your input.',
  'Welcome to a space where your college confessions find solace and connection!',
  
];

export {
  confessCategories,
  howItWorks,
  availableReactions,
  availableBatches,
  confessionsSortingOptions,
  communityGuidelines,
  availablePollDurations,
  CONFESSION_CHAR_LIMIT,
  POLL_QUESTION_CHAR_LIMIT,
  CHOICE_CHAR_LIMIT,
  COMMENT_CHAR_LIMIT,
  ALLOWED_VISIBLE_COMMENTS,
  availableTabs,
  EMAIL_DOMAIN,
  aboutDiscription,
};
