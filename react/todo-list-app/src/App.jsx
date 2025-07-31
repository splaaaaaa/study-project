import React, { useState, useEffect } from 'react'
import './App.css'
// 引入Material Icons字体
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [searchValue, setSearchValue] = useState('') // 新增：搜索关键字

  // 保存todos到localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // 添加新todo
  const addTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // 删除todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 切换完成状态
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // 开始编辑
  const startEdit = (todo) => {
    setEditingId(todo.id)
    setEditValue(todo.text)
  }

  // 保存编辑
  const saveEdit = (id) => {
    if (editValue.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editValue.trim() } : todo
      ))
      setEditingId(null)
      setEditValue('')
    }
  }

  // 取消编辑
  const cancelEdit = () => {
    setEditingId(null)
    setEditValue('')
  }

  // 清空所有完成的todo
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // 全选/取消全选
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed)
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })))
  }

  // 过滤后的todos
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Todo List</h1>
        <p>管理你的任务，提高工作效率</p>
      </header>

      <main className="app-main">
        {/* 搜索框 */}
        <div className="search-bar" style={{ marginBottom: 20, alignItems: 'center' }}>
          <input
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="搜索任务..."
            className="todo-input"
            style={{ maxWidth: 400 }}
          />
          {totalCount > 0 && (
            <button 
              onClick={toggleAll} 
              className="action-btn"
              style={{ marginLeft: 12, height: 44 }}
              disabled={totalCount === 0}
            >
              {completedCount === totalCount ? '取消全选' : '全选'}
            </button>
          )}
        </div>
        {/* 添加新任务表单 */}
        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="添加新任务..."
            className="todo-input"
          />
          <button type="submit" className="add-btn">
            添加
          </button>
        </form>

        {/* 统计信息 */}
        {totalCount > 0 && (
          <div className="stats">
            <span>总计: {totalCount}</span>
            <span>已完成: {completedCount}</span>
            <span>未完成: {totalCount - completedCount}</span>
          </div>
        )}

        {/* 操作按钮 */}
        {totalCount > 0 && completedCount > 0 && (
          <div className="actions">
            <button 
              onClick={clearCompleted} 
              className="action-btn clear-btn"
            >
              清空已完成
            </button>
          </div>
        )}

        {/* Todo列表 */}
        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <p>🎉 没有任务！添加一些任务开始吧</p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {editingId === todo.id ? (
                  // 编辑模式
                  <div className="edit-mode">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="edit-input"
                      autoFocus
                    />
                    <div className="edit-actions">
                      <button 
                        onClick={() => saveEdit(todo.id)} 
                        className="save-btn"
                      >
                        保存
                      </button>
                      <button 
                        onClick={cancelEdit} 
                        className="cancel-btn"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                ) : (
                  // 显示模式
                  <>
                    <div className="todo-content">
                      <span style={{ cursor: 'pointer', marginRight: 6, display: 'flex', alignItems: 'center' }} onClick={() => toggleTodo(todo.id)}>
                        {todo.completed ? (
                          <CheckCircleIcon style={{ color: '#304ffe', fontSize: 22, verticalAlign: 'middle' }} />
                        ) : (
                          <RadioButtonUncheckedIcon style={{ color: '#7f8fa6', fontSize: 22, verticalAlign: 'middle' }} />
                        )}
                      </span>
                      <span className="todo-text">{todo.text}</span>
                      <span className="todo-date">
                        {new Date(todo.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="todo-actions">
                      <button 
                        onClick={() => startEdit(todo)} 
                        className="edit-btn"
                      >
                        编辑
                      </button>
                      <button 
                        onClick={() => deleteTodo(todo.id)} 
                        className="delete-btn"
                      >
                        删除
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default App 