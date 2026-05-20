"use client";

import { cn } from "@/lib/utils";

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableProps {
  /** Column definitions */
  columns: TableColumn[];
  /** Data to display */
  data: Record<string, any>[];
  /** Optional additional table classes */
  className?: string;
  /** Optional additional container classes */
  containerClassName?: string;
}

export function Table({
  columns,
  data,
  className,
  containerClassName,
}: TableProps) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-[32px] border border-neutral-200/30 dark:border-neutral-300/30 bg-white dark:bg-neutral-100 backdrop-blur-xl shadow-sm",
        containerClassName,
      )}
    >
      <table
        className={cn(
          "w-full text-left border-collapse min-w-[600px]",
          className,
        )}
      >
        <thead>
          <tr className="border-b-2 border-primary-500 bg-primary-500/5 dark:bg-primary-500/10">
            {columns.map((column) => {
              const isActions = column.key === "actions" || column.label === "Acciones";
              return (
                <th
                  key={column.key}
                  className={cn(
                    "px-8 py-6 text-[11px] font-bold uppercase tracking-widest transition-colors",
                    isActions
                      ? "bg-primary-500 text-white"
                      : "text-primary-600 dark:text-primary-400"
                  )}
                >
                  {column.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-neutral-50/50 dark:hover:bg-neutral-200/30 transition-all duration-300 group"
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-8 py-5 text-sm font-sans font-medium text-neutral-700 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-8 py-16 text-center text-base font-sans font-medium text-neutral-400 italic"
              >
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}




