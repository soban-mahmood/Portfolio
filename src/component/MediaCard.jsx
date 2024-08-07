import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Project from "../Data";

function MediaCard() {
  console.log(Project.link);
  return (
    <>
      <div className="mb-20">
        <h1 className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#0788FF] m-20">
          Project
        </h1>
        <div className="flex justify-evenly rounded-lg flex-wrap gap-10">
          {Project.map((project) => (
            <Card sx={{ maxWidth: 400 }} key={project.name}>
              <CardMedia
                component="img"
                alt={project.name}
                image={project.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-lg font-bold  text-[#0788FF]"
                  >
                    Open Project ...
                  </a>
                </Typography>
              </CardContent>
              <CardActions>
                <p>{project.desc}</p>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default MediaCard;
{
  /* <CardMedia
  sx={{ height: 140 }}
  image="/static/images/cards/contemplative-reptile.jpg"
  title="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Lizard
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
</CardActions> */
}
