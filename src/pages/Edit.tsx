import { useNavigate } from "react-router";
import "../App.css";
import { useIntl } from "react-intl";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { useMemo } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Api from "../utils/Api";
import PopUpButton from "../constants/PopUpButton";

function Edit() {
  const { data: items, deleteItem } = Api("https://retoolapi.dev/FahQQj/items");
  const intl = useIntl();

  const columns = useMemo<ColumnDef<unknown>[]>(
    () => [
      {
        accessorKey: "name",
        header: () => intl.formatMessage({ id: "name" }),
      },
      {
        accessorKey: "tags",
        header: () => intl.formatMessage({ id: "tags" }),
      },
      {
        accessorKey: "url",
        header: () => intl.formatMessage({ id: "link" }),
      },
      {
        accessorKey: "type",
        header: () => intl.formatMessage({ id: "type" }),
      },
      {
        accessorKey: "deadline",
        header: () => intl.formatMessage({ id: "deadline" }),
      },
      {
        id: "actions",
        header: () => intl.formatMessage({ id: "actions" }),
        cell: ({ row }) => (
          <div>
            <PopUpButton lable="Edit">
              {intl.formatMessage({ id: "edit.button" })}
            </PopUpButton>
            <Button onClick={() => deleteItem(row.original.id)}>
              {intl.formatMessage({ id: "delete.button" })}
            </Button>
          </div>
        ),
      },
    ],
    [intl, deleteItem]
  );

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Edit;
