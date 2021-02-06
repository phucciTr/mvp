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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLE1BQ1I7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFDQSxVQUFHLGFBREg7QUFFQSxpQkFBVSxVQUZWO0FBR0EsWUFBSyxNQUhMO0FBSUEsbUJBQVksc0JBSlosR0FERjtBQU9BO0FBQ0UsVUFBRyxXQURMO0FBRUUsaUJBQVUsVUFGWjtBQUdFLFlBQUssTUFIUDtBQUlFLG1CQUFZLHlCQUpkO0FBUEEsR0FGRjtBQWdCRSxpQ0FBTyxNQUFLLFFBQVosRUFBcUIsSUFBRyxRQUF4QixHQWhCRjtBQWlCRTtBQUFBO0FBQUEsTUFBTSxJQUFHLE1BQVQ7QUFBQTtBQUFBLEdBakJGO0FBa0JFO0FBQ0EsUUFBRyxXQURIO0FBRUEsZUFBVSxVQUZWO0FBR0EsVUFBSyxNQUhMO0FBSUEsaUJBQVksNkJBSlosR0FsQkY7QUF3QkUsK0JBQUssSUFBRyxhQUFSLEdBeEJGO0FBeUJFLCtCQUFLLElBQUcsS0FBUixHQXpCRjtBQTBCRTtBQUFBO0FBQUEsTUFBSyxJQUFHLG9CQUFSO0FBQ0Usa0NBQU0sSUFBRyxZQUFULEVBQXNCLFdBQVUsT0FBaEMsR0FERjtBQUNpRCxtQ0FEakQ7QUFHRSxrQ0FBTSxJQUFHLGVBQVQ7QUFIRjtBQTFCRixDQURGOztBQW1DQSxlQUFlQSxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBcHAgPSAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJtYXAtZGlzcGxheVwiPlxuICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgaWQ9XCJzdGFydC1wb2ludFwiXG4gICAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN0YXJ0IGxvY2F0aW9uXCIvPlxuXG4gICAgPGlucHV0XG4gICAgICBpZD1cImVuZC1wb2ludFwiXG4gICAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZpbmFsIGRlc3RpbmF0aW9uXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIi8+XG4gICAgPHNwYW4gaWQ9XCJkZXN0XCI+RW50ZXIgZGVzdGluYXRpb25zPC9zcGFuPlxuICAgIDxpbnB1dFxuICAgIGlkPVwid2F5cG9pbnRzXCJcbiAgICBjbGFzc05hbWU9XCJjb250cm9sc1wiXG4gICAgdHlwZT1cInRleHRcIlxuICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW4tcm91dGUgZGVzdGluYXRpb25zXCIgLz5cblxuICAgIDxkaXYgaWQ9XCJyaWdodC1wYW5lbFwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwiaW5mb3dpbmRvdy1jb250ZW50XCI+XG4gICAgICA8c3BhbiBpZD1cInBsYWNlLW5hbWVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPjwvc3Bhbj48YnIgLz5cbiAgICAgIHsvKiA8c3Ryb25nPlBsYWNlIElEOjwvc3Ryb25nPiA8c3BhbiBpZD1cInBsYWNlLWlkXCI+PC9zcGFuPjxiciAvPiAqL31cbiAgICAgIDxzcGFuIGlkPVwicGxhY2UtYWRkcmVzc1wiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19