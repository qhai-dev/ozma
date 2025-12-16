'use client';

// import
function Overlay({}) {
  return <div className='i fixed z-10 h-screen w-screen bg-black/50'></div>;
}

export { Overlay };

//  data-slot='dialog-overlay'
//       className={cn(
//         'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
//         className
//       )}
//       {...props}
