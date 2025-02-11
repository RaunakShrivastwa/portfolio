import React from "react";
import "./Project.scss";
import { Eye, GitHub} from "react-feather";
import { projects } from "../../../staticJson/static";
import { EyeClosed } from "lucide-react";

const Project = () => {
  return (
    <>
      <div className="m_container w-100">
        {projects.map((project) => (
          <div className="project items position-relative">
            <div class="project_img">
              <img
                className="img-fluid items img1"
                src={
                  project?.image ||
                  "https://cdn-icons-png.flaticon.com/256/4521/4521966.png"
                }
                alt=""
              />
            </div>
            <div class="project_disc p-1 f22  d-flex flex-column justify-content-center align-items-center">
              <strong className="text text-light p-2">{project?.name}</strong>
              <div className="header_items_container gap-2  p-2 w-100 h-100 d-flex justify-content-between align-items-center">
                <span className="icons shadow border border-light github">
                  <GitHub className="i24 text-light" />
                </span>
                <p className="flex-grow-1 text-light f12">{project?.desc}</p>
              </div>
            </div>
            <div class="span1 d-flex justify-content-center text-dark">
              <a className="eye_con" href={project?.url}>
                <Eye className="mt-3 text-light open" />
                <EyeClosed className="closed text-light d-none mt-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
