import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LeadChart = () => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const data = [
    { month: "Jan", pipeline: 80, highest: 110, lowest: 60 },
    { month: "Feb", pipeline: 120, highest: 140, lowest: 80 },
    { month: "Mar", pipeline: 160, highest: 180, lowest: 100 },
    { month: "Apr", pipeline: 200, highest: 210, lowest: 120 },
    { month: "May", pipeline: 180, highest: 220, lowest: 130 },
    { month: "Jun", pipeline: 240, highest: 250, lowest: 150 },
    { month: "Jul", pipeline: 270, highest: 280, lowest: 160 },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        setDimensions({
          width: wrapperRef.current.offsetWidth,
          height: 400,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!data.length || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { width: containerWidth, height: containerHeight } = dimensions;
    const margin = { top: 60, right: 20, bottom: 50, left: 60 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const g = svg
      .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.3);

    const maxY = d3.max(data.flatMap(d => [d.pipeline, d.highest, d.lowest])) || 100;

    const y = d3.scaleLinear()
      .domain([0, maxY * 1.1])
      .range([height, 0]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "12px");

    g.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .call((g) => g.select(".domain").remove())
      .selectAll("text")
      .style("font-size", "12px");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -containerHeight / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("fill", "#000")
      .text("Positive Leads");

    // Bars
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.month) + x.bandwidth() * 0.25) 
      .attr("y", (d) => y(d.pipeline))
      .attr("width", x.bandwidth() * 0.5) 
      .attr("height", (d) => height - y(d.pipeline))
      .attr("fill", "#1f77b4");

   
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2)
      .y((d) => y(d.value))
      .curve(d3.curveNatural);

    const addLine = (key, color) => {
      g.append("path")
        .datum(data.map((d) => ({ month: d.month, value: d[key] })))
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-dasharray", "5,5")
        .attr("stroke-width", 2)
        .attr("d", line);
    };

    addLine("highest", "black");
    addLine("lowest", "green");

    // ✅ Legend with square icons
    const labelGroup = svg.append("g").attr("transform", `translate(100, 25)`);

    labelGroup.append("rect")
      .attr("x", -5)
      .attr("y", -5)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "#1f77b4");

    labelGroup.append("text")
      .attr("x", 10)
      .attr("y", 5)
      .text("Pipeline")
      .style("font-size", "12px");

    labelGroup.append("rect")
      .attr("x", 95)
      .attr("y", -5)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "black");

    labelGroup.append("text")
      .attr("x", 110)
      .attr("y", 5)
      .text("Highest")
      .style("font-size", "12px");

    labelGroup.append("rect")
      .attr("x", 195)
      .attr("y", -5)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "green");

    labelGroup.append("text")
      .attr("x", 210)
      .attr("y", 5)
      .text("Lowest")
      .style("font-size", "12px");
  }, [dimensions]);

  return (
    <div ref={wrapperRef} style={{ width: "100%" }}>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>Prognose</p>
      <svg ref={svgRef} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default LeadChart;
