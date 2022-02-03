import styled from '@emotion/styled';
import CytoscapeComponent from "react-cytoscapejs";
import React from "react";

/* eslint-disable-next-line */
export interface CytoProps {}

export function Cyto(props: CytoProps) {
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ];

  return (
    <CytoscapeComponent elements={elements} style={{width: '600px', height: '600px'}}/>
  );
}

export default Cyto;
