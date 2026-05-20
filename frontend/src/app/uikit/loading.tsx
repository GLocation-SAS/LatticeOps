export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-neutral-950 transition-colors duration-300">
      <img
        src="/logos/Giflattice.gif"
        alt="Cargando LatticeOps..."
        className="w-32 h-32 object-contain"
        draggable={false}
      />
      <p className="mt-4 text-xs font-bold text-neutral-400 uppercase tracking-[0.3em]">
        Cargando…
      </p>
    </div>
  );
}


