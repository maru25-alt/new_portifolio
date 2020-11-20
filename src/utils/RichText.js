import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>( 
         <p>{children} </p>
        ),        
      [BLOCKS.QUOTE]: (node, children) => (
        <div className="quotation">{children}</div>
     ),
      [MARKS.BOLD]: (node, children) => (
        <span className="bold-title">{children}</span>
     ),
   },
  }; 
  
  export default options




