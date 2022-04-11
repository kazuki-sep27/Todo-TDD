const TodoController = require('../../controller/todo.controller')
const TodoModel = require('../../model/todo.model')

TodoModel.create = jest.fn()

describe("TodoController.createToDo", () => {
    it("should have a create function", () => {
        expect(typeof TodoController.createTodo).toBe("function")
    })
    it("should call Todo.create", () => {
        TodoController.createTodo()
        expect(TodoModel.create).toBeCalled()
    })
})