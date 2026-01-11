'use client';

import { toast as sonnerToast, ToasterProps } from 'sonner';


import { cva } from 'class-variance-authority'

const toastVariants = cva('', {
  variants: {

  },
  defaultVariants: {

  }
})


export function toast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      button={{
        label: toast.button.label,
        onClick: () => console.log('Button clicked'),
      }}
    />
  ));
}

// border-radius: var(--radius-toast_content, 6px);
// background: var(--color-toast-bg-default, #FFF);

// /* --shadow-elevated */
// box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.30), 0 4px 14px 0 rgba(0, 0, 0, 0.10);



function Toast(props: ToastProps) {
  const { title, description, button, id } = props;
  // flex w-full items-center rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5 md:max-w-[364px]
  // usage/info-light/--semi-color-info-light-default
  return (
    <div className='flex items-start justify-center rounded-[6px] bg-[#EAF5FF] px-2 py-3 shadow'>
      {/* TODO */}
      21212
      {/* <div className='flex flex-1 items-center'>
        <div className='w-full'>
          <p className='text-sm font-medium text-gray-900'>{title}</p>
          <p className='mt-1 text-sm text-gray-500'>{description}</p>
        </div>
      </div>
      <div className='focus:outline-hidden ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        <button
          className='rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100'
          onClick={() => {
            button.onClick();
            sonnerToast.dismiss(id);
          }}
        >
          {button.label}
        </button>
      </div> */}
    </div>
  );
}

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button: {
    label: string;
    onClick: () => void;
  };
}
