import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import { TodoListContext } from "../../contexts/todo-context";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { todos } = useContext(TodoListContext);

  const events = todos.map((todo) =>
    todo.status
      ? Object.assign({
          id: todo.id,
          title: todo.title,
          allDay: true,
          start: todo.start,
          end: todo.end,
        })
      : null
  );

  return (
    <div className="">
      <Calendar
        localizer={localizer}
        views={{ month: true }}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
