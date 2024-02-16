const classCompData = [
  {
    id: 1,
    question: "When to use Class Components?",
    answer:
      "Class components should be used when you have complex components that require state or lifecycle methods. They are also ideal when you want to build reusable components that can be used in multiple parts of your application. Class components are a great choice for building large and complex components like forms, tables, and modals. Class components are recommended for building container components.",
  },
  {
    id: 2,
    question: "Why are Class components called stateful components ?",
    answer:
      "Also referred to as stateful components because they use logic and state. state implementation inside a class component requires to be done inside the conststructor so that when the object of that class is instantiated the constructor is called first and state gets initialized Example: {this.state = {name: ‘ ‘}}",
  },
  {
    id: 3,
    question: "Should we still use Class components ?",
    answer:
      "Although there is not going to be any new feature or performance enhancement in this area but a lot of products still use class components due to legacy code.",
  },
];

export default classCompData;
