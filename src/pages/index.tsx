import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1">
          Hello :D
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
