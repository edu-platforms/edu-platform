import React from 'react'

const ModalToBookHours = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
      style={{ zIndex: 9 }}
    >
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div
        className="bg-white p-8 rounded-lg z-10"
        style={{ minWidth: '400px', border: '1px solid red !important' }}
      >
        {children}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ModalToBookHours
