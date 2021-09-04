import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  addTaskAction,
  changeFocus,
  submitTaskAction,
} from "../redux/actions/ToDoAction";
import { useDispatch, useSelector } from "react-redux";

import { MaterialIcons } from "react-native-vector-icons";

const listColor = [
  { name: "blue", color: "#007aff", focus: false },
  { name: "lightBlue", color: "#00a2ff", focus: false },
  { name: "red", color: "#FF375F", focus: false },
  { name: "yellow", color: "#FFD60A", focus: false },
  { name: "green", color: "#11BF2E", focus: false },
];

const Todo = ({ navigation }) => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState();
  const [todoColor, setTodoColor] = useState();

  const renderTodo = () => {
    return todo.todoList.map((todo, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.circle}
            onPress={() => {
              dispatch(changeFocus(todo.id));
            }}
          >
            {todo.done == true ? (
              <View
                style={{
                  backgroundColor: "#007aff",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="done" color="white" size={30} />
              </View>
            ) : null}
          </TouchableOpacity>
          <Text style={styles.taskName}>{todo.taskName}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <FlatList
          horizontal
          data={listColor}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                listColor.map((item) => {
                  item.focus = false;
                });
                setTodoColor(item.color);
                item.focus = true;
              }}
              style={
                item.focus == true
                  ? {
                      width: 60,
                      height: 60,
                      backgroundColor: item.color,
                      borderRadius: 10,
                      margin: 6,
                      shadowColor: item.color,
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 9,
                      borderWidth: 2,
                    }
                  : {
                      width: 60,
                      height: 60,
                      backgroundColor: item.color,
                      borderRadius: 10,
                      margin: 6,
                      shadowColor: item.color,
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 9,
                    }
              }
            />
          )}
        />
      </View>

      <View
        style={{ marginHorizontal: 25, flexDirection: "row", marginTop: 50 }}
      >
        <TextInput
          style={styles.input}
          placeholder="Nhập todo"
          onChangeText={(text) => setTaskName(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            let newTask = {
              id: Date.now(),
              taskName: taskName,
              done: false,
            };
            dispatch(addTaskAction(newTask));
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginLeft: 50 }}>{renderTodo()}</ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            dispatch(submitTaskAction(todoColor));
            navigation.navigate("detail");
            console.log(todo);
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listItem: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  // todoColor: {
  //   width: 60,
  //   height: 60,
  //   backgroundColor: item.color,
  //   borderRadius: 10,
  //   margin: 6,
  //   shadowColor: item.color,
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.32,
  //   shadowRadius: 5.46,
  //   elevation: 9,
  // },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 20,
    paddingLeft: 20,
  },
  addButton: {
    width: 80,
    height: 50,
    backgroundColor: "#024170",
    marginLeft: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  taskName: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  submit: {
    width: 200,
    height: 50,
    backgroundColor: "#024170",
    borderRadius: 20,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  // condition: {
  //   width: 60,
  //   height: 60,
  //   backgroundColor: item.color,
  //   borderRadius: 10,
  //   margin: 6,
  //   shadowColor: item.color,
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.32,
  //   shadowRadius: 5.46,
  //   elevation: 9,
  //   borderWidth: 1,
  // },
});

export default Todo;
