import sre from "../assets/img/sre.svg";
import cidi from "../assets/img/cidi.svg";
import ado from "../assets/img/ado.svg";
import powershell from "../assets/img/powershell.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I started at the front end with React, AWS and linux, went to the backend with LAMP stack, went to data engineering using Python, AWS redshift, and Luigi. Now I do Site Reliability Engineering/DevOps work with Azure, and dotnet. I enjoy being language/tool agnostic and believe understanding fundamentals is core to getting any project done.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={sre} alt="Image" />
                                <h5>Site Reliability Engineering</h5>
                            </div>
                            <div className="item">
                                <img src={cidi} alt="Image" />
                                <h5>CI/CD Pipelines</h5>
                            </div>
                            <div className="item">
                                <img src={powershell} alt="Image" />
                                <h5>Powershell Automation</h5>
                            </div>
                            <div className="item">
                                <img src={ado} alt="Image" />
                                <h5>Azure DevOps</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
