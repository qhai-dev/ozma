export default function Page() {
  return (
    <div className='fixed inset-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
      <div className='absolute right-0 top-0 h-full w-1/2 bg-white'></div>
      <div className='max-w-screen mx-auto h-screen'>
        <div>
          <div>偏好</div>
          <div>喜欢</div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='flex h-full w-full flex-col bg-[#f2f4f7]'>
      <div className='sticky left-0 right-0 top-0 z-30 flex min-h-14 shrink-0 grow-0 basis-auto flex-col'>
        header 区域
      </div>
      <div className='flex h-0 shrink-0 grow flex-col overflow-y-auto bg-white'>share layout settings</div>
    </div> */
}
