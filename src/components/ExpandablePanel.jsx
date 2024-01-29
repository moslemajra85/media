import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { MdArrowDropUp } from 'react-icons/md';

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-2 border rounded">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">{header}</div>
          <div
            className="cursor-pointer hover:animate-pulse"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <MdArrowDropDown color="blue" size={40} />
            ) : (
              <MdArrowDropUp size={40} color="blue" />
            )}
          </div>
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
