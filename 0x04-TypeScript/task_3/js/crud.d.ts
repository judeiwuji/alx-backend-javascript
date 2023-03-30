interface insertRowFunction {
  (row: RowElement): RowID;
}

interface deleteRowFunction {
  (rowId: RowID): void;
}

interface updateRowFunction {
  (rowId: RowID, row: RowElement): RowID;
}

export declare var insertRow: insertRowFunction;
export declare var deleteRow: deleteRowFunction;
export declare var updateRow: updateRowFunction;
