   import React, { useRef, useEffect } from 'react';
   import * as d3 from 'd3';
   
   const data = [5, 10, 12, 15, 20, 22, 28, 30, 31, 50];
   
   const HistogramChart = () => {
       const svgRef = useRef();
   
       useEffect(() => {
           const svg = d3.select(svgRef.current);
           const width = 600;
           const height = 400;
           const margin = { top: 20, right: 20, bottom: 30, left: 40 };
           const innerWidth = width - margin.left - margin.right;
           const innerHeight = height - margin.top - margin.bottom;
   
           const xScale = d3.scaleLinear()
               .domain([0, d3.max(data)])
               .range([0, innerWidth]);
   
           const histogram = d3.bin()
               .thresholds(10)(data);
   
           const yScale = d3.scaleLinear()
               .domain([0, d3.max(histogram, d => d.length)])
               .range([innerHeight, 0]);
   
           const g = svg.append('g')
               .attr('transform', `translate(${margin.left},${margin.top})`);
   
           g.selectAll('rect')
               .data(histogram)
               .enter().append('rect')
               .attr('x', d => xScale(d.x0))
               .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
               .attr('y', d => yScale(d.length))
               .attr('height', d => innerHeight - yScale(d.length))
               .attr('fill', '#141d38');
   
           g.append('g')
               .attr('transform', `translate(0,${innerHeight})`)
               .call(d3.axisBottom(xScale));
   
           g.append('g')
               .call(d3.axisLeft(yScale));
       }, [data]);
   
       return <svg ref={svgRef} width={500} height={400}></svg>;
   };
   
   export default HistogramChart;