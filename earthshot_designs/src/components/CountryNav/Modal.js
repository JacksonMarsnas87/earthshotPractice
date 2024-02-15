import "../../styles/Modal.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ModalCategories from "../../testdata/ModalCategories";
import { useEffect, useRef, useState } from "react";
import ModalContentTable from "./ModalContentTable";

function Modal({ isModalOpen, setIsModalOpen, modalData, size }) {
  const elementRef = useRef(null);
  const [leftArrowDisable, setLeftArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);
  const [modalCategory, setModalCategory] = useState("Overview")

  useEffect(() => {
    // Adds an event listener to the nav scroll bar. Whenever the bar scrolls (including during animation startup and end), it checks scroll position and disables scroll buttons if scroll max or min is reached
    if (elementRef && elementRef.current) {
      elementRef.current.addEventListener("scroll", () => {
        if (elementRef.current.scrollLeft === 0) {
          setLeftArrowDisable(true);
        } else {
          setLeftArrowDisable(false);
        }

        if (elementRef.current.scrollLeft >= elementRef.current.scrollWidth - elementRef.current.clientWidth) {
          setRightArrowDisable(true);
        } else {
          setRightArrowDisable(false);
        }
      });
    }
  })

  const handleHorizantalScroll = (element, speed, distance, step) => {
    element.scrollLeft += distance
  };

  return (
    // <div className={ isModalOpen ? "ModalBackground" : "ModalHidden" } onClick={() => setIsModalOpen(false)}>
    <div className={ isModalOpen ? `ModalOpen ${size}` : "ModalHidden" }>
          {
            modalData ?

            <div className="ModalBody">
              <div>
                <div className="ModalHeaderContainer">
                  <img className="ModalImage" src={require(`../../images/countryImages/${modalData.imageName}.jpg`)} />
                  <div className="ModalHeaderTextContainer">
                    <h1 className="ModalCountryName">{modalData.country}</h1>
                    <p className="ModalContinentName">{modalData.continent}</p>
                  </div>
                </div>

                <div className="ModalNavArrows">
                  <div className={leftArrowDisable ? "ModalScroll Disabled" : `ModalScroll LeftTab ${size}`} onClick={() => size === "normal" ? elementRef.current.scrollLeft -= 300 : elementRef.current.scrollLeft -= 200 }>
                    <BsChevronLeft className="ModalScrollArrow" />
                  </div>
                  <div className={rightArrowDisable ? "ModalScroll Disabled" : `ModalScroll RightTab ${size}`} onClick={() => size === "normal" ? elementRef.current.scrollLeft += 300 : elementRef.current.scrollLeft += 200 }>
                    <BsChevronRight className="ModalScrollArrow" />
                  </div>
                </div>

                <div className={`ModalNavTabs ${size}`}>
                  <div className={`ModalTabScroll ${size}`} ref={elementRef}>
                    {
                      ModalCategories.map((category) => {
                        return (
                          <div className={modalCategory === category ? `CategoryTab Selected ${size}` : `CategoryTab ${size}`} onClick={() => setModalCategory(category)}>
                            <p>{category}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>

              <ModalContentTable countryName={modalData.country} modalCategory={modalCategory} size={size} data={modalData.data} />
            </div>

            :
            
            <div className="ModalBody">
              <p>No data to display</p>
            </div>
          }
    </div>
  );
}

export default Modal;