import { Component, ViewEncapsulation, OnInit } from '@angular/core';


import * as d3s from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { Persons } from '../shared';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  title = 'barchart'

  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  public results: any =[]
  constructor( private _http: HttpClient) { }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }
//   private d3json(){
//     d3.csv('../shared/SalesJan2009.csv', (result)=>{
//       for(var i=0; i<result.length; i++){
//         console.log(result[i].product)
//       }
//     })
// }

  private initSvg() {
    this.svg = d3s.select('svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(Persons.map((d) => d.date));
    this.y.domain([0, d3Array.max(Persons, (d) => d.value)]);
  }
  private drawAxis() {
    this.g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.9em')
        .attr('text-anchor', 'end')
        .text('winners hit');
  }

private drawBars() {
  this.g.selectAll('.bar')
      .data(Persons)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d.date))
      .attr('y', (d) => this.y(d.value))
      // .transition()
      // .duration(300)
      // .delay((d,i)=>i *70)
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => this.height - this.y(d.value))
  }

}
