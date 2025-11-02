export default function TodoForm({ onAddTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = formData.get("task");
    onAddTask(task);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        name="task"
        placeholder="Add a new task"
        className="border p-2 flex-1 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
