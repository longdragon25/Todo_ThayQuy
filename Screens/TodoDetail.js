import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const todo = useSelector((state) => state.todo);
  const todoDone = todo.todoList.filter((todo) => todo.done);
  return (
    <View style={{ marginLeft: 40, marginTop: 40 }}>
      <Text style={[styles.textStyle, { color: todo.color }]}>
        Length todos active: {todoDone.length}
      </Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={[styles.textStyle, { color: todo.color }]}>
          Color active:{" "}
        </Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: todo.color,
            borderRadius: 10,
          }}
        />
      </View>

      <Text style={[styles.textStyle, { color: todo.color }]}>
        List Todos:{" "}
        {todoDone.map((todoDone) => (
          <Text style={[styles.textStyle, { color: todo.color }]}>
            {todoDone.taskName},{" "}
          </Text>
        ))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "blue",
    marginLeft: 10,
  },
});

export default TodoDetail;
