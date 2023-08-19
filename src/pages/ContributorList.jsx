import { useState, useEffect } from "react";
import { Box, Flex, Avatar, Text, Link, Heading } from "@chakra-ui/react";
import color from "../styles/colors";

const ContributorCard = ({ avatarUrl, name, profileUrl, githubUrl }) => {
  const [bio, setBio] = useState("");
  const [contributorName, setContributorName] = useState("");

  useEffect(() => {
    fetch(githubUrl)
      .then((response) => response.json())
      .then((data) => {
        setBio(data.bio || "No bio available");
        setContributorName(data.name || name);
      })
      .catch((error) => console.error("Error fetching data from API:", error));
  }, [githubUrl, name]);

  const githubProfileUrl = `https://github.com/${profileUrl}`;
  return (
    <Box
      boxShadow="md"
      padding="3"
      borderRadius="md"
      style={{ bg: color.primary, position: "relative", marginLeft: "6px" }}
      borderWidth="2px"
      borderColor="gray.200"
      minH="150px"
      maxW="400px"
    >
      <Avatar
        size="md"
        src={avatarUrl}
        position="absolute"
        top="2"
        left="2"
        zIndex="1"
      />
      <Box ml="12">
        <Text fontWeight="bold" fontSize="16px" mb="-1">
          {contributorName}
        </Text>
        <Link href={githubProfileUrl} target="_blank" fontSize="13px">
          <Text>@{profileUrl}</Text>
        </Link>
      </Box>

      <Box mt="20px">
        <Text mb="2" fontSize="12px">
          {bio}
        </Text>
      </Box>
    </Box>
  );
};

const ContributorList = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/BrijenMakwana/ventify/contributors")
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.error("Error fetching data from API:", error));
  }, []);

  return (
    <>
      <Heading
        as="h2"
        textTransform="capitalize"
        fontSize="19px"
        marginLeft="10px"
      >
        Contributors:
      </Heading>

      <Flex direction="row" align="center" mt="3">
        {contributors.map((contributor) => (
          <ContributorCard
            key={contributor.id}
            avatarUrl={contributor.avatar_url}
            profileUrl={contributor.login}
            name={contributor.name || contributor.login}
            githubUrl={contributor.url}
          />
        ))}
      </Flex>
    </>
  );
};

export default ContributorList;
