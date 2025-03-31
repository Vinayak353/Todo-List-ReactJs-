import React from 'react';

export default function Todositems({ todos, onDelete }) {
  
  if (!todos) {
    return <div>No Todo Found</div>;
  }

  return (
    <div
      className="todo-item"
      style={{
        padding: '15px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h4 style={{ margin: '0 0 10px', color: '#333' }}>{todos.title}</h4>
      <p style={{ margin: '0 0 15px', color: '#555' }}>{todos.desc}</p>
      <button
        className="btn btn-sm btn-danger" onClick={() => onDelete(todos)}
              style={{
          backgroundColor: '#ff4d4d',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          color: '#fff',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff1a1a')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff4d4d')}
      >
        Delete
      </button>
    </div>
  );
}