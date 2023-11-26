import React from 'react';

function ModalSearch() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog" onSubmit={(e) => e.preventDefault()}>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalSearch;
