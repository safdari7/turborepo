import React from "react";
import { getTodos } from "../utils/todo";
import {
  useQuery,
  // useMutation,
  // useQueryClient,
} from "@tanstack/react-query";

export default function Home() {
  // const queryClient = useQueryClient()
  const query = useQuery(["todos"], getTodos);

  return (
    <div>
      Home
      <br /> <br /> <br /> <br /> <br />
      <div style={{ direction: "ltr" }}>
      Todos :
        {query.data?.splice(1, 10).map((todo: any) => (
          <h5 key={todo.id}>{todo.title}</h5>
        ))}
      </div>
    </div>
  );
}
