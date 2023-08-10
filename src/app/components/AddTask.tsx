import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  return (
    <div className="w-full flex justify-center gap-4">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary">
        Add New Task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
    </div>
  );
};

export default AddTask;
