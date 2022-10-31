import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { usePagination, useTable } from 'react-table'
import GenerateDocButton from "./GenerateDocButton";
import { StudentTableProps } from "./types";

const StudentsTable = ({ students, isSearching}: StudentTableProps) => {
  const data: any = useMemo(() => (students), [students]);
  const columns = useMemo(
    () => [
        {
            Header: 'First Name',
            accessor: 'first_name',
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
        },
        {
            Header: 'School Name',
            accessor: 'school_name',
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
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  )

  return (
    <>
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
            <tr className="no-results"><td className="p-2 text-center" colSpan={12}>Please type in a school name</td></tr>
          )}
          {isSearching && !students.length && (
            <tr className="no-results"><td className="p-2 text-center" colSpan={12}>No matches for this search</td></tr>
          )}
          {page.map((row: any) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
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
      <div className="pagination d-flex justify-content-between align-items-center pt-2">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
        <span>
          Page
          <strong className="px-1">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            disabled={!students.length}
            className="text-center"
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            min={1}
          />
        </span>
      </div>
      {isSearching && students.length && (
        <div className="my-2 w-100 d-flex justify-content-end">
          <GenerateDocButton body={students} headers={columns} />
        </div>
      )}
    </>
  )
    
};

export default StudentsTable;