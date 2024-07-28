import React from "react";
import Modal from "react-modal";


// Custom styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    backdropFilter: 'blur(5px)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
    padding: '0',
    // overflow: 'hidden',
    width: '100%',
    // height: '100%',
    maxWidth: '800px',


  },
};

const VideoModal = ({ isOpen, onRequestClose, videoSrc, title }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}    >
      <div className="flex items-center justify-center h-auto text-center sm:block sm:p-0">
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-black rounded-lg shadow-xl dark:bg-gray-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex items-center justify-between p-4 rounded-t">
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>
          </div>
          <video
            className="w-full object-contain max-h-[85vh]"
            controls

          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
