import axios from "axios";

export async function addNewTodo(todo) {
  try {
    const res = await axios.post("http://localhost:9091/api/todo", {
      task: todo,
    });

    return res;
  } catch (err) {
    console.error(err);
  }
}

export const submitAndUpdate = async (addNewTodo, submitted, value) => {
  try {
    const res = await addNewTodo(value);
    if (res.status === 201) submitted(value);
  } catch (err) {
    if (err.response) {
      console.error(err.response);
      console.error("server responded");
    } else if (err.request) {
      console.error("network error");
    } else {
      console.error(err);
    }
  }
};
