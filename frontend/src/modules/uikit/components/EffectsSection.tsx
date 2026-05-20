"use client";

import React from "react";

export function EffectsSection() {
  return (
    <section id="effects" className="space-y-12">
      
      <div>
        
        <h2 className="text-3xl font-bold tracking-tight text-primary-500">
          Effects
        </h2>
        <p className="text-neutral-500 mt-2">
          
          Visual styles including shadows, blurs, and standard animations.
        </p>
      </div>
      {/* Shadows */}
      <div className="space-y-6">
        
        <h3 className="text-xl font-semibold border-b border-neutral-200 dark:border-neutral-300 pb-2 text-neutral-900">
          Shadows (Elevation)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={level} className="space-y-4">
              
              <div
                className="aspect-square w-full rounded-xl bg-white border border-neutral-100 shadow-md"
                style={{
                  boxShadow: `var(--shadow-$
{
level}
)`,
                }}
              />
              <div className="text-left">
                
                <span className="text-sm font-mono text-neutral-400 dark:text-neutral-500">
                  shadow-
                  {level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





