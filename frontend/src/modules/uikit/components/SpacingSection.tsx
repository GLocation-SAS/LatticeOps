"use client";

import React from "react";

const spacingTokens = [
  {
    name: "0",
    value: "0px",
    class: "w-0",
  },

  {
    name: "1",
    value: "4px",
    class: "w-1",
  },

  {
    name: "2",
    value: "8px",
    class: "w-2",
  },

  {
    name: "3",
    value: "12px",
    class: "w-3",
  },

  {
    name: "4",
    value: "16px",
    class: "w-4",
  },

  {
    name: "5",
    value: "20px",
    class: "w-5",
  },

  {
    name: "6",
    value: "24px",
    class: "w-6",
  },

  {
    name: "8",
    value: "32px",
    class: "w-8",
  },

  {
    name: "10",
    value: "40px",
    class: "w-10",
  },

  {
    name: "12",
    value: "48px",
    class: "w-12",
  },
];

export function SpacingSection() {
  return (
    <section id="spacing" className="space-y-8">
      
      <div>
        
        <h2 className="text-5xl font-bold tracking-tighter text-primary-500 dark:text-primary-700 ">
          Espaciado
        </h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          
          Escala de espaciado consistente utilizada para márgenes, rellenos y
          brechas de diseño.
        </p>
      </div>
      <div className="space-y-4 border-t border-neutral-100 dark:border-neutral-300 pt-8">
        
        <div className="grid gap-6">
          
          {spacingTokens.map((token) => (
            <div key={token.name} className="flex items-start gap-8">
              
              <div className="w-12 text-sm font-mono text-neutral-600">
                sp-
                {token.name}
              </div>
              <div className="flex-1 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-sm overflow-hidden flex items-start px-4">
                
                <div
                  className="h-full bg-primary-500"
                  style={{
                    width: `var(--spacing-$
{
token.name}
)`,
                  }}
                />
              </div>
              <div className="w-20 text-sm font-medium text-neutral-600">
                {token.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





