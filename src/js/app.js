function enviar(){
    event.preventDefault();
    
    Swal.fire( {
        title: '¿Desea de enviar el formulario?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No",
        confirmButtonColor: '#0b6740',
        cancelButtonColor: '#e51b04',
    }).then( (result) => {
        if (result.value) {
            document.crear_usuario.submit();
        }
        return false;
    });
}