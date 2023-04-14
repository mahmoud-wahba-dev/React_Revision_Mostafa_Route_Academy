import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  let [apiData, setApiData] = useState([])

  let [modalImg, setModalImg] = useState()
  let [productElement, setProductElement] = useState([])

  async function getData() {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setApiData(data)
  }


  useEffect(() => {

    getData()


  }, [])


  function getImg(element) {
    setModalImg(element.image)
    // console.log(img);
  }


  return (
    <>


      <div>
        <button className="btn btn-danger m-3" onClick={() => getData()}>call api</button>
      </div>

      <div className="container">
        <div className="row gy-5 gx-5">

          {
            apiData.map(
              (element, index) => <div key={element.id} className="col-md-4 ">
                <div onClick={() => setProductElement(element)} className="card text-center">
                  <div >
                    <img src={element.image} onClick={() => getImg(element)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="img-thumbnail w-50" alt="" />
                  </div>
                  <div> {element.id} </div>
                  <div> {element.title} </div>
                  <div> {element.price} </div>
                  <div className="description"> {element.description} </div>
                  <div className="bg-danger"> {element.rating.rate} </div>

                </div>
                {/* <!-- Modal --> */}
                <div className="modal text-center fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title : {productElement.title} </h1>
                        <button type="button" classNames="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div classNames="modal-body">
                        <img src={modalImg} className="img-thumbnail w-50" alt="" />

                      </div>
                      <div className="modal-footer">
                        <button type="button" classNames="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          }




        </div>
      </div>

      {/* <!-- Button trigger modal --> */}




    </>
  )
}