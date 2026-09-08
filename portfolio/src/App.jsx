import { FaXTwitter, FaDribbble, FaLinkedinIn, FaGithub, FaArrowUp } from "react-icons/fa6";
import { BsArrowUpRight , BsArrowRight } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineAcademicCap , HiOutlineArrowDownTray } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { FiSearch, FiEdit3, FiCode, FiSend , FiArrowRight, FiClock , FiMail, FiPhone, FiMapPin } from "react-icons/fi";

import './App.css';


function App() {

  return (
    <header>
      <nav className="nav gap-4  p-4 d-flex justify-content-around align-items-center gap-4  ">
        <div className="d-flex align-items-center text-white">
          <span className="marked">W</span>
          <div>Workfolio</div>
        </div>
        <div>
          <ul className=" ulist d-flex align-items-center  gap-5 text-white list-unstyled">
            <li className='text-decoration-none'><a href="">Home</a></li>
            <li className='text-decoration-none'><a href="">About</a></li>
            <li className='text-decoration-none'><a href="">Services</a></li>
            <li className='text-decoration-none'><a href="">Skills</a></li>
            <li className='text-decoration-none'><a href="">Experience</a></li>
            <li className='text-decoration-none'><a href="">Portfolio</a></li>
            <li className='text-decoration-none'><a href="">Contact</a></li>
          </ul>

        </div>
        <div>
          <button className=" myb  rounded-pill px-4 border-0  py-2  w-50px">Let's Talk ↗</button>
        </div>
      </nav>

      <section className="hero-section d-flex align-items-center justify-content-center">
        <div className="container text-center">

          <div className="profile-img mb-4">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQcFBgMECAL/xAA4EAABAwMCAwYEBQMEAwAAAAABAAIDBAUREiEGMUEHE1FhcYEUIpGhFSMyQrFSwdFicuHwJYKy/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQACAwAAAAAAAAAAAQIRAxIhMRNhBCJR/9oADAMBAAIRAxEAPwC6EREBERAREQSiIgIilAUE4UrQu0fiR1KBaKN5E0rdU7m/tZ0HqUt0mTdZi+8a2e0RSGaqZLIz9kZBOfbktZi7WaTUDNbpu6PJ8bwdlUV+LjPj5t/Dp6rsGmbAPhXHDHMa5j/HZU7NOj0NYOKLRf2/+Oq2ulxkwv8AlkHt19lmQvKkFTPbaprg97Cw5ZIw4IPiCr37O+MBxBSmkrHj4+FoJOMd83+oefipmStx/wAbqpXyF9KyiQihEEomUQSEQIgIiICIiDiUqERIiIiBERBKIiAiIg4auoZSUstRIRoiYXOz4AZXny5XKSrram4VDvzJnmQ56DoPpgeyt3tLr/guFalodgzkRex5/ZUjSM/ELnDA9wbFrGsuOwas88tN+LHbcOEuCG3ql/E7q5wEm8UTdsN81m7rwjQyUzYZGjSzZhA3aszScSWOhijp5Kp1O1rdLe9gewHHmQuxW1VPPTiaKVjojuHg7EeK5suzqwmPxTXEVm+AeYy8vjP6SeYXU4autRZ7jBVQE97SyawP6m8nNPkQth4zudtnLoqeczTDkImFwBz1K1CUGKsEgIwQH/XmtMd69Z8km/HqW31kNfQwVdO7VFMwPafIrsrSOyet7/ht1OXZ+GlIb/tO4W7roxu5tx5TV0IiKUAUqFOUEooUhAREQEREHEiIgIikIIUoUQEREBDyROiCr+2ar2t1EM765nY9gP7rV+zmh+Puc00WnNO4jURkasf8/ZZHtundBc2SgZ00rWs9S5yxnYrWd06uie4Zdh2Cd/X7/Zc3J7LXZxa3Izd8s3Es9Q0yVfeN1OJbGMgj9uAfbOVmLvQz0nBUseQKkRguIAGM81tEtSwBugZeeiwXFFxNNb6qKajmeCzAe0DS703zsqW7bTGqtrrFWSW+N9vdLuw6wwfqd0PosPVwPjEbZWFskfyPb7clY/Dle2Oz4lGhwyAHc1X12rY5bvURvOO83afFX7W+KZYSTay+xirxLVUpIJdGHDzwrV+vuvP/AADcfwviCllc7DC8Ndjlg7b+XJX8xwc0OByCtOO+acvNPduQckUItWSUHNEHNBKkKFKAiIgIiIOJERAUhApQQiIgIiICHkiHkgqHtlp21dcxjebIWh31J/76qv8AhS4Dh/iKnq5toHflyn/SevscLe+NK1lZea3/AExnf0IAVcXaMG2MndzLng+xXLjlu2Oy46xlXy0MqXRyQTOZ1a5uCCPdYDiOsroo3MkriMg/KylzkeRyvng/4mLhq3VEfz5gYXsd6dPArmvPEVPDARLTPa4eLVnjZK68ctetHbNMxs0lXI5xxhjMBuPVaROfi7nrZlzWnDT4lZXiO9vq5Hx07dDT+p3+Fx2SjDmPqHDAb8rAt556488u104IK6ann+TBLD1V79mXFn43QfB1A01NO3H+4BUWynEkznc8q0Oyy3zm/VFZCAynpIQxwxs95HL6Z+ynG+qZzePq30Chpy0HxUhbOdKIg5oJCIiApUKUBEUIONERBIRQFKAiIgIignZAzvhYziO4fh1rlkYNU8n5cLOrnnkFpV/7V6S23V1JQ0JrY4nFssve6MkcwwY398LTeL+06e6zwS2qmkpGQMIHfaS4OPNwxty2+qjLek4/fXzxf3Vuq5YY5O9qO6ZHKR+6TOXf2H1WJoY4KriSz2V+l7WuAm8C45cQtbdc62pldOHDXq2kd8xBPMhfNvlmo6tlZG7NRHIJWuceoOd1lhxe7rbk5dzUei6e3ttETaFgxC1uIfNvQey1/iSkjngf8ozhbpQz0vENgp63JEVREJWv6sJH8g5HstSlpak1Biny+N+THKOTx4rn5uK4Xcb8PLMpqqiudubFNpkGA44XcjAhpaenGNRBe7HmCf5WwccWeamraR0bCY5nlgxzOBk/3WoSVL4rgX42bpAHkry24+lk7eOe2xlssYPN7OfTI5fdXpwFSfB2RlMAHmbEpeBz1bu+nJVRS0UFXRCSCRokadQbncLvwT1DYzTitnY3GwbIQWqMeTrfTPj7Y+L03Gx2UqmeDOIa6xcQR0tdVvmttXII3NkcXd08/pcCeXgfJXMuvG9vXFlLL6KVCKUJClQgQSpUZRBKhEQcaIiApUKQgIiICxPFcdZLw3c2W14ZWOpniFxOMOwVll1bm3VbqpvjC/8A+Sg8nyB+cuO/PUFxF5ex7XYDsZB8QuyQ3SBgDbouB7XMe04GnqrDipXfkjS4tPUdF2W5681xxsDIi08gcZX2zwUC3eyW5fiFjnss8rtNLJ3jWtdj5HHkfIO/lbrxPDMKW3x0gGpk3zemFSfZ9dPwniuke52mGd3w8no7ln3wr2uFNJUV9tfv8MWuEvqBsP5CpyTeOl+OyZbrXOIWCpskU8bzHNST64ZdO2fEeIzsqvltja6pmZEAypiOHxeGd1elfRsqpBF3bRBC0fIBgHwCoXtC7yzccVUtHI9jgWOBBwf0j7bLP8O41/N6+oo5qXMMrOX1HmFx1NW5rx35cDnYnmPdd2nvkF0ibMWATR7Ss/wlYKWspyYiCcD1BH/Cwv31vP0x98qJX0MVS1+prXt1FuxODkH6hekbRUCrtdJUA572Bj8+OQF5rFQ2lEcD2tcyR2HMcOYV89nNU2o4VpogdTqUugIzkgNO2fbC6eL5pzc0922dERasRSoRQJUjkoClARMplSONERAUhQigSiIgL4mYJI3RuGQ5pb9V9rqXSqNFbqqqaA4wxOeAepAyg8wXKA01dU05GO6le3GOWCsfKDpO5WVLqy/3V7o4e9rKt5fojwMuO5xk8ltVg4FrXump+ILFOyKQfl1LJml8TvQOOR47JllMVsccsvit2udI4xnbDTt4rtNB0jPgshxJw1V8N3cMlPe0so/JnaNnY6HwK6IOVMsym0ZY3G6qcZGASD4jmvS3Btz/ABrhuiqnnL5YW6/J42d9wV5paVcPYjc9dvraBx+ank7xrT/S4f5CmoWHPqLABs7qqF7ZIdHFrnEbPpo3fdwV/wBQWsMjnb6sYXn/ALXas1XGMsbsfk08bCB0O5x9woGm08joJ4pWHByAfRbWHMgpZ+9/VqAjPqP+lafKcNG3ULaq/D2xhp+URNfj/wBQsOafHRwX66ra4RXCWGcMdFGeThn3Vu9i8QNtulZG9zqepqW6Wu6ODBk/wPZUfdHCSueRvsM+ey3DsmvVdQ8VUVDDUvFJVy6JoCctdkbOx0IxzC0wx1Ns887fHodFClXUEREEoiIgRFCgQiIgIiIJREQR1XzIxsjSx4Ba4YIPUL66r4leI43SHkxpcfYIPOj5qPh3iyrEtDDW0cUskZhlGxbnYjwwt0or9Yp6uLvp7tZKk47ptTI7u3A+GrII9fZVvdJ/jK6oqHbmWV7/AKlZu08az0lCy3XWlhuFBG3AEw+drfIlV5MdxtxZzHytk7UagSWOemLmyTRtbKJdGNY/6FUsM2titDiK40fFNnabOSY2tLHB+zo3H9pCqUNfTvfDKMPjOHAqnD80t/I1bLHeL9lt3ZXdW0HGMET34jq2OicPP9Q/g/VaH3i5aWtloquCqhyJIZGyNx5HOFs53qi8XGK30L6ycatGzGf1O/x/ZeYLtdJbvdKq4znMlTIZD/AHsAArT7Tb62s4eoaa3TCaoqJNOiIhzg1zB0H+7Cr+h4G4lrG6xbTA3+qokbGfpz+yi2T7UyW/I16R+4B9VkIbqC6n73Vhsfcvx08CuS5cK363OPxFukc0fviIePtuscykqIHaqiCSMdNbSMlReuS39sXK54fM9wOQTss7wbXNtnFVpq3EBkdS3VnwJwf5WBZkDOAAOZUxyubI12k/KQR7FXij1+D4DI8fFF0bLWRV9po6qB2qKWFjmkei72VAIFClAJTKIglQiKAREQEREEooUoIXxNG2WJ8T/wBL2lpx5hfaIPNvFnDk/Dd4koJpGyN0iSJ7erCTjbodsLW6tmf3bBucK5e2ezBzKS+R5y0Cmmb5ZLmu9iSPcKoKlmXjI2IIUwdSKokZAwRvcwPJJ0uIz4Zwkrw95c9usk7k7lcOTlo6NGEJynhuvtrGOcMMAxuThHVBJJbtl2xXFLKSNDNgeZ6o1pOMcvNB2IpZIiHRO0yA6muB5HxV62e6Nr7bTVA5yxtcc+OFQoOo45YW5Wni2ks9nihfI6WcAgRR7kbnn4LHmw7TxvwZ9bdrFurmOY4HGcZCrjjON8tG1zCGvY7l5FdCfjW5VEhfGxkTDyafmP1WJrLjUVbtU8rnu8+X0VcOKy7acvNjlNR0Ax5IaDojG2BzKkN0fo+p3Kl7s+q+C5dDkehuxaqmqODGtmcXCGpexh8tj/JW/LQexOPRwLC/IJkqZj9H4/st9QSihEE5TKhEE5RQiD6REUAiIgIiIJUIiDE8T0FPcrBX01U0ujMLnbcwW7gj3XmibeMO67FEUwYgnc+q+clEQQzdylzjyUog4jO8OLRgD0XHGS6Q5PMoiipjnBwFLifFEUofOVBRFI9KdkTGs7PrRpGNTHOPqXOW5oigEREBFCIClEQf/9k="
              alt="profile"
            />
          </div>

          <div className="status-badge mx-auto mb-4">
            <span className="dot"></span>
            Available for new projects
          </div>

          <h1 className="hero-title fw-bold">
            I'm Tina Thummar, a{" "}
            <span className="text-primary-custom">
              product designer & developer
            </span>{" "}
            building delightful digital experiences.
          </h1>

          <p className="hero-desc mx-auto mt-4">
            For nearly a decade I've helped startups and studios ship interfaces
            that are as dependable as they are beautiful — from first sketch to
            final pixel.
          </p>

          <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-primary px-5 py-3 fs-5 rounded-pill fw-semibold">
              View My Work
            </button>

            <button className="btn btn-outline-light px-5 py-3 fs-5 rounded-pill fw-semibold">
              Let's Talk →
            </button>
          </div>

          <section className="trusted-section py-5">
            <div className="container text-center">

              <div className="social-icons d-flex justify-content-center gap-3 mb-5">

                <a href="#" className="social-box">
                  <FaXTwitter size={22} />
                </a>

                <a href="#" className="social-box">
                  <FaDribbble size={22} />
                </a>

                <a href="#" className="social-box">
                  <FaLinkedinIn size={22} />
                </a>

                <a href="#" className="social-box">
                  <FaGithub size={22} />
                </a>

              </div>


              <h6 className="trusted-title mb-5">
                TRUSTED BY FORWARD-THINKING TEAMS AND STUDIOS
              </h6>


              <div className="row justify-content-center align-items-center g-4 company-row">

                <div className="col-6 col-md-2">
                  <h4 className="company-logo">Alitalia</h4>
                </div>

                <div className="col-6 col-md-2">
                  <h4 className="company-logo">HSBC</h4>
                </div>

                <div className="col-6 col-md-2">
                  <h4 className="company-logo">LEXMARK</h4>
                </div>

                <div className="col-6 col-md-2">
                  <h4 className="company-logo">Walmart</h4>
                </div>

                <div className="col-6 col-md-2">
                  <h4 className="company-logo">Signify</h4>
                </div>

                <div className="col-6 col-md-2">
                  <h4 className="company-logo">TomTom</h4>
                </div>

              </div>

            </div>
          </section>
        </div>
      </section>

      <section className="about-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
              A short story, and a few numbers that sum up the journey
            </p>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-9">
              <p className="about-text text-center">
                I'm a multidisciplinary product designer and front-end developer
                based in Austin, Texas. I help founders turn rough ideas into
                refined, usable products — pairing research-driven design
                decisions with clean, accessible code. When I'm not pushing pixels
                you'll find me sketching type, mentoring juniors, or chasing good
                coffee.
              </p>
            </div>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="about-card">
                <h2>8+</h2>
                <p>Years Experience</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="about-card">
                <h2>120+</h2>
                <p>Projects Shipped</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="about-card">
                <h2>48</h2>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="about-card">
                <h2>16</h2>
                <p>Awards Won</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="whatido-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="what-title">What I Do</h2>
            <p className="what-subtitle">
              A focused set of services, delivered end to end
            </p>
          </div>

          <div className="service-row">
            <div className="row align-items-center">

              <div className="col-2 col-md-1">
                <h1 className="service-number">01</h1>
              </div>

              <div className="col-8 col-md-10">
                <h3 className="service-title">UI / UX Design</h3>
                <p className="service-desc">
                  Research-led interfaces with clear hierarchy and effortless flows.
                </p>
              </div>

              <div className="col-2 col-md-1 text-end">
                <BsArrowUpRight className="service-icon" />
              </div>

            </div>
          </div>

          <div className="service-row">
            <div className="row align-items-center">

              <div className="col-2 col-md-1">
                <h1 className="service-number">02</h1>
              </div>

              <div className="col-8 col-md-10">
                <h3 className="service-title">Front-End Development</h3>
                <p className="service-desc">
                  Pixel-accurate, accessible builds in modern frameworks.
                </p>
              </div>

              <div className="col-2 col-md-1 text-end">
                <BsArrowUpRight className="service-icon" />
              </div>

            </div>
          </div>

          <div className="service-row">
            <div className="row align-items-center">

              <div className="col-2 col-md-1">
                <h1 className="service-number">03</h1>
              </div>

              <div className="col-8 col-md-10">
                <h3 className="service-title">Design Systems</h3>
                <p className="service-desc">
                  Scalable component libraries that keep teams shipping consistently.
                </p>
              </div>

              <div className="col-2 col-md-1 text-end">
                <BsArrowUpRight className="service-icon" />
              </div>

            </div>
          </div>

          <div className="service-row">
            <div className="row align-items-center">

              <div className="col-2 col-md-1">
                <h1 className="service-number">04</h1>
              </div>

              <div className="col-8 col-md-10">
                <h3 className="service-title">Brand & Identity</h3>
                <p className="service-desc">
                  Distinct visual identities that give products a memorable voice.
                </p>
              </div>

              <div className="col-2 col-md-1 text-end">
                <BsArrowUpRight className="service-icon" />
              </div>

            </div>
          </div>

          <div className="service-row">
            <div className="row align-items-center">

              <div className="col-2 col-md-1">
                <h1 className="service-number">05</h1>
              </div>

              <div className="col-8 col-md-10">
                <h3 className="service-title">Product Strategy</h3>
                <p className="service-desc">
                  Turning fuzzy goals into focused, validated roadmaps.
                </p>
              </div>

              <div className="col-2 col-md-1 text-end">
                <BsArrowUpRight className="service-icon" />
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="skills-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="skills-heading">Skills & Tools</h1>
            <p className="skills-subtitle">
              The craft and software I reach for every day
            </p>
          </div>

          <div className="row align-items-start mt-5">

            <div className="col-lg-5 mb-5">

              <h2 className="left-title">
                A blend of design taste and engineering rigor.
              </h2>

              <p className="left-text">
                I move comfortably between the canvas and the codebase, which
                means designs stay faithful from concept to production. Here's
                where I spend most of my time.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">

                <button className="skill-btn">Figma</button>

                <button className="skill-btn">React</button>

                <button className="skill-btn">TypeScript</button>

                <button className="skill-btn">SCSS</button>

                <button className="skill-btn">Webflow</button>

                <button className="skill-btn">Framer</button>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="skill-name">Interface Design</h5>
                  <span className="skill-percent">95%</span>
                </div>

                <div className="progress custom-progress">
                  <div className="progress-bar bar95"></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="skill-name">Front-End Development</h5>
                  <span className="skill-percent">90%</span>
                </div>

                <div className="progress custom-progress">
                  <div className="progress-bar bar90"></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="skill-name">Design Systems</h5>
                  <span className="skill-percent">88%</span>
                </div>

                <div className="progress custom-progress">
                  <div className="progress-bar bar88"></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="skill-name">Prototyping & Motion</h5>
                  <span className="skill-percent">82%</span>
                </div>

                <div className="progress custom-progress">
                  <div className="progress-bar bar82"></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="skill-name">Brand & Visual Identity</h5>
                  <span className="skill-percent">78%</span>
                </div>

                <div className="progress custom-progress">
                  <div className="progress-bar bar78"></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="experience-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="exp-heading">Experience</h1>
            <p className="exp-subtitle">
              The roles and milestones that shaped how I work today
            </p>
          </div>

          <div className="row">

            <div className="col-lg-6 mb-5">

              <div className="d-flex align-items-center mb-5">
                <div className="icon-box me-3">
                  <HiOutlineBriefcase />
                </div>
                <h2 className="section-title m-0">Work</h2>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <span className="timeline-year">2021 — Present</span>

                <h4 className="timeline-title">
                  Senior Product Designer
                </h4>

                <p className="timeline-company">
                  Lumen Inc. · Remote
                </p>

                <p className="timeline-text">
                  Lead designer on the analytics platform, owning everything from
                  research to shipped UI and the design system that supports it.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <span className="timeline-year">2018 — 2021</span>

                <h4 className="timeline-title">
                  Product Designer & Front-End
                </h4>

                <p className="timeline-company">
                  Northwind Studio · Austin
                </p>

                <p className="timeline-text">
                  Designed and built marketing sites and web apps for early-stage
                  startups, bridging design and engineering on small teams.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <span className="timeline-year">2016 — 2018</span>

                <h4 className="timeline-title">
                  UI Designer
                </h4>

                <p className="timeline-company">
                  Atlas Agency · Austin
                </p>

                <p className="timeline-text">
                  Crafted interfaces and brand systems for agency clients across
                  fintech, health, and consumer products.
                </p>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="d-flex align-items-center mb-5">
                <div className="icon-box me-3">
                  <HiOutlineAcademicCap />
                </div>

                <h2 className="section-title m-0">
                  Education & Awards
                </h2>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <span className="timeline-year">2012 — 2016</span>

                <h4 className="timeline-title">
                  BFA, Communication Design
                </h4>

                <p className="timeline-company">
                  University of Texas · Austin
                </p>

                <p className="timeline-text">
                  Graduated with honors. Focused on typography, interaction
                  design, and the craft of building usable systems.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <span className="timeline-year">2022</span>

                <h4 className="timeline-title">
                  Awwwards — Site of the Day
                </h4>

                <p className="timeline-company">
                  Lumen Analytics
                </p>

                <p className="timeline-text">
                  Recognized for design excellence and accessibility on a complex
                  data product.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <span className="timeline-year">2020</span>

                <h4 className="timeline-title">
                  CSS Design Awards — Winner
                </h4>

                <p className="timeline-company">
                  Marrow Coffee
                </p>

                <p className="timeline-text">
                  Honored for a bold, cohesive brand and e-commerce experience.
                </p>
              </div>

            </div>


            <div className="text-center mt-5 pt-4">
              <button className="resume-btn">
                <HiOutlineArrowDownTray className="resume-icon" />
                Download Full Resume
              </button>
            </div>

          </div>

        </div>
      </section>

      <section className="selected-work py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="work-heading">Selected Work</h1>
            <p className="work-subtitle">
              A closer look at a few projects and the impact they made
            </p>
          </div>

          <div className="row align-items-center gy-4">

            <div className="col-lg-6">
              <img
                src="data:image/jpeg;base64,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"
                alt="Serum Bottle"
                className="img-fluid project-img"
              />
            </div>

            <div className="col-lg-6">

              <p className="project-tag">WEB APP • 2024</p>

              <h2 className="project-title">Lumen Analytics</h2>

              <p className="project-desc">
                A calmer way to read product metrics. We rebuilt the information
                architecture and shipped a focused dashboard that cut
                time-to-insight in half.
              </p>

              <a href="#" className="case-study">
                View case study <BsArrowRight className="ms-2" />
              </a>

            </div>

          </div>

        </div>
      </section>

      <section className="selected-work py-5">
        <div className="container">

          <div className="row align-items-center gy-4">

            <div className="col-lg-6 order-2 order-lg-1">

              <p className="project-tag">MOBILE APP • 2023</p>

              <h2 className="project-title">Pace Fitness</h2>

              <p className="project-desc">
                An iOS coaching app designed around real gestures and motivation.
                Daily active users doubled within three months of launch.
              </p>

              <a href="#" className="case-study">
                View case study <BsArrowRight className="ms-2" />
              </a>

            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900"
                alt="Pace Fitness"
                className="img-fluid project-img"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="selected-work py-5">
        <div className="container">

          <div className="row align-items-center gy-4">

            <div className="col-lg-6">
              <img
                src="data:image/jpeg;base64,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"
                alt="Marrow Coffee Branding"
                className="img-fluid project-img"
              />
            </div>

            <div className="col-lg-6">

              <p className="project-tag">BRANDING • 2023</p>

              <h2 className="project-title">Marrow Coffee</h2>

              <p className="project-desc">
                A full identity system for a specialty roaster — logo, packaging,
                and a warm visual language that scaled across every touchpoint.
              </p>

              <a href="#" className="case-study">
                View case study <BsArrowRight className="ms-2" />
              </a>

            </div>

          </div>

        </div>
      </section>

      <section className="kindwords-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="kind-heading">Kind Words</h1>
            <p className="kind-subtitle">
              A few notes from people I've had the joy of working with
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="review-card">

                <div className="stars mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="review-text">
                  Daniel translated a vague idea into a product our users adore.
                  The detail in both design and code was outstanding.
                </p>

                <div className="d-flex align-items-center mt-4">
                  <img
                    src="https://i.pravatar.cc/100?img=5"
                    alt="Elena Ross"
                    className="profile-img"
                  />

                  <div className="ms-3">
                    <h6 className="profile-name">Elena Ross</h6>
                    <p className="profile-role">Founder, Lumen</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="review-card">

                <div className="stars mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="review-text">
                  Rare to find someone equally strong in design and engineering.
                  Deadlines met, communication clear, result above expectations.
                </p>

                <div className="d-flex align-items-center mt-4">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Marcus Hale"
                    className="profile-img"
                  />

                  <div className="ms-3">
                    <h6 className="profile-name">Marcus Hale</h6>
                    <p className="profile-role">PM, Northwind</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="review-card">

                <div className="stars mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="review-text">
                  Our design system was a mess before Daniel. He brought order and
                  consistency that let the whole team move twice as fast.
                </p>

                <div className="d-flex align-items-center mt-4">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt="Priya Nair"
                    className="profile-img"
                  />

                  <div className="ms-3">
                    <h6 className="profile-name">Priya Nair</h6>
                    <p className="profile-role">Design Lead, Atlas</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="work-process py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="process-heading">How I Work</h2>
            <p className="process-subtitle">
              A simple, collaborative process that keeps projects on track
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="process-card">

                <div className="step-number">01</div>

                <div className="process-icon-box">
                  <FiSearch className="process-icon" />
                </div>

                <h3 className="process-title">Discover</h3>

                <p className="process-text">
                  We dig into your goals, users, and constraints so we're solving the
                  right problem from day one.
                </p>

              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-card">

                <div className="step-number">02</div>

                <div className="process-icon-box">
                  <FiEdit3 className="process-icon" />
                </div>

                <h3 className="process-title">Design</h3>

                <p className="process-text">
                  Wireframes evolve into polished, interactive designs — reviewed
                  together at every milestone.
                </p>

              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-card">

                <div className="step-number">03</div>

                <div className="process-icon-box">
                  <FiCode className="process-icon" />
                </div>

                <h3 className="process-title">Build</h3>

                <p className="process-text">
                  Designs become accessible, performant front-end code with no
                  fidelity lost in handoff.
                </p>

              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-card">

                <div className="step-number">04</div>

                <div className="process-icon-box">
                  <FiSend className="process-icon" />
                </div>

                <h3 className="process-title">Launch</h3>

                <p className="process-text">
                  We ship, measure, and refine — with support through release and
                  beyond.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-section py-5">
        <div className="container text-center">

          <div className="cta-badge">
            Let's work together
          </div>

          <h1 className="cta-heading">
            Ready to bring your next idea to life?
          </h1>

          <p className="cta-text">
            I have room for one or two new projects this quarter. If you're
            building something you care about, I'd love to hear about it.
          </p>

          <button className="cta-btn">
            Start a Project
            <FiArrowRight className="ms-2" />
          </button>

          <div className="reply-time mt-4">
            <FiClock className="clock-icon" />
            <span>Typical reply within 24 hours</span>
          </div>

        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="contact-heading">Get In Touch</h1>

            <p className="contact-subtitle">
              Tell me about your project and I'll be in touch shortly
            </p>
          </div>

          <div className="row justify-content-center text-center mb-5">

            <div className="col-md-3 col-12 mb-3">
              <div className="contact-info">
                <FiMail className="info-icon" />
                <span>hello@example.com</span>
              </div>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <div className="contact-info">
                <FiPhone className="info-icon" />
                <span>+1 (555) 248-0192</span>
              </div>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <div className="contact-info">
                <FiMapPin className="info-icon" />
                <span>Austin, TX</span>
              </div>
            </div>

          </div>

          <div className="contact-box">

            <div className="row g-4">

              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control custom-input"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control custom-input"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control custom-input"
                />
              </div>

              <div className="col-12">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="form-control custom-input textarea-box"
                ></textarea>
              </div>

              <div className="col-12 text-center mt-3">
                <button className="send-btn">
                  Send Message
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="footer-wrapper">
        <footer className="footer py-5 text-white">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3">
                <h2 className="footer-logo mb-3">Workfolio</h2>
                <p className="footer-bio text-secondary mb-4">
                  Product designer and front-end developer crafting accessible, human-centered digital experiences. Always happy to talk about a new idea.
                </p>
                <div className="d-flex gap-2">
                  <a href="#twitter" className="social-btn" aria-label="Twitter / X">
                    <FaXTwitter />
                  </a>
                  <a href="#dribbble" className="social-btn" aria-label="Dribbble">
                    <FaDribbble />
                  </a>
                  <a href="#linkedin" className="social-btn" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="#github" className="social-btn" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
                <h6 className="footer-title mb-3">Navigate</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-3 col-lg-3">
                <h6 className="footer-title mb-3">What I Do</h6>
                <ul className="list-unstyled footer-links">
                  <li><a href="#uiux">UI / UX Design</a></li>
                  <li><a href="#frontend">Front-End Development</a></li>
                  <li><a href="#design-systems">Design Systems</a></li>
                  <li><a href="#branding">Brand  Identity</a></li>
                  <li><a href="#strategy">Product Strategy</a></li>
                </ul>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <h6 className="footer-title mb-3">Say Hello</h6>
                <p className="text-secondary mb-3">
                  1428 Maple Avenue<br />
                  Austin, TX 78701
                </p>
                <p className="mb-1">
                  <span className="fw-bold">Phone:</span>{' '}
                  <a href="tel:+15552480192" className="footer-contact-link">
                    +1 (555) 248-0192
                  </a>
                </p>
                <p>
                  <span className="fw-bold">Email:</span>{' '}
                  <a href="mailto:hello@example.com" className="footer-contact-link">
                    hello@example.com
                  </a>
                </p>
              </div>
            </div>

            <hr className="footer-divider my-4" />

            <div className="text-center footer-bottom">
              <p className="mb-1 text-secondary">
                 Copyright <strong className="text-primary-link">Workfolio</strong> All Rights Reserved
              </p>
              <p className="mb-0 text-secondary">
                Designed by <a href="https://bootstrapmade.com" target="_blank" rel="noreferrer" className="text-primary-link text-decoration-none">BootstrapMade</a>
              </p>
            </div>
          </div>
        </footer>
      </section>

    </header>
  )
}

export default App
