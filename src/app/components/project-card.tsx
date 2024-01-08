import { Project } from "../../types/project";
import Image from "next/image";
import { ProjectButton } from "./project-button";
import { Box, Typography } from "@mui/material";
import { projectBoxStyle } from "./styles";
import { CartProject } from "@/types/cart-project";

// Can be dynamic
const CURRENCY = "€";

const ProjectCard: React.FC<{ project: Project | CartProject }> = ({
  project,
}) => {
  return (
    <Box sx={projectBoxStyle}>
      {project?.image && (
        <Image
          src={project?.image}
          alt={`project-image-${project.id}`}
          width={200}
          height={200}
        />
      )}

      <Typography className="product-details" paragraph>
        <span className="project-name">{project.name}</span>
        <span className="project-price">
          {project.price_per_ton}
          {CURRENCY} per Ton
        </span>
        <span style={{ fontSize: "12px" }}>
          Earliest delivery date: {project.earliest_delivery}
        </span>
        <span className="project-description">{project.description}</span>
        <span style={{ fontSize: "12px" }}>{project.country}</span>
      </Typography>

      <ProjectButton project={project} />
    </Box>
  );
};

export { ProjectCard };
