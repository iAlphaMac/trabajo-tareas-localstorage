import '../App.css'
//import swal from 'sweetalert';
import Swal from 'sweetalert2';
export const ListedTask = ( {isChecked, setcompleted, cleanTask } ) => {

      const listDelete = () => {
        if (Swal.fire({
            title: "Atención",
            text: "Está seguro de querer borrar las Tareas!",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Tus Tareas han sido borradas.",
                icon: "success"
              });
            }
          })


        ){
             cleanTask()
         }}
   

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
        <input className="form-check-input"
        checked={isChecked} 
        type="checkbox" 
        onChange={(e) => setcompleted(e.target.checked)} />{" "}
        <label>Tareas Realizadas</label>
        </div>
        <button 
        onClick={listDelete}
        className="btn btn-danger btn-sm buttonSize">
            Clear
        </button>

      </div>
    )
}


