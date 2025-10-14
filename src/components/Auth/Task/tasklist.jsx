import Accepted from "./accpetTask";
import Complete from "./completeTask";
import Failed from "./failedTask";
import NewTask from "./newTask";

function TaskList({data}) {
  return (
    <>
      <div
        id="task-list"
        className="h-[52%] overflow-x-auto flex items-center gap-5 flex-nowrap justify-start w-full p-5  mt-10"
      >
        <Accepted></Accepted>
        <Complete></Complete>
        <NewTask></NewTask>
        <Failed></Failed>
       
      </div>
    </>
  );
}
export default TaskList;
