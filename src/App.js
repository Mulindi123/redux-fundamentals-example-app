import React from 'react'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput'
import Filters from './components/Footer';

function App() {
  return (
    <div className="text-center">
      <nav className="fixed top-0 left-0 w-full z-10">
        <section className="bg-purple-600 h-auto p-6">
          <h1 className="text-6xl text-white">Redux Fundamentals Example</h1>

          {/* Placeholder for navigation links (if needed in the future) */}
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section className="mt-28 "> {/* Adjust margin-top to avoid overlap with fixed header */}
        <h2 className="text-red-800 text-3xl font-thin mt-2 mb-2">Todos</h2>
      </section>
      <div className='bg-white'>
        < TodoInput />
        < TodoList />
        <Filters />

      </div>
    </div>
  )
}

export default App

// import React from 'react';
// import Header from './components/Header';
// import TodoList from './components/TodoList';
// import Filters from './components/Footer';

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen  bg-gray-100">
//       <Header />
//       <div className="">
//         <TodoList />
//         <Filters />
//       </div>
//     </div>
//   );
// }

// export default App;

