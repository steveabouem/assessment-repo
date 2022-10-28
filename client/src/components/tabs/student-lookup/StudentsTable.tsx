import { useMemo } from "react";
import { useTable } from 'react-table'
import { Student } from "../types";

const StudentsTable = ({ students, isSearching}: { students: Student[], isSearching: boolean }) => {
    const data: any = useMemo(() => (students), [students]);

    
   const columns = useMemo(
    () => [
        {
            Header: 'First Name',
            accessor: 'firstName',
        },
        {
            Header: 'Last Name',
            accessor: 'lastName',
        },
        {
            Header: 'School',
            accessor: 'schoolName',
        },
        {
            Header: 'Grade',
            accessor: 'grade',
        },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className="p-2" {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {!isSearching && (
          <tr><td className="p-2 text-center" colSpan={12}>Please type in a school name</td></tr>
        )}
        {isSearching && !students.length && (
          <tr><td className="p-2 text-center" colSpan={12}>No matches for this search</td></tr>
        )}
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                  <td className="p-2" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
    
};

export default StudentsTable;