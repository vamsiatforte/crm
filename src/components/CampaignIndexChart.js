import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import styles from '../screens/webPortal.module.css';

const CampaignIndexChart = () => {
  const svgRef = useRef();
  const containerRef = useRef();
  const [width, setWidth] = useState(0);

  const data = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 50 },
    { month: 'Mar', value: 60 },
    { month: 'Apr', value: 170 },
    { month: 'May', value: 280 },
    { month: 'Jun', value: 382 },
    { month: 'Jul', value: 400 },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!width) return;

    const maxY = d3.max(data, d => d.value);
    const height = width * 0.5; // Increased height
    const margin = { top: 10, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scalePoint()
      .domain(data.map(d => d.month))
      .range([0, innerWidth])
      .padding(0.5);

    const y = d3.scaleLinear()
      .domain([0, maxY * 1.1])
      .range([innerHeight, 0]);

    // X-axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .style('font-size', '10px')
      .style('fill', '#333');

    // Line generator
    const smoothLine = d3.line()
      .x(d => x(d.month))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Line path
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('d', smoothLine);

    // Data points
    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.month))
      .attr('cy', d => y(d.value))
      .attr('r', 4)
      .attr('fill', 'red');

    // Vertical solid lines to maxY position
    const highestY = y(maxY);
    g.selectAll('line.stem')
      .data(data)
      .enter()
      .append('line')
      .attr('x1', d => x(d.month))
      .attr('y1', innerHeight)
      .attr('x2', d => x(d.month))
      .attr('y2', highestY)
      .attr('stroke', '#ced4da')
      .attr('stroke-width', 1.5); // Changed to solid lines (removed dash array)
  }, [width]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <p className='fw-bold' style={{ color: '#333', marginTop: '0px' }}>
        <LaptopChromebookIcon fontSize="medium" className={`${styles.iconStyle} me-2`} />
        Kampagnen-Index
      </p>
      <div className='d-flex justify-content-center'><p>82%</p></div>
      <svg ref={svgRef} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default CampaignIndexChart;
