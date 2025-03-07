import React, { useState } from 'react';
import RowDivider from './RowDivider';

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

const ProfitLossTable: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="shadow-lg rounded-lg">
      <table className="w-full">
          <tr>
            {data.Columns.Column.map((col: any, index: number) => (
              <th
                key={index}
                className={`px-4 py-3 text-sm`}
              >
                {col.ColTitle}
              </th>
            ))}
          </tr>
        <tbody className='gap-y-8'>
          {data.Rows.Row.map((row: Row, index: number) => (
            <RowDivider row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitLossTable;