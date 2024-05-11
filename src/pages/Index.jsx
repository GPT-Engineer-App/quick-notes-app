import { Box, Button, Container, Flex, Grid, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaTrashAlt, FaEdit } from "react-icons/fa";

const notes = [
  { id: 1, type: "text", title: "Grocery List", content: "Milk, Eggs, Bread", tags: ["shopping"] },
  { id: 2, type: "image", title: "Vacation Ideas", content: 'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZhY2F0aW9uJTIwaWRlYXN8ZW58MHx8fHwxNzE1NDQ2OTAyfDA&ixlib=rb-4.0.3&q=80&w=1080', tags: ["travel"] },
  { id: 3, type: "text", title: "Meeting Notes", content: "Discuss project milestones", tags: ["work"] },
];

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Input placeholder="Search notes..." size="md" />
          <IconButton aria-label="Search" icon={<FaSearch />} ml={2} />
        </Flex>
        <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
          New Note
        </Button>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {notes.map((note) => (
            <Box key={note.id} p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold" fontSize="xl">
                {note.title}
              </Text>
              {note.type === "image" ? <img src={note.content} alt={note.title} style={{ width: "100%", height: "auto" }} /> : <Text mt={4}>{note.content}</Text>}
              <Flex mt={4} justifyContent="space-between" alignItems="center">
                <IconButton aria-label="Edit" icon={<FaEdit />} />
                <IconButton aria-label="Delete" icon={<FaTrashAlt />} />
              </Flex>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
