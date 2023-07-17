const addBtn = document.querySelector("#addBtn");
const main = document.querySelector(".main-sec");


const saveNotes = () => {
    const Notes = document.querySelectorAll(".note textarea");
    const data = [];
    Notes.forEach(
        (note) => {
            data.push(note.value);
        });
    console.log(data);
    localStorage.setItem("notes", JSON.stringify(data));
}



const addNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `    
    <div class="tool-box">      
        <div class="tools">
          <span class="fa fa-floppy-o save"> </span>
          &nbsp;&nbsp;&nbsp;
          <span class="fa fa-trash-o delete" ></span>
        </div>
    </div>
        <textarea name="notepad">${text}</textarea>
    </div>
    `;




    note.querySelector(".save").addEventListener("click", function () {
        saveNotes();
    });


    note.querySelector(".delete").addEventListener("click", function () {
        note.remove();
        saveNotes();
    });

    main.appendChild(note);
    saveNotes();

    note.querySelector("textarea").addEventListener("focusout", function () {
        saveNotes();
    });

}

addBtn.addEventListener('click', function () {
    addNote();
});

(
    function () {
        const localNotes = JSON.parse(localStorage.getItem("notes"));
        localNotes.forEach(
            (notes) => {
                addNote(notes);
            });
            
        }
)()

