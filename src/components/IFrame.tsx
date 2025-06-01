// "use client";
import { Box } from "@mui/material";

const IframeMap: React.FC = () => {
  return (
    <Box>
      <section style={{ height: "90vh", width: "100%", overflow: "auto" }}>
        <iframe
          src="https://360batdongsan.com/360-sun-vung-tau"
          title="Web 3D"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </Box>
  );
};

export default IframeMap;
