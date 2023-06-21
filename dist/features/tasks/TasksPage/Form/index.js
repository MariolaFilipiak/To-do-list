import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../TasksSlice";
const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            return;
        }
        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (_jsxs(StyledForm, Object.assign({ onSubmit: onFormSubmit }, { children: [_jsx(Input, { ref: inputRef, value: newTaskContent, placeholder: "Co jest do zrobienia ?", onChange: ({ target }) => setNewTaskContent(target.value) }), _jsx(Button, { children: "Dodaj zadanie" })] })));
};
export default Form;
