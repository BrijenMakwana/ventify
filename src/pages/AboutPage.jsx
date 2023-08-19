import { List, ListItem, Heading, Box } from "@chakra-ui/react";
import { aboutDiscription } from "../assets/data/data";
import ContributorList from "./ContributorList";
import color from "../styles/colors";
// import CommunityGuidelines from "../components/CommunityGuidelines";

const About = () => {
  return (
    <Box>
      <Heading m="capitalize" fontSize="30px" textAlign="center">
       About
      </Heading>

      <List
        spacing={3}
        margin="12px"
        fontSize="22px"
        p={{ base: "1rem 20px", md: "1rem 6rem" }}
      >
        {aboutDiscription.map((element, index) => (
          <ListItem key={index}>{element}</ListItem>
        ))}
      </List>

      {/* <CommunityGuidelines /> */}
      <ContributorList />
    </Box>
  );
};

export default About;
