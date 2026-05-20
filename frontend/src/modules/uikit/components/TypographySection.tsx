"use client";

const displayVariants = [
  {
    name: "Display 2XL",
    size: "72px",
    weight: "900",
    lh: "1.1",
    ls: "-2.16px",
    class: "text-display-2xl",
  },

  {
    name: "Display XL",
    size: "60px",
    weight: "900",
    lh: "1.1",
    ls: "-1.8px",
    class: "text-display-xl",
  },

  {
    name: "Display LG",
    size: "48px",
    weight: "900",
    lh: "1.1",
    ls: "-1.44px",
    class: "text-display-lg",
  },
];

const headingVariants = [
  {
    name: "Heading 1",
    size: "40px",
    weight: "800",
    lh: "1.2",
    ls: "-0.8px",
    class: "text-heading-1",
  },

  {
    name: "Heading 2",
    size: "32px",
    weight: "800",
    lh: "1.2",
    ls: "-0.64px",
    class: "text-heading-2",
  },

  {
    name: "Heading 3",
    size: "24px",
    weight: "800",
    lh: "1.2",
    ls: "-0.48px",
    class: "text-heading-3",
  },

  {
    name: "Heading 4",
    size: "20px",
    weight: "800",
    lh: "1.2",
    ls: "-0.4px",
    class: "text-heading-4",
  },

  {
    name: "Heading 5",
    size: "18px",
    weight: "800",
    lh: "1.2",
    ls: "-0.36px",
    class: "text-heading-5",
  },

  {
    name: "Heading 6",
    size: "16px",
    weight: "800",
    lh: "1.2",
    ls: "-0.32px",
    class: "text-heading-6",
  },
];

const titleVariants = [
  {
    name: "Title LG",
    size: "18px",
    weight: "600",
    lh: "1.5",
    ls: "-0.36px",
    class: "text-title-lg",
  },

  {
    name: "Title MD",
    size: "16px",
    weight: "600",
    lh: "1.5",
    ls: "-0.32px",
    class: "text-title-md",
  },

  {
    name: "Title SM",
    size: "14px",
    weight: "600",
    lh: "1.5",
    ls: "-0.28px",
    class: "text-title-sm",
  },
];

const bodyVariants = [
  {
    name: "Body XL",
    size: "20px",
    weight: "400",
    lh: "1.6",
    class: "text-body-xl",
  },

  {
    name: "Body LG",
    size: "18px",
    weight: "400",
    lh: "1.6",
    class: "text-body-lg",
  },

  {
    name: "Body MD",
    size: "16px",
    weight: "400",
    lh: "1.6",
    class: "text-body-md",
  },

  {
    name: "Body SM",
    size: "14px",
    weight: "400",
    lh: "1.5",
    class: "text-body-sm",
  },

  {
    name: "Body XS",
    size: "12px",
    weight: "400",
    lh: "1.5",
    class: "text-body-xs",
  },
];

const labelVariants = [
  {
    name: "Label LG",
    size: "14px",
    weight: "600",
    lh: "1.6",
    class: "text-label-lg",
  },

  {
    name: "Label MD",
    size: "12px",
    weight: "600",
    lh: "1.6",
    class: "text-label-md",
  },

  {
    name: "Label SM",
    size: "11px",
    weight: "600",
    lh: "1.5",
    class: "text-label-sm",
  },
];

export function TypographySection() {
  const renderGroup = (title: string, variants: any[]) => (
    <div id={`typo-${title.toLowerCase()}`} className="space-y-4 scroll-mt-32">
      <div className="flex items-start gap-3 border-l-4 border-primary-500 pl-4">
        
        <h3 className="text-sm font-bold text-neutral-600 dark:text-white">
          
          {title}
        </h3>
      </div>
      <div className="space-y-10 pl-5">
        
        {variants.map((v) => (
          <div key={v.name} className="space-y-2 group">
            
            <p className="text-[10px] text-neutral-600 group-hover:text-primary-500 transition-colors">
              
              {v.name}—{v.size}/{v.weight}/{v.lh}x
              {v.ls
                ? `/ $
{
v.ls}
`
                : ""}
            </p>
            <div
              className={`$
{
v.class}
text-neutral-900`}
            >
              
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="typography" className="space-y-24 mt-8 pb-8 max-w-7xl">
      
      {/* Header */}
      <div className="space-y-4">
        
        <h2 className="text-4xl font-bold tracking-tighter text-primary-500 dark:text-primary-700 ">
          
          Tipografía
        </h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          
          Sistema de tipografía diseñado para máxima legibilidad en todas las
          plataformas, usando <b>Montserrat</b> para encabezados y elementos UI,
          y <b>Nunito</b> para cuerpo de texto y párrafos.
        </p>
      </div>
      <div className="space-y-24">
        
        {renderGroup("Display", displayVariants)}
        {renderGroup("Heading", headingVariants)}
        {renderGroup("Title", titleVariants)}
        {renderGroup("Body", bodyVariants)}
        {renderGroup("Label", labelVariants)}
      </div>
    </section>
  );
}





