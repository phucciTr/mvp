var App = () => React.createElement(
  "div",
  { id: "map-display" },
  React.createElement(
    "h1",
    null,
    "Hello"
  ),
  React.createElement("a", { href: "", id: "url" }),
  React.createElement(
    "div",
    null,
    React.createElement("input", {
      id: "start-point",
      className: "controls",
      type: "text",
      placeholder: "Enter start location" }),
    React.createElement("input", {
      id: "end-point",
      className: "controls",
      type: "text",
      placeholder: "Enter final destination" })
  ),
  React.createElement("input", { type: "submit", id: "submit" }),
  React.createElement(
    "span",
    { id: "dest" },
    "Enter destinations"
  ),
  React.createElement("input", {
    id: "waypoints",
    className: "controls",
    type: "text",
    placeholder: "Enter en-route destinations" }),
  React.createElement("div", { id: "right-panel" }),
  React.createElement("div", { id: "map" }),
  React.createElement(
    "div",
    { id: "infowindow-content" },
    React.createElement("span", { id: "place-name", className: "title" }),
    React.createElement("br", null),
    React.createElement("span", { id: "place-address" })
  )
);

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLE1BQ1I7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUUsNkJBQUcsTUFBSyxFQUFSLEVBQVcsSUFBRyxLQUFkLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUNBLFVBQUcsYUFESDtBQUVBLGlCQUFVLFVBRlY7QUFHQSxZQUFLLE1BSEw7QUFJQSxtQkFBWSxzQkFKWixHQURGO0FBT0E7QUFDRSxVQUFHLFdBREw7QUFFRSxpQkFBVSxVQUZaO0FBR0UsWUFBSyxNQUhQO0FBSUUsbUJBQVkseUJBSmQ7QUFQQSxHQUhGO0FBaUJFLGlDQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCLEdBakJGO0FBa0JFO0FBQUE7QUFBQSxNQUFNLElBQUcsTUFBVDtBQUFBO0FBQUEsR0FsQkY7QUFtQkU7QUFDQSxRQUFHLFdBREg7QUFFQSxlQUFVLFVBRlY7QUFHQSxVQUFLLE1BSEw7QUFJQSxpQkFBWSw2QkFKWixHQW5CRjtBQXlCRSwrQkFBSyxJQUFHLGFBQVIsR0F6QkY7QUEwQkUsK0JBQUssSUFBRyxLQUFSLEdBMUJGO0FBMkJFO0FBQUE7QUFBQSxNQUFLLElBQUcsb0JBQVI7QUFDRSxrQ0FBTSxJQUFHLFlBQVQsRUFBc0IsV0FBVSxPQUFoQyxHQURGO0FBQ2lELG1DQURqRDtBQUVFLGtDQUFNLElBQUcsZUFBVDtBQUZGO0FBM0JGLENBREY7O0FBbUNBLGVBQWVBLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9ICgpID0+IChcbiAgPGRpdiBpZD1cIm1hcC1kaXNwbGF5XCI+XG4gICAgPGgxPkhlbGxvPC9oMT5cbiAgICA8YSBocmVmPVwiXCIgaWQ9XCJ1cmxcIj48L2E+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgaWQ9XCJzdGFydC1wb2ludFwiXG4gICAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN0YXJ0IGxvY2F0aW9uXCIvPlxuXG4gICAgPGlucHV0XG4gICAgICBpZD1cImVuZC1wb2ludFwiXG4gICAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZpbmFsIGRlc3RpbmF0aW9uXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIi8+XG4gICAgPHNwYW4gaWQ9XCJkZXN0XCI+RW50ZXIgZGVzdGluYXRpb25zPC9zcGFuPlxuICAgIDxpbnB1dFxuICAgIGlkPVwid2F5cG9pbnRzXCJcbiAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgdHlwZT1cInRleHRcIlxuICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW4tcm91dGUgZGVzdGluYXRpb25zXCIgLz5cblxuICAgIDxkaXYgaWQ9XCJyaWdodC1wYW5lbFwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwiaW5mb3dpbmRvdy1jb250ZW50XCI+XG4gICAgICA8c3BhbiBpZD1cInBsYWNlLW5hbWVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPjwvc3Bhbj48YnIgLz5cbiAgICAgIDxzcGFuIGlkPVwicGxhY2UtYWRkcmVzc1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19