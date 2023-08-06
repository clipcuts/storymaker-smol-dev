import { Box, Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("/api/progress")
        .then(response => {
          setProgress(response.data.progress);
        })
        .catch(error => {
          console.error("Error fetching progress:", error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%" p={4}>
      <Progress value={progress} size="lg" colorScheme="teal" />
    </Box>
  );
};

export default ProgressBar;