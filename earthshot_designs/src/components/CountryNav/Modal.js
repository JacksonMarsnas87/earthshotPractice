import "../../styles/Modal.css"

function Modal({ isModalOpen, setIsModalOpen, modalData }) {
  return (
    <div className={ isModalOpen ? "ModalBackground" : "ModalHidden" } onClick={() => setIsModalOpen(false)}>
        <div className="ModalBody">
            {
              modalData ?

              <div className="ModalHeaderContainer">
                <img className="ModalImage" src={require(`../../images/countryImages/${modalData.imageName}.jpg`)} />
                <div className="ModalHeaderTextContainer">
                  <h1 className="ModalCountryName">{modalData.country}</h1>
                  <p className="ModalContinentName">{modalData.continent}</p>
                </div>
              </div>

              :

              <p>No data to display</p>
            }
        </div>
    </div>
  );
}

export default Modal;