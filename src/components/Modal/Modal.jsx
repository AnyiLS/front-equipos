const Modal = ({open, children}) => {
  return (
    <div>
      <div
        class={`relative z-10 ${open ? "flex" : "hidden"}`} 
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg h-[700px] bg-white text-left shadow-[inset_2px_2px_5px_1px_#e2e1e1] p-4 transition-all sm:my-8 sm:w-full sm:max-w-[1024px] ">
             {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
