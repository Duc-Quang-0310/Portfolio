import React, { useMemo } from "react";
import { FirstEntry } from "./Components/FirstEntry";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Stack, X } from "react-bootstrap-icons";
import { AboutMe } from "./Components/AboutMe";
import { Education } from "./Components/Education";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";
import { Copyright } from "./Components/Copyright";

enum Tab {
  ABOUT_ME = "About Me",
  EDUCATION = "Education",
  PROJECT = "Project",
  CONTACT = "Contact",
}

const NAV_HEIGHT = 100;

function App() {
  const [navDisplay, setNavDisplay] = React.useState<boolean>(true);
  const [windowWith, setWindowWith] = React.useState<number>(window.innerWidth);
  const [stackStatus, setStackStatus] = React.useState<boolean>(true);
  const [tab, setTab] = React.useState<Tab | null>(null);
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const education = React.useRef<HTMLDivElement>(null);
  const project = React.useRef<HTMLDivElement>(null);
  const contact = React.useRef<HTMLDivElement>(null);

  const renderIcon = useMemo(() => {
    if (!stackStatus) {
      return (
        <Stack
          color="#FC6D6D"
          fontSize={28}
          onClick={() => setStackStatus((prev) => !prev)}
        />
      );
    }
    return (
      <X
        color="#FC6D6D"
        fontSize={40}
        onClick={() => setStackStatus((prev) => !prev)}
      />
    );
  }, [stackStatus]);

  const handleScroll = React.useCallback(() => {
    const windowHeight = window.scrollY;
    const aboutMeTop = aboutMeRef.current?.offsetTop || 0;
    const educationTop = education.current?.offsetTop || 0;
    const projectTop = project.current?.offsetTop || 0;
    const contactTop = contact.current?.offsetTop || 0;

    if (aboutMeTop || educationTop || projectTop || contactTop) {
      if (windowHeight < aboutMeTop && windowHeight < educationTop) {
        setTab(Tab.ABOUT_ME);
      } else if (
        windowHeight >= educationTop - NAV_HEIGHT &&
        windowHeight < projectTop - NAV_HEIGHT
      ) {
        setTab(Tab.EDUCATION);
      } else if (
        windowHeight >= projectTop - NAV_HEIGHT &&
        windowHeight < contactTop - NAV_HEIGHT
      ) {
        setTab(Tab.PROJECT);
      } else if (windowHeight >= contactTop - NAV_HEIGHT) {
        setTab(Tab.CONTACT);
      }
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWith(window.innerWidth);
    });

    if (windowWith <= 680) {
      setNavDisplay(false);
    } else {
      setNavDisplay(true);
    }

    return () => {
      window.addEventListener("resize", () => {
        setWindowWith(window.innerWidth);
      });
    };
  }, [windowWith]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="app-container">
      <Navbar
        fixed="top"
        bg="light"
        className={`py-3 ${!navDisplay && "flex-column"}`}
      >
        <Container fluid>
          <Navbar.Brand className="brand">Quang's Portfolio</Navbar.Brand>
          {navDisplay ? (
            <Nav>
              <Nav.Link
                className={`px-3 ${tab === Tab.ABOUT_ME && "nav-active"}`}
                onClick={() => {
                  aboutMeRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                className={`px-3 ${tab === Tab.EDUCATION && "nav-active"}`}
                onClick={() =>
                  education.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Details
              </Nav.Link>
              <Nav.Link
                className={`px-3 ${tab === Tab.PROJECT && "nav-active"}`}
                onClick={() =>
                  project.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Project
              </Nav.Link>
              <Nav.Link
                className={`px-3 ${tab === Tab.CONTACT && "nav-active"}`}
                onClick={() =>
                  contact.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Contact
              </Nav.Link>
            </Nav>
          ) : (
            renderIcon
          )}
        </Container>
        {!navDisplay && stackStatus && (
          <Nav className="flex-column pt-3">
            <Nav.Link
              className="px-3"
              onClick={() => {
                aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
                setStackStatus((prev) => !prev);
              }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              className="px-3"
              onClick={() => {
                education.current?.scrollIntoView({ behavior: "smooth" });
                setStackStatus((prev) => !prev);
              }}
            >
              Details
            </Nav.Link>
            <Nav.Link
              className="px-3"
              onClick={() => {
                project.current?.scrollIntoView({ behavior: "smooth" });
                setStackStatus((prev) => !prev);
              }}
            >
              Project
            </Nav.Link>
            <Nav.Link
              className="px-3"
              onClick={() => {
                contact.current?.scrollIntoView({ behavior: "smooth" });
                setStackStatus((prev) => !prev);
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        )}
      </Navbar>
      <FirstEntry />
      <Container fluid className="container-white" ref={aboutMeRef}>
        <AboutMe />
      </Container>
      <Container fluid className="container-grey" ref={education}>
        <Education />
      </Container>
      <Container fluid className="container-white" ref={project}>
        <Project />
      </Container>
      <Container fluid className="container-grey" ref={contact}>
        <Contact />
      </Container>
      <Container fluid className="container-white" ref={contact}>
        <Copyright />
      </Container>
    </div>
  );
}

export default App;
