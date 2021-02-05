var App = () => React.createElement(
  "div",
  { id: "map-display" },
  React.createElement(
    "h1",
    null,
    "Hello"
  ),
  React.createElement(
    "div",
    null,
    React.createElement("input", {
      id: "pac-input",
      className: "controls",
      type: "text",
      placeholder: "Enter start location" }),
    React.createElement(
      "span",
      { id: "dest" },
      "Enter destinations"
    ),
    React.createElement("input", {
      id: "dest1",
      className: "controls",
      type: "text",
      placeholder: "Enter destination" })
  ),
  React.createElement("div", { id: "map" }),
  React.createElement(
    "div",
    { id: "infowindow-content" },
    React.createElement("span", { id: "place-name", className: "title" }),
    React.createElement("br", null),
    React.createElement(
      "strong",
      null,
      "Place ID:"
    ),
    " ",
    React.createElement("span", { id: "place-id" }),
    React.createElement("br", null),
    React.createElement("span", { id: "place-address" })
  )
);

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLE1BQ1I7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFDQSxVQUFHLFdBREg7QUFFQSxpQkFBVSxVQUZWO0FBR0EsWUFBSyxNQUhMO0FBSUEsbUJBQVksc0JBSlosR0FERjtBQU9BO0FBQUE7QUFBQSxRQUFNLElBQUcsTUFBVDtBQUFBO0FBQUEsS0FQQTtBQVFFO0FBQ0EsVUFBRyxPQURIO0FBRUEsaUJBQVUsVUFGVjtBQUdBLFlBQUssTUFITDtBQUlBLG1CQUFZLG1CQUpaO0FBUkYsR0FGRjtBQWlCRSwrQkFBSyxJQUFHLEtBQVIsR0FqQkY7QUFrQkU7QUFBQTtBQUFBLE1BQUssSUFBRyxvQkFBUjtBQUNFLGtDQUFNLElBQUcsWUFBVCxFQUFzQixXQUFVLE9BQWhDLEdBREY7QUFDaUQsbUNBRGpEO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGO0FBQUE7QUFFNkIsa0NBQU0sSUFBRyxVQUFULEdBRjdCO0FBRXdELG1DQUZ4RDtBQUdFLGtDQUFNLElBQUcsZUFBVDtBQUhGO0FBbEJGLENBREY7O0FBMkJBLGVBQWVBLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9ICgpID0+IChcbiAgPGRpdiBpZD1cIm1hcC1kaXNwbGF5XCI+XG4gICAgPGgxPkhlbGxvPC9oMT5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICBpZD1cInBhYy1pbnB1dFwiXG4gICAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN0YXJ0IGxvY2F0aW9uXCIvPlxuXG4gICAgPHNwYW4gaWQ9XCJkZXN0XCI+RW50ZXIgZGVzdGluYXRpb25zPC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICBpZD1cImRlc3QxXCJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2xzXCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVzdGluYXRpb25cIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJpbmZvd2luZG93LWNvbnRlbnRcIj5cbiAgICAgIDxzcGFuIGlkPVwicGxhY2UtbmFtZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+PC9zcGFuPjxiciAvPlxuICAgICAgPHN0cm9uZz5QbGFjZSBJRDo8L3N0cm9uZz4gPHNwYW4gaWQ9XCJwbGFjZS1pZFwiPjwvc3Bhbj48YnIgLz5cbiAgICAgIDxzcGFuIGlkPVwicGxhY2UtYWRkcmVzc1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19