import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../styles/ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <p>Projektet hittades inte</p>;
  }

  return (
    <>
      <div
        className="project-page-cover"
        style={{
          backgroundImage: `url(/images/${project.id}_large_cover.jpg)`,
        }}
      >
        <div className="home-top-container">
          <h1 className="projectpage-title">{project.title}</h1>
          <p>{project.shortDesc}</p>
        </div>
      </div>
      <div className="home-top-container">
        {project.background && (
          <>
            <h3 style={{ marginTop: "10vh" }}>Bakgrund</h3>
            <p className="paragraph">{project.background}</p>
          </>
        )}
        {project.idea && (
          <>
            <h3>Projektidé</h3>
            <p className="paragraph">{project.idea}</p>
          </>
        )}
        {project.process && (
          <>
            <h3>Projektgenomförande</h3>
            <p className="paragraph">{project.process}</p>
          </>
        )}
        {project.images && project.images.length > 0 && (
          <>
            <h3>Bilder</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              navigation={true}
              pagination={{
                el: ".swiper-custom-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return `<div className=${className}>
                  <span className="number">${index + 1}</span>
                  <span className="line"/>
                  </div>`;
                },
              }}
              breakpoints={
                {
                  800: {
                    slidesPerView: 1.25
                  }
                }
              }
            >
              {project.images.map((image, index) => (
                <SwiperSlide className="swiper-slide">
                  <figure>
                    <img
                      src={`/images/${image}.png`}
                      alt={`Project Image ${index + 1}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <figcaption><div><p>{project.imageCaption[index]}</p><h5>{project.imageSubCaption[index]}</h5></div></figcaption>
                  </figure>
                </SwiperSlide>
              ))}
              <div className="swiper-custom-pagination"></div>
            </Swiper>
          </>
        )}
      </div>
    </>
  );
}
