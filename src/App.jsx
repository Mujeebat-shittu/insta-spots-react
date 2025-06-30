import React from "react";
import "./styles/footer.css";
import "./styles/gallery.css";
import "./styles/header.css";
import "./styles/new-post.css";
import "./styles/preview.css";
import "./styles/profile.css";
import LikeButton from "./components/like-button";
import Profile from "./components/profile";
import Post from "./components/new-post";
import { useState } from 'react' 


function InstaSpot() {
  function showPreview(imageId) {
    document.getElementById(imageId).showModal();
  }
  function closePreview(imageId) {
    document.getElementById(imageId).close();
  }

  const [allPosts, setAllPosts] = useState([]);

  const handleNewPost = (data) => {
    setAllPosts((prev) => [...prev, data]);
  };

  return (
    <>
      {/* <!-- header -->*/}
      <header>
        <img src="/assets/icons/Spots-Logo.svg" />
      </header>

      <section className="profile">
        <Profile />
        <Post onNewPost={handleNewPost} />
      </section>
      <div className="thin-line"></div>

      {/* <!-- NEW GALLERY HTML CODE --> */}
      <section className="gallery_container">
        <div className="gallery_grid">
          <div className="gallery_image">
            <img
              src="/assets/images/Vals-Thorens.png"
              alt="Val Thorens"
              className="img1"
              onClick={() => showPreview("valThorens")}
            />
            <div className="content">
              <p id="text1">Val Thorens</p>
              <LikeButton />
            </div>

            {/* <!-- modal with id valThorens --> */}
            <dialog id="valThorens" className="preview-dialog">
              <img
                src="/assets/images/Vals-Thorens.png"
                alt="Val Thorens"
                className="modal-img"
              />
              <p className="modal-title">Val Thorens</p>
              <p className="modal-description">
                A ski town in the French Alps, known for its stunning slopes and
                vibrant après-ski scene.
              </p>
              <button onClick={() => closePreview("valThorens")}>Close</button>
            </dialog>
          </div>

          {/* <!--second image-->*/}
          <div className="gallery_image">
            <img
              src="/assets/images/Restaurant-Terrace.png"
              alt="Restaurant terrace"
              className="img1"
              onClick={() => showPreview("restaurantTerrace")}
            />
            <div className="content">
              <p id="text2">Restaurant terrace</p>
              {/* static icon, no toggle 
            <i className="fa-regular fa-heart"></i> 
            */}
              <LikeButton />
            </div>

            {/* <!-- modal with id restaurantTerrace --> */}
            <dialog id="restaurantTerrace" className="preview-dialog">
              <img
                src="/assets/images/Restaurant-Terrace.png"
                alt="Restaurant terrace"
                className="modal-img"
              />
              <p className="modal-title">Restaurant terrace</p>
              <p className="modal-description">
                A restaurant terrace dressed in green and yellow - an ambience
                of grandeur and elegance. A promise of fine dining and a good
                time.
              </p>

              <button onClick={() => closePreview("restaurantTerrace")}>
                Close
              </button>
            </dialog>
          </div>

          {/* <!--third image--> */}
          <div className="gallery_image">
            <img
              src="/assets/images/An-outdoor-cafe.png"
              alt="An outdoor cafe"
              className="img1"
              onClick={() => showPreview("outdoorCafe")}
            />
            <div className="content">
              <p id="text3">An outdoor cafe</p>
              {/* static icon, no toggle 
            <i className="fa-regular fa-heart"></i> 
            */}
              <LikeButton />
            </div>

            {/*<!-- modal with id outdoorCafe --> */}
            <dialog id="outdoorCafe" className="preview-dialog">
              <img
                src="/assets/images/An-outdoor-cafe.png"
                alt="An outdoor cafe"
                className="modal-img"
              />
              <p className="modal-title">An outdoor cafe</p>
              <p className="modal-description">
                An outdoor cafe buzzing softly with laughter and conversation.
                The perfect spot to unwind and savour the moment.
              </p>
              <button onClick={() => closePreview("outdoorCafe")}>Close</button>
            </dialog>
          </div>

          {/* <!--fourth image--> */}
          <div className="gallery_image">
            <img
              src="/assets/images/A-very-long-bridge-over-the-forest.png"
              alt="A very long bridge, over the forest..."
              className="img1"
              onClick={() => showPreview("longBridge")}
            />
            <div className="content">
              <p id="text4">A very long bridge, over the forest...</p>
              {/* static icon, no toggle 
            <i className="fa-regular fa-heart"></i> 
            */}
              <LikeButton />
            </div>

            <dialog id="longBridge" className="preview-dialog">
              <img
                src="/assets/images/A-very-long-bridge-over-the-forest.png"
                alt="A very long bridge, over the forest..."
                className="modal-img"
              />
              <p className="modal-title">
                A very long bridge, over the forest...
              </p>
              <p className="modal-description">
                A very long bridge, suspended over the forest. Can you dare to
                cross it?
              </p>
              <button onClick={() => closePreview("longBridge")}>Close</button>
            </dialog>
          </div>

          {/* <!--fifth image--> */}
          <div className="gallery_image">
            <img
              src="/assets/images/Tunnel-with-the-morning-light.png"
              alt="Tunnel with morning light"
              className="img1"
              onClick={() => showPreview("tunnelMorningLight")}
            />
            <div className="content">
              <p id="text5">Tunnel with morning light</p>
              {/* static icon, no toggle 
            <i className="fa-regular fa-heart"></i> 
            */}
              <LikeButton />
            </div>

            <dialog id="tunnelMorningLight" className="preview-dialog">
              <img
                src="/assets/images/Tunnel-with-the-morning-light.png"
                alt="Tunnel with morning light"
                className="modal-img"
              />
              <p className="modal-title">Tunnel with morning light</p>
              <p className="modal-description">
                Iron-framed glass walls, morning light spilling from their sides
                - glinting, scattering. A breathtaking sight.
              </p>
              <button onClick={() => closePreview("tunnelMorningLight")}>
                Close
              </button>
            </dialog>
          </div>

          {/*!--sixth image--> */}
          <div className="gallery_image">
            <img
              src="/assets/images/Mountain-house.png"
              alt="Mountain house"
              className="img1"
              onClick={() => showPreview("mountainHouse")}
            />
            <div className="content">
              <p id="text6">Mountain house</p>
              {/* static icon, no toggle 
            <i className="fa-regular fa-heart"></i> 
            */}
              <LikeButton />
            </div>

            <dialog id="mountainHouse" className="preview-dialog">
              <img
                src="/assets/images/Mountain-house.png"
                alt="Mountain house"
                className="modal-img"
              />
              <p className="modal-title">Mountain house</p>
              <p className="modal-description">
                A mountain house shrouded in fog, surrounded by trees and of
                course mountains. Depending on your vibe, it could be mean
                solitude. A cabin perfect for a getaway.
              </p>
              <button onClick={() => closePreview("mountainHouse")}>
                Close
              </button>
            </dialog>
          </div>

          {/* Render the post if submitted */}
      {allPosts.map((post, index) => (

        <div className="gallery_image" key={index}>

          {post.image && (
            <img
            src={URL.createObjectURL(post.image)}
              alt="Uploaded File"
              className="img6"
            />
          )}

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Image from URL"
              className="img6"
            />
          )}

          <div className="content">
          <p>{post.name}</p>   
          <LikeButton />          
            </div>
        </div>
      ))}
        </div>
      </section>

      <div className="thin-line"></div>

      {/*<!-- footer  --> */}
      <footer>
        <div>2024 &copy; Spots</div>
      </footer>
    </>
  );
}

export default InstaSpot;
