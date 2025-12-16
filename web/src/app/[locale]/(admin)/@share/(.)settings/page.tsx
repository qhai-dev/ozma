import { Modal } from '@/components/ui/modal';

// import { }
export default function Page() {
  return (
    <Modal>
      <div className='fixed inset-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
        <div className='absolute right-0 top-0 h-full w-1/2 bg-white'></div>
        <div className='max-w-screen mx-auto h-screen'>
          <div>
            <div>偏好</div>
            <div>喜欢</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
