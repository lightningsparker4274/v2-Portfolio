import Animeskill from "./Animeskill";

const Skills = () => {
  const html = [
    "HTML, CSS, JS",
    "DOM",
    "Semantic Tags",
    "Specificity",
    "Layout Techiques",
    "Responsive Design",
    "Animations",
  ];
  const Flutter = [
    "Basics",
    "State Management(BLOC, PROVIDER,)",
    "Networking (HTTP Requests)",
    "Animations",
    "Custom Widgets and Themes",
  ];
  const Node = [
    "Core Modules",
    "Express Framework",
    "Database Integration",
    "RESTful API Design",
    "JWT Authentication",
    "Error Handling",
  ];
  const Go = [
    "Control Structures",
    "Data Structures",
    "Concurrency",
    "Building REST APIs",
  ];
  const Java = [
    "Classes and Objects",
    "Object-Oriented Programming",
    "Collections Framework",
    "Exception Handling",
    "Multithreading and Concurrency",
    "Java Streams & Lambda Expressions",
  ];

  const React = [
    "Components and Props",
    "State and Lifecycle",
    "Hooks (useState, useEffect, etc.)",
    "React Router",
    "Context API",
    "Redux",
  ];

  const Spring = [
    "Dependency Injection & (IoC)",
    "Spring Boot Auto-Configuration",
    "Spring MVC and RESTful Web Services",
    "Data Access with Spring Data JPA(ORM)",
    "Spring Security",
  ];
  const Python = [
    "Python Core",
    "Error Handling",
    "OOP programming",
    "Decorators & Context Managers",
    "Web Scraping",
  ];
  const Docker = [
    "Docker Images and Containers ",
    "Dockerfile",
    "Docker Compose",
    "Networking ",
    "Volumes ",
    "Docker Hub",
  ];

  const Selenium = [
    "Basics of Selenium and WebDriver",
    "Locators & Web Elements Interaction",
    "Data-Driven Testing with Excel & CSV",
    "TestNG Integration and Annotations",
    "Cross-Browser Testing & POM",
    "Reporting with Extent Reports",
    "CI/CD Integration with Jenkins",
  ];

  /* ↓ ⇅ ⇩ ▼ Ⅴ ∨ ⩔ ▽  */
  return (
    <div className="max-h-[650px] overflow-auto mt-5">
      <div className="flex items-center justify-between pr-10">
        <span className="my-6 text-4xl font-extrabold bottom-2 font-rajdhani">
          Skills
        </span>
        <span className="text-xl text-gray-400">
          Scroll to More <span className="text-3xl">⇅</span>
        </span>
      </div>
      <div className="w-16 h-2 my-3 bg-purple-600 rounded-lg"></div>
      <div className="flex flex-wrap justify-between ">
        <Animeskill id="1" title="WEBSTACK" detial={html} color="web" />
        <Animeskill id="2" title="NODE" detial={Node} color="node" />
        <Animeskill id="8" title="React" detial={React} color="react" />
        <Animeskill id="3" title="JAVA" detial={Java} color="java" />
        <Animeskill id="4" title="FLUTTER" detial={Flutter} color="flutter" />
        <Animeskill id="10" title="Selenium" detial={Selenium} color="selenium"/>
        <Animeskill id="5" title="Go" detial={Go} color="go" />
        <Animeskill id="6" title="Spring" detial={Spring} color="spring" />
        <Animeskill id="7" title="Docker" detial={Docker} color="docker" />
        <Animeskill id="9" title="Python" detial={Python} color="python" />
      </div>
    </div>
  );
};

export default Skills;
