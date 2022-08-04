import { Box } from "@mui/material";

const LoadingPage = () => {
    return (
        <>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 30,
        }}>
       <div class= "loader3">
        <span></span>
        <span></span>
        <span></span>
        </div>
        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 3,
        }}>
       <div class= "loader2">
        Loading
        </div>
        </Box>
        
        </>
        );
};

export default LoadingPage;
    

    