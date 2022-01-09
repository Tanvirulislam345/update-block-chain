import React, { useRef, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreateNFT = () => {
  const [myfiles, setMyFiles] = useState(null);
  const inputRef = useRef(HTMLInputElement);

  const getImagePreview = (e) => {
    let image = URL.createObjectURL(e.target.files[0]);
    let imagediv = document.getElementById("preview");
    let newimg = document.createElement("img");
    imagediv.innerHTML = "";
    newimg.src = image;
    imagediv.appendChild(newimg);
    setMyFiles(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    if (!myfiles) {
      return;
    }

    //  const newData = {
    //      ...data,
    //      myfiles
    //  }
    //  console.log(newData);
    const formData = new FormData();
    formData.append("ItemName", data.ItemName);
    formData.append("ExternalLink", data.ExternalLink);
    formData.append("Description", data.Description);
    formData.append("CollectionList", data.CollectionList);
    formData.append("files", myfiles);
    fetch("http://localhost:9000/create-nft", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("NFT is created succefully");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="text-start mt-3 mb-4">
            <h3 className="fw-bold">Create new item</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex " >
              <Card id="preview" style={{ width: "492px" }}>

              </Card>
            </div>
            <div className="col-md-3 col-sm-12">
              <div>
                <Card style={{ padding: "20%" }} className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                    }}
                    onClick={() => inputRef.current.click()}
                  >
                    <input
                      type="file"
                      accept="image/*, video/*"
                      onChange={getImagePreview}
                      style={{ display: "none" }}
                      ref={inputRef}
                    />
                    <i className="far fa-image fa-2x"></i>
                    <p className="mb-0">Add Image</p>
                  </div>
                </Card>
                <Card style={{ padding: "20%" }} className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <i className="far fa-image fa-2x"></i>
                    <p className="mb-0">Add Sticker</p>
                  </div>
                </Card>
                <Card style={{ padding: "20%" }} className="">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <i className="far fa-eye-slash fa-2x"></i>
                    <p className="mb-0">Remove Watermark</p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div>
                <Card style={{ padding: "20%" }} className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <i className="far fa-image fa-2x"></i>
                    <p className="mb-0">Add Effect</p>
                  </div>
                </Card>
                <Card style={{ padding: "20%" }} className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <i className="fas fa-text-width fa-2x"></i>
                    <p className="mb-0">Add Text</p>
                  </div>
                </Card>
                <Card style={{ padding: "20%" }} className="">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <i className="fas fa-undo fa-2x"></i>
                    <p className="mb-0">Undo</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-4 text-start">
              <h5 style={{ fontWeight: 'bold', margin: '0px' }}>
                Image,Video,Audio, or 3D Model<span className="text-danger">*</span>
              </h5>
              <small style={{ color: '#ABACC2' }}>
                File types supported: JPG, PNG, GIF, MP4, Max size: 100 MB
              </small>
            </div>
            <div className="col-md-6 mt-5 text-end">
              <Button type="button" size='sm' className="px-3" style={{ backgroundColor: '#1F5597', border: 'none' }}>
                Draw with Graphic Pad
              </Button>
            </div>
          </div>

          <div className="row  gy-3 mt-3">
            <div className="col-md-12">
              <p className="text-start fw-bolder mb-1">
                Item Name <span className="text-danger">*</span>
              </p>
              <input
                {...register("ItemName")}
                className="w-100 py-2 px-3 mt-1" style={{ border: 'none', borderRadius: '4px' }}
                placeholder="Item name"

              />
            </div>
            <div className="col-md-12 text-start">
              <p className="text-start fw-bolder mb-1">External Link </p>
              <small style={{ color: '#ABACC2' }}>
                Trap cards will include a link to this URL on this item’s detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details.
              </small>
              <input
                {...register("ExternalLink")}
                className="w-100 py-2 px-3 mt-1" style={{ border: 'none', borderRadius: '4px' }}
                placeholder="External link"
              />
            </div>
            <div className="col-md-12 text-start">
              <p className="fw-bolder mb-1">Description</p>
              <small style={{ color: '#ABACC2' }}>
                The description will be included on the item’s detail page
                underneath its image.
              </small>
              <textarea type="text"
                {...register("Description")}
                rows="5"
                placeholder="Description"
                className="w-100 py-2 px-3 mt-1" style={{ border: 'none', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-12 text-start">
              <p className="fw-bolder mb-1">Collection</p>
              <select {...register("CollectionList")} className="w-100 py-2 px-3 mt-1" style={{ border: 'none', borderRadius: '4px' }}>
                <option value="">Collection Name or List</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
              </select>
            </div>
            <div className="text-start">
              <Button size="sm" type="submit" className="px-5" style={{ backgroundColor: '#1F5597', border: 'none' }}>Create NFT</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
