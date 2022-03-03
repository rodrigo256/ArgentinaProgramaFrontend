import Swal from "sweetalert2";

export function error() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Completa los campos!',

    })
}

export function editItem() {
    Swal.fire(
        'Buen trabajo!',
        'Se ha editado correctamente!',
        'success'
    )
}

export function saveItem(){
    Swal.fire(
        'Buen trabajo!',
        'Se ha guardado correctamente!',
        'success'
      )
}
/* 
export function deleteItem(){
    let value = true 
    Swal.fire({
        title: '¿Estás seguro quieres borrarlo?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, quiero borrarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Tu item ha sido borrado.',
            'success'
          )
        }else{
            value = false
        }
        return value
      })
} */