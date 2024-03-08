const TaskTab = ({ prefix, task, image, colour, onClick, style }) => {
  return (
    <article className={`task_tab ${colour}`} onClick={onClick} style={style}>
      <h5 className="task_prefix">{prefix}</h5>
      <h3 className="task_title">{task}</h3>
      <img src={image} alt={`${task} image`} className="task_img" />
    </article>
  );
};

export default TaskTab;
