import StartPoint from './StartPoint.js';
import EndPoint from './EndPoint.js';
import WayPoints from './WayPoints.js';

var App = () => React.createElement(
  'div',
  { id: 'map-display' },
  React.createElement(StartPoint, null),
  React.createElement(EndPoint, null),
  React.createElement(WayPoints, null),
  React.createElement('div', { id: 'right-panel' }),
  React.createElement('div', { id: 'map' }),
  React.createElement(
    'div',
    { id: 'infowindow-content' },
    React.createElement('span', { id: 'place-name', className: 'title' }),
    React.createElement('br', null),
    React.createElement('span', { id: 'place-address' })
  )
);

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU3RhcnRQb2ludCIsIkVuZFBvaW50IiwiV2F5UG9pbnRzIiwiQXBwIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxVQUFQLE1BQXVCLGlCQUF2QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZUFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGdCQUF0Qjs7QUFFQSxJQUFJQyxNQUFNLE1BQ1I7QUFBQTtBQUFBLElBQUssSUFBRyxhQUFSO0FBQ0Usc0JBQUMsVUFBRCxPQURGO0FBRUUsc0JBQUMsUUFBRCxPQUZGO0FBR0Usc0JBQUMsU0FBRCxPQUhGO0FBS0UsK0JBQUssSUFBRyxhQUFSLEdBTEY7QUFNRSwrQkFBSyxJQUFHLEtBQVIsR0FORjtBQU9FO0FBQUE7QUFBQSxNQUFLLElBQUcsb0JBQVI7QUFDRSxrQ0FBTSxJQUFHLFlBQVQsRUFBc0IsV0FBVSxPQUFoQyxHQURGO0FBQ2lELG1DQURqRDtBQUVFLGtDQUFNLElBQUcsZUFBVDtBQUZGO0FBUEYsQ0FERjs7QUFlQSxlQUFlQSxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFydFBvaW50IGZyb20gJy4vU3RhcnRQb2ludC5qcyc7XG5pbXBvcnQgRW5kUG9pbnQgZnJvbSAnLi9FbmRQb2ludC5qcyc7XG5pbXBvcnQgV2F5UG9pbnRzIGZyb20gJy4vV2F5UG9pbnRzLmpzJztcblxudmFyIEFwcCA9ICgpID0+IChcbiAgPGRpdiBpZD1cIm1hcC1kaXNwbGF5XCI+XG4gICAgPFN0YXJ0UG9pbnQvPlxuICAgIDxFbmRQb2ludC8+XG4gICAgPFdheVBvaW50cy8+XG5cbiAgICA8ZGl2IGlkPVwicmlnaHQtcGFuZWxcIj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cImluZm93aW5kb3ctY29udGVudFwiPlxuICAgICAgPHNwYW4gaWQ9XCJwbGFjZS1uYW1lXCIgY2xhc3NOYW1lPVwidGl0bGVcIj48L3NwYW4+PGJyIC8+XG4gICAgICA8c3BhbiBpZD1cInBsYWNlLWFkZHJlc3NcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==