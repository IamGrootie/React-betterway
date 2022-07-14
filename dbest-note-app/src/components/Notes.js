import React from 'react'
import Split from "react-split"
import {nanoid} from "nanoid"
import Sidebar from "./Sidebar"
import Editor from "./Editor"

export default function Notes() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
        )
  
      const [currentNoteId, setCurrentNoteId] = React.useState(
          (notes[0] && notes[0].id) || ""
      )
      
      // Save the notes in the local storage 
      React.useEffect(() => {
          localStorage.setItem("notes", JSON.stringify(notes))
      }, [notes])
  
      // Function to create a note
      function createNewNote() {

        const dateBase = new Date();
        const completeDate = dateBase.toDateString()

        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            dateCreated: completeDate
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
      }
  
      // Function to put the most recently-modified note at the top 
      function updateNote(text) {
          setNotes(oldNotes => {
            const newArr = [];
            for (let i=0; i<oldNotes.length; i++) {
              const oldNote = oldNotes[i];
              if (oldNote.id === currentNoteId) {
                newArr.unshift({...oldNote, body: text})
              } else {
                newArr.push(oldNote);
              }
            }
            return newArr;
            })
      }
  
      // Function to delete a note
      function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
      }
      
      function findCurrentNote() {
          return notes.find(note => {
              return note.id === currentNoteId
          }) || notes[0]
      }

  return (
    <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
    </main>
  )
}
