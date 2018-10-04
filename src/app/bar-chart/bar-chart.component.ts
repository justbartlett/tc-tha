import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { Incident } from '../incident.interface';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() private incidentsBars: Incident[]; // Binding Incidents array input property to incidents in table component
  private svg: d3.Selection<SVGElement, any, HTMLElement, any>; // select svg with d3
  private chart: any; // select g with d3
  private bars: d3.Selection<SVGElement, Incident, any, any>; // select rect with d3
  private width: number;
  private height: number;
  private margin: { top: number, right: number, bottom: number, left: number };
  private xScale: d3.ScaleLinear<number, number>; // d3 linear scale function
  private yScale: d3.ScaleBand<string>; // d3 band scale function
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    this.svg = d3.select('.bar-chart');
    this.chart = this.svg.append('g');
    this.setChartProperties();
    this.setScales();
    this.drawBars();
    this.drawAxis();
  }

  ngOnChanges() { // ng changes is called at creation and when our incident data changes
    if (this.bars) {
      this.setScales();
      this.drawBars();
      this.updateAxis();
    }
  }
  
  onResize() { // bound to the html component's window resize event
    this.setChartProperties();
    this.drawOnResize();
  }

  private setChartProperties() { // set properties to easily manage the canvas
    const canvasWidth = parseInt(this.svg.style('width'), 0); // get the width and height of the svg
    const canvasHeight = parseInt(this.svg.style('height'), 0);
    this.margin = {     // set a margin based on the svg width and height
      top: canvasHeight * 0.05,
      right: canvasWidth * 0.1,
      bottom: canvasHeight * 0.01,
      left: canvasWidth * 0.05,
    };
    this.width = canvasWidth - this.margin.left - this.margin.right; // set the width and height with margins
    this.height = canvasHeight - this.margin.top - this.margin.bottom;
    this.chart
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`); // move the chart by margin to center it
  }

  private setScales() { // set scales that will define data range
    const xDomain = [0, d3.max(this.incidentsBars.map(incident => incident.large))]; // set domains (spread of values)
    // const yDomain = this.incidentsBars.map(incident => incident.industry);
    const yDomain = this.incidentsBars.map(incident => incident.label);

    this.xScale = d3.scaleLinear()  // create a band scale for our x data
      .domain(xDomain).range([0, this.width]);
    this.yScale = d3.scaleBand()    // create a linear scale for our y data
      .domain(yDomain).range([0, this.height]);
  }

  private drawAxis() {
    this.xAxis = d3.axisBottom(this.xScale)   // initialize the x and y axis properties with d3
      .ticks(5);
    this.yAxis = d3.axisLeft(this.yScale);

    this.chart.append('g')          // draw the x axis
      .call(this.xAxis)
      .attr('class', 'axis-x')
      .attr('transform', `translate(0, ${this.height})`)
    this.chart.append('g')          // draw the y axis
      .call(this.yAxis)
      .attr('class', 'axis-y');
  }

  private drawBars() { 
    // const color = d3.scaleOrdinal(d3.schemeCategory10)    // create an ordinal scale with a domain to map incident.x to appropriate gradient
    //   .domain(this.incidentsBars.map(incident => incident.label));

    this.bars = this.chart    // join incident data to the bar elements using a key function
      .selectAll('.bar')
      .data(this.incidentsBars, incident => incident.large);

    this.bars     // add bars to chart
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('fill', "url(#Gradient1)")
      .attr('x', 0)
      .attr('y', incident => this.yScale(incident.label))
      .attr('width', incident => this.xScale(incident.large))
      .attr('height', this.yScale.bandwidth());

    this.bars     // update - modify current bars on chart
      .transition().delay(250)
      .attr('y', incident => this.yScale(incident.label))
      .attr('width', incident => this.xScale(incident.large))
      .attr('height', this.yScale.bandwidth());

    this.bars // update - remove bars from chart
      .exit()
      .transition()
      .attr('width', 0)
      .remove();
  }

  private updateAxis() {
    this.xAxis.scale(this.xScale);
    this.yAxis.scale(this.yScale);
    this.chart.select('.axis-x')
      .transition().delay(250)
      .call(this.xAxis);
    this.chart.select('.axis-y')
      .transition().delay(250)
      .call(this.yAxis);
  }

  private drawOnResize() {
    this.xScale.range([0, this.width]);
    this.yScale.range([0, this.height]);
    this.chart.select('.axis-x')
      .call(this.xAxis)
      .attr('transform', `translate(0, ${this.height})`)
      .select('.axis-x-title')
      .attr('transform', `translate(${this.width}, 0)`);
    this.chart.select('.axis-y')
      .call(this.yAxis);
    this.chart.selectAll('.bar')
      .attr('x', 0)
      .attr('y', incident => this.yScale(incident.label))
      .attr('width', incident => this.xScale(incident.large))
      .attr('height', this.yScale.bandwidth());
  };
}
