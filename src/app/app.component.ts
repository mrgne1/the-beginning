import { Component } from '@angular/core';

const lineTrace = {
  type: 'scatter',
  mode: 'lines',
  x: [1, 2, 3],
  y: [2, 6, 3],
  line: {
    color: 'red',
  },
};

const barTrace = {
  type: 'bar',
  x: [1, 2, 3],
  y: [2, 5, 3],
};

const layout = {
  width: 320,
  height: 240,
  title: 'A Fancy Plot'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-beginning';
  graph: {data: Object[], layout: Object} = {
    data: [lineTrace, barTrace],
    layout: layout,
  };
}
