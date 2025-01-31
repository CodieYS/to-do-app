import React, { useState } from 'react'
import Header from './Header';
import Createarea from './Createarea.jsx';
import Footer from './Footer';
import Note from './Note';

const App = () => {
    const [notes, setNotes] = useState([]);


    function addNote(newNote){
        setNotes(preNotes=>{
            return [...preNotes, newNote]
        });
    }

    function deleteNote(id){
        setNotes(preNotes=>{
            return preNotes.filter((noteItem,index)=>{
                return index !== id;
            });
        });
    }

  return (
    <div className='container'>
        <Header />
        <main>
        <Createarea onAdd={addNote}/>
        <div className="notes-container">
        {notes.map((noteItem, index)=>{
            return(
                <Note
                key= {index}
                id ={index}
                title = {noteItem.title}
                content = {noteItem.content}
                onDelete={deleteNote}
                />
            );
        })}
        </div>
        </main>
        <Footer />
    </div>
  )
}

export default App;