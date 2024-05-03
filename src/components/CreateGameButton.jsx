import React from 'react'
import Modal from 'react-modal'

const modalStyle = {

  content: {
    width: '500px',
    height: '300px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }


}

const CreateGameButton = (props) => {

  const[modalIsOpen, setModalIsOpen] = React.useState(false);
  const[newGame, setNewGame] = React.useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);


  return (
    <React.Fragment>
      <button 
      className='CreateGameButton'
      onClick={openModal}
    
      > +
      
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        ariaHideApp={false}
      
      >
        <div className='d-flex flex-column justify-content-between h-100'>
          <div className='modal-title'>
            <h2>Agregar Juegos</h2>
          </div>
          <div className='modal-content d-flex justify-content-between pt-2'>
            <div>
            <label>Nombre del juego </label>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" placeholder='Minecraft'
            onChange={(event) => {
              setNewGame(event.target.value)
            }}
            />
            
            
            </div>
            <div className='modal-item d-flex justify-content-end aling-items-end'>
            <button className='btn btn-danger' onClick={ closeModal}>Cerrar</button>
            <button className='btn btn-primary'
              onClick={() => {
                props.setInsertedGame(newGame);
                closeModal();
              }}
            >Guardar</button>
            </div>
          </div>
        </div>
        

      </Modal>
    </React.Fragment>
  )
}


export default CreateGameButton