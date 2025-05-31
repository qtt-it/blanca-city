import { Box } from "@mui/material";

export const IFrameMap: React.FC = () => {
  return (
    <Box>
      <section style={{ height: "90vh", width: "100%", overflow: "auto" }}>
        <iframe
          src="https://360batdongsan.com/360-sun-vung-tau/"
          title="Web 3D"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
        />
      </section>
    </Box>
  );
};
