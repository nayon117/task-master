import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Form">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Modal>
  );
};
export default AddTaskModal;
