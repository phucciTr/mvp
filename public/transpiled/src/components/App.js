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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLE1BQ1I7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFDQSxVQUFHLGFBREg7QUFFQSxpQkFBVSxVQUZWO0FBR0EsWUFBSyxNQUhMO0FBSUEsbUJBQVksc0JBSlosR0FERjtBQU9BO0FBQ0UsVUFBRyxXQURMO0FBRUUsaUJBQVUsVUFGWjtBQUdFLFlBQUssTUFIUDtBQUlFLG1CQUFZLHlCQUpkO0FBUEEsR0FGRjtBQWdCRSxpQ0FBTyxNQUFLLFFBQVosRUFBcUIsSUFBRyxRQUF4QixHQWhCRjtBQWlCRTtBQUFBO0FBQUEsTUFBTSxJQUFHLE1BQVQ7QUFBQTtBQUFBLEdBakJGO0FBa0JFO0FBQ0EsUUFBRyxXQURIO0FBRUEsZUFBVSxVQUZWO0FBR0EsVUFBSyxNQUhMO0FBSUEsaUJBQVksNkJBSlosR0FsQkY7QUF3QkUsK0JBQUssSUFBRyxhQUFSLEdBeEJGO0FBeUJFLCtCQUFLLElBQUcsS0FBUixHQXpCRjtBQTBCRTtBQUFBO0FBQUEsTUFBSyxJQUFHLG9CQUFSO0FBQ0Usa0NBQU0sSUFBRyxZQUFULEVBQXNCLFdBQVUsT0FBaEMsR0FERjtBQUNpRCxtQ0FEakQ7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkY7QUFBQTtBQUU2QixrQ0FBTSxJQUFHLFVBQVQsR0FGN0I7QUFFd0QsbUNBRnhEO0FBR0Usa0NBQU0sSUFBRyxlQUFUO0FBSEY7QUExQkYsQ0FERjs7QUFtQ0EsZUFBZUEsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXBwID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwibWFwLWRpc3BsYXlcIj5cbiAgICA8aDE+SGVsbG88L2gxPlxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgIGlkPVwic3RhcnQtcG9pbnRcIlxuICAgICAgY2xhc3NOYW1lPVwiY29udHJvbHNcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzdGFydCBsb2NhdGlvblwiLz5cblxuICAgIDxpbnB1dFxuICAgICAgaWQ9XCJlbmQtcG9pbnRcIlxuICAgICAgY2xhc3NOYW1lPVwiY29udHJvbHNcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBmaW5hbCBkZXN0aW5hdGlvblwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0XCIvPlxuICAgIDxzcGFuIGlkPVwiZGVzdFwiPkVudGVyIGRlc3RpbmF0aW9uczwvc3Bhbj5cbiAgICA8aW5wdXRcbiAgICBpZD1cIndheXBvaW50c1wiXG4gICAgY2xhc3NOYW1lPVwiY29udHJvbHNcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVuLXJvdXRlIGRlc3RpbmF0aW9uc1wiIC8+XG5cbiAgICA8ZGl2IGlkPVwicmlnaHQtcGFuZWxcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cImluZm93aW5kb3ctY29udGVudFwiPlxuICAgICAgPHNwYW4gaWQ9XCJwbGFjZS1uYW1lXCIgY2xhc3NOYW1lPVwidGl0bGVcIj48L3NwYW4+PGJyIC8+XG4gICAgICA8c3Ryb25nPlBsYWNlIElEOjwvc3Ryb25nPiA8c3BhbiBpZD1cInBsYWNlLWlkXCI+PC9zcGFuPjxiciAvPlxuICAgICAgPHNwYW4gaWQ9XCJwbGFjZS1hZGRyZXNzXCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=