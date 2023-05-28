### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router gives us a way to make single Page apps without refreshing the page when navigating links.

- What is a single page application?
  A single page application is a app or web page that loads one web page and updates single parts of the page
  when needed.

- What are some differences between client side and server side routing?
  Client side rendering does not need to make calls to a server to rerender whereas Server side rendering
  needs to make calls to a server to rerender.

- What are two ways of handling redirects with React Router? When would you use each?
  One way to make a redirect with React Router is using the Redirect component but it won't add to the browser history. If you want to push to the browser history then we can use useHistory hook and programmatically do it.

- What are two different ways to handle page-not-found user experiences using React Router?
  We can add a catch all path that will render a custom error ( 404 ) page and redirect.
  Or we can use the Redirect component.

- How do you grab URL parameters from within a component using React Router?
  To grab URL parameters we can use useParams hook that comes from React Router.

- What is context in React? When would you use it?
  Context in react is a means of storing data globally for our application.
  We would want to use context if we have to prop drill down to our children components and avoid passing
  props to all of them.

- Describe some differences between class-based components and function
  components in React.
  Class base components have life cycles and require handling more code for different cycles.
  Classes have to bind the this object and uses contructors.
  Function components use less code to get the same results and we can hold state for every component like classes gut uses less code and gets less cluttered.

- What are some of the problems that hooks were designed to solve?
  Hooks solve the problems of having to wrap classes and having to have large component code.
  With hooks we can modularize everything and have less repetitions of code.
