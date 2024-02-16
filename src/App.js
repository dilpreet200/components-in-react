import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Dilpreet Singh
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Associate Software Engineer at TA Digital
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  <time
                    pubdate
                    dateTime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    Feb 15, 2024
                  </time>
                </p>
              </div>
            </div>
          </address>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Different Types of Components in React
          </h1>
        </header>

        <section className="justify-center gap-20">
          <ul>
            <li className="mb-10 text-left">
              <Link
                to="/classFAQs"
                className="w-2/4 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl "
              >
                <h2 className="font-medium dark:text-blue-500 hover:underline block mb-2 text-4xl font-semibold text-blue-gray-900">
                  Class component
                </h2>
              </Link>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                To develop class-based components in React, we can use
                JavaScript ES6 classes. To define a React component class, you
                need to extend React.Component, develop a render method that
                returns a React element by extending from React.Component.
              </p>
            </li>
            <li className="hover_img mb-10 text-left">
              <h3 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                Rendering jsx
              </h3>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Create a class that extends React.Component when establishing a
                class for a component. The render method will return the JSX to
                be rendered.
              </p>

              <img
                className="block my-4"
                src="./assets/images/class.png"
                alt="class component rendering jsx"
                height="100"
              />
            </li>
            <li className="mb-10 text-left">
              <h4 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                Life cycle methods
              </h4>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Each component in React has a lifecycle which you can monitor
                and manipulate during its three main phases. The three phases
                are: Mounting, Updating, and Unmounting. Example:
                componentDidMount(), componentDidUpdate(),
                componentWillUnmount()
              </p>
            </li>
            <li className="mb-10 text-left">
              <h5 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                stateful components
              </h5>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Also referred to as stateful components because they use logic
                and state. state implementation inside a class component
                requires to be done inside the conststructor so that when the
                object of that class is instantiated the constructor is called
                first and state gets initialized. Example:{" "}
                {"this.state = {name: ‘ ‘}"}
              </p>
            </li>
            <li className="mb-10 text-left">
              <h6 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                State
              </h6>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                In class components state variable is mutated and re-render is
                triggered automatically.
              </p>
            </li>
          </ul>

          <ul>
            <li className="mb-10 text-left">
              <Link
                to="/functionFAQs"
                className="w-2/4 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl "
              >
                <h2 className="font-medium dark:text-blue-500 hover:underline block mb-2 text-4xl font-semibold text-blue-gray-900">
                  Functional component
                </h2>
              </Link>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Functional component is a simple JavaScript pure function that
                takes an argument called props and returns a React element
                (JSX).
              </p>
            </li>
            <li className="hover_img_2 mb-10 text-left">
              <h3 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                Rendering jsx
              </h3>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Functional components are plain JavaScript functions, and they
                return JSX.
              </p>
              <img
                className="block my-4"
                src="/assets/images/function.png"
                alt="functional component rendering jsx"
                height="100"
              />
            </li>
            <li className="mb-10 text-left">
              <h4 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                Hooks
              </h4>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Before hooks were introduced in the React 16.8 version,
                functional components did not have their own state and could
                only return JSX that arouse the need for hooks, hooks are
                functions that let you "hook into" React state and lifecycle
                features from functional components. They let you use state and
                other React features without writing a class.
              </p>
            </li>
            <li className="mb-10 text-left">
              <h5 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                Stateless components
              </h5>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                Also referred to as stateless components because they merely
                accept data and render it in some way, they are mostly in charge
                of rendering user interfaces. To make functional components
                stateful, hooks can be used with ease. Example: const
                [name,SetName]= React.useState(‘ ‘)
              </p>
            </li>
            <li className="mb-10 text-left">
              <h6 className="block mb-2 text-xl font-semibold text-blue-gray-900">
                State
              </h6>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                In functional components state is never mutated but rather the
                component function is called again and state variables are
                replaced with the new state value. Also when the functional
                component encounters state change it re-renders automatically
                like class components.
              </p>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default App;
