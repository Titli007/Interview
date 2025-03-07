import React, { useState } from 'react';

interface ColData {
  value: string;
  id?: string;
}

interface Row {
  Header?: {
    ColData: ColData[];
  };
  ColData?: ColData[];
  Rows?: {
    Row: Row[];
  };
  Summary?: {
    ColData: ColData[];
  };
  type?: string;
  group?: string;
}

interface RowDividerProps {
  row: Row
}

const RowDivider: React.FC<RowDividerProps> = ({ row }) => {
    const renderColData = (colData: ColData[]) => {
      return colData.map((col, index) => (
        <td key={index}>
          {col.value}
        </td>
      ));
    };
  
    return (
      <>
        {row.Header && (
          <tr className="border-t border-gray-200">
            {renderColData(row.Header.ColData)}
          </tr>
        )}
        {row.ColData && (
          <tr>
            {renderColData(row.ColData)}
          </tr>
        )}
        {row.Rows?.Row &&
          row.Rows.Row.map((subRow) => (
            <RowDivider row={subRow} />
          ))}
        {row.Summary && (
          <tr>
            {renderColData(row.Summary.ColData)}
          </tr>
        )}
      </>
    );
  };

  export default RowDivider;