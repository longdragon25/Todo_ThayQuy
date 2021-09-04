import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const todo = useSelector((state) => state.todo);
  const todoDone = todo.todoDone;
  return (
    <View style={{ marginLeft: 40, marginTop: 40 }}>
      {todoDone.map((todo, index) => {
        return (
          <View style={{ flexDirection: "row", marginTop: 10 }} key={index}>
            <View
              style={{ width: 40, height: 40, backgroundColor: todo.color }}
            />
            <Text style={styles.textStyle}>{todo.taskName}</Text>
          </View>
        );
      })}
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
