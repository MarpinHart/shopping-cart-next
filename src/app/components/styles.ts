import { SxProps } from "@mui/material";

export const projectBoxStyle: SxProps = {
  display: "flex",
  maxHeight: "200px",
  gap: "16px",
  color: "#13141f",
  width: "fit-container",
  backgroundColor: "#f9faff",
  padding: "0",
  margin: "16px 16px",
  borderRadius: "8px",
  img: {
    borderRadius: "8px 0 0 8px",
  },
  "& .title": {
    fontSize: "1rem",
    lineHeight: "1.25rem",
  },
  "& .product-details": {
    margin: "16px 0 16px",
    display: "flex",
    gap: "8px",
    flexDirection: "column",
  },
  "& .project-price": {
    fontSize: "14px",
  },
  "& .project-description": {
    display: "inline-block",
    fontSize: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
