import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"; // Make sure to import the Note component
import notes from "../notes"; // Also, ensure that your notes array is imported if it's defined externally

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => (
        <Note
          key={note.key} // 'key' prop is essential for list items in React for performance reasons.
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

