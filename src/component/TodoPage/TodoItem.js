import React from "react";
import { updateTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";
import { Icon } from "antd";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1202412_h9aham1p1kf.js" // https://www.iconfont.cn/
});

const TodoItem = ({ flippedProps, todo }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(updateTodo({ ...todo, complete: !todo.complete }));
  };

  return (
    <div className={styles.todoItem} {...flippedProps}>
      <MyIcon
        type={todo.complete ? "icon-ioscirclefilled" : "icon-ioscircleoutline"}
        onClick={handleCheck}
        theme="twoTone"
        style={{ fontSize: 22 }}
      />
      <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
        {todo.todo}
      </span>
    </div>
  );
};

export default TodoItem;
