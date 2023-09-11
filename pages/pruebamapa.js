import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box, Container } from '@mui/material';

const data = {
    name: "Desarrollo Tecnológico Continuo: Invertir en un equipo de desarrollo tecnológico sólido para mantener y mejorar constantemente las etiquetas inteligentes y la aplicación. Esto ayudará a enfrentar la amenaza de la competencia constante y garantizar un funcionamiento sin problemas.",
    children: [
      { name: "Tecnología Innovadora: La integración de etiquetas inteligentes utilizando NFC o códigos QR muestra una clara inversión en tecnología avanzada, se puede atraer a un público interesado en la salud y la información nutricional." },
      { name: "Competencia Constante: El mercado de comestibles es altamente competitivo, y otros competidores pueden copiar la tecnología o estrategias." },
    ]
};


function ConceptMap() {
    const ref = useRef(null);
  
    useEffect(() => {
      const width = 500;
      const height = 300;
      const root = d3.hierarchy(data);
      const treeLayout = d3.tree().size([width, height - 100]).nodeSize([120, 120]);
      treeLayout(root);
  
      const svg = d3.select(ref.current)
        .attr('width', width + 100)
        .attr('height', height + 100)
        .style("overflow", "visible");
  
      // Dibuja las líneas cuadradas
      svg.selectAll('lines')
        .data(root.links())
        .enter()
        .append('path')
        .attr('d', d => {
          return `
            M${d.source.x + 50},${d.source.y + 50}
            V${d.target.y}
            H${d.target.x + 50}
          `;
        })
        .style('stroke', 'white')
        .style('fill', 'none');
  
      // Dibuja los rectángulos
      svg.selectAll('rect')
        .data(root.descendants())
        .enter()
        .append('rect')
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('width', 100)
        .attr('height', 50)
        .style('fill', 'white')
        .style('stroke', 'black');
  
      // Etiquetas de texto
      svg.selectAll('text')
        .data(root.descendants())
        .enter()
        .append('text')
        .attr('x', d => d.x + 50)
        .attr('y', d => d.y + 25)
        .attr('dy', 4)
        .attr('text-anchor', 'middle')
        .text(d => d.data.name);
    }, []);
  
    return (
      <svg ref={ref}></svg>
    );
  }
  function Mapa() {
    return (
      <Container>
        <Box mt={5} display="flex" justifyContent="center">
          <ConceptMap />
        </Box>
      </Container>
    );
  }
  
  export default Mapa;