import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LeadBreakdownDonut = () => {
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    if (!wrapperRef.current) return;

    const drawChart = () => {
      const container = wrapperRef.current;
      if (!container) return;

      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      const width = container.offsetWidth || 200;
      const height = width;
      const margin = 10;
      const radius = Math.min(width, height) / 2 - margin;

      const data = {
        "Highest Leads": 113,
        "Pipeline Leads": 23,
      };

      const color = d3.scaleOrdinal()
        .domain(Object.keys(data))
        .range(["#7f7fff", "#ff7f7f"]);

      const pie = d3.pie().value(d => d[1]);
      const data_ready = pie(Object.entries(data));

      const arc = d3.arc()
        .innerRadius(radius * 0.8)
        .outerRadius(radius);

      const g = svg
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      g.selectAll('path')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data[0]))
        .attr("stroke", "white")
        .style("stroke-width", "0.5px");

      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.3em")
        .style("font-size", `${radius * 0.4}px`)
        .text("96%");
    };

    drawChart();

    const observer = new ResizeObserver(() => {
      drawChart();
    });

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: '100%', height: 'auto' }}>
      <p className='fw-bold' style={{ margin: 0, padding: 0 }}>Hit Rate</p>
      <svg ref={svgRef} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default LeadBreakdownDonut;
