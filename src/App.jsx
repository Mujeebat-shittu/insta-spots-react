import React from 'react';
import './styles/footer.css';
import './styles/gallery.css';
import './styles/header.css';
import './styles/new-post.css';
import './styles/preview.css';
import './styles/profile.css';
import LikeButton from './components/like-button';
import Profile from './components/profile'; 
import Post from './components/new-post';
{/*import { useState } from 'react' */}


function InstaSpot() {
  function showPreview(imageId) {
  document.getElementById(imageId).showModal();
}
 function closePreview(imageId) {
  document.getElementById(imageId).close();
} 

  return (
    <>
      {/* <!-- header -->*/}
    <header>
      <img src="/assets/icons/Spots-Logo.svg" />
    </header>

    {/* <!-- profile --> */}

   {/* <section className="profile">
      <img
        className="profileImage"
        src="/assets/images/Bessie-Coleman.png"
        alt="Profile Image"
      />

      <div className="profileDetails">
        <div className="profileNameAndJob">
          <h2 className="profileName">Bessie Coleman</h2>
          <p className="profileJobTitle">Civil Aviator</p>
        </div>
        <p className="profileEdit">
          <img
            className="EditIcon"
            src="/assets/icons/Edit-Profile-Icon-Light.svg"
            alt="Edit Image Icon"
          />
          Edit Profile
        </p>
      </div>
      
      <button className="profileBtn">
        <img
          className="newPostIcon"
          src="/assets/icons/New-Post-Icon.svg"
          alt="New Post Icon"
        />
        New Post
        <Profile />
        </button> */}

     {/* <!-- ============NEW POST MODAL================= --> */}
     {/* <dialog id="newPostDialog" >
        <button type="button" className="closeDialog">
          ✖
        </button>
        <div className="wrapperrr">
          <h2>New Post</h2>
          <span style={{ fontSize: '1rem' }}>Upload Image or Paste URL</span>
          <form className="formm" id="newPostForm" >
            <input type="text" name="text" placeholder="Enter name" required />
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              placeholder="https://example.com/image.jpg"
            />
            <input type="url" name="imageUrl" placeholder="Image URL" />
            <button className="submitBtn" type="submit">Add Card</button>
          </form>
        </div>
      </dialog>
    </section> */}

   {/* <!-- ============PROFILE EDIT MODAL================= --> */}
    {/* profile edit static code
    <dialog className="modal" id="editModal">
    <div className="flex">
        <div className="modal-content">
          <p className="closeBtn">❌</p>
          <h2 >Edit Profile</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Name" id="editName" required />
            <label htmlFor="job">Job Title</label>
            <input type="text" placeholder="Job Title" id="editJob" required />

            <input
              type="file"
              name="imageFile"
              id="editImage"
              accept="image/*"
              required
            />
            
            <button id="saveProfile">Save Changes</button>
            </form>
        </div>
      </div>
    </dialog> */}
    <section className='profile'> 
    <Profile />
    <Post />
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
            onClick={() => showPreview('valThorens')}
          />
          <div className="content">
            <p id="text1">Val Thorens</p>
            <LikeButton/>
          </div>

         {/*} <!-- modal with id valThorens --> */}
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
            <button onClick={() => closePreview('valThorens')}>Close</button>
          </dialog>
        </div>

        {/* <!--second image-->*/}
        <div className="gallery_image">
          <img
            src="/assets/images/Restaurant-Terrace.png"
            alt="Restaurant terrace"
            className="img1"
            onClick={() => showPreview('restaurantTerrace')}
          />
          <div className="content">
            <p id="text2">Restaurant terrace</p>
            <LikeButton/>
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
              A restaurant terrace dressed in green and yellow - an ambience of
              grandeur and elegance. A promise of fine dining and a good time.
            </p>

            <button onClick={() => closePreview('restaurantTerrace')}>Close</button>
          </dialog>
        </div>

        {/* <!--third image--> */}
        <div className="gallery_image">
          <img
            src="/assets/images/An-outdoor-cafe.png"
            alt="An outdoor cafe"
            className="img1"
            onClick={() => showPreview('outdoorCafe')}
          />
          <div className="content">
            <p id="text3">An outdoor cafe</p>
            <LikeButton/>
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
              An outdoor cafe buzzing softly with laughter and conversation. The
              perfect spot to unwind and savour the moment.
            </p>
            <button onClick={() => closePreview('outdoorCafe')}>Close</button>
          </dialog>
        </div>

       {/* <!--fourth image--> */} 
        <div className="gallery_image">
          <img
            src="/assets/images/A-very-long-bridge-over-the-forest.png"
            alt="A very long bridge, over the forest..."
            className="img1"
            onClick={() => showPreview('longBridge')}
          />
          <div className="content">
            <p id="text4">A very long bridge, over the forest...</p>
            <LikeButton/>
          </div>

          <dialog id="longBridge" className="preview-dialog">
            <img
              src="/assets/images/A-very-long-bridge-over-the-forest.png"
              alt="A very long bridge, over the forest..."
              className="modal-img"
            />
            <p className="modal-title">A very long bridge, over the forest...</p>
            <p className="modal-description">
              A very long bridge, suspended over the forest. Can you dare to
              cross it?
            </p>
            <button onClick={() => closePreview('longBridge')}>Close</button>
          </dialog>
        </div>

        {/* <!--fifth image--> */}
        <div className="gallery_image">
          <img
            src="/assets/images/Tunnel-with-the-morning-light.png"
            alt="Tunnel with morning light"
            className="img1"
            onClick={() => showPreview('tunnelMorningLight')}
          />
          <div className="content">
            <p id="text5">Tunnel with morning light</p>
            <LikeButton/>
          </div>

          <dialog id="tunnelMorningLight" className="preview-dialog">
            <img
              src="/assets/images/Tunnel-with-the-morning-light.png"
              alt="Tunnel with morning light"
              className="modal-img"
            />
            <p className="modal-title">Tunnel with morning light</p>
            <p className="modal-description">
              Iron-framed glass walls, morning light spilling from their sides -
              glinting, scattering. A breathtaking sight.
            </p>
            <button onClick={() => closePreview('tunnelMorningLight')}>Close</button>
          </dialog>
        </div>

        {/*!--sixth image--> */}
        <div className="gallery_image">
          <img
            src="/assets/images/Mountain-house.png"
            alt="Mountain house"
            className="img1"
            onClick={() => showPreview('mountainHouse')}
          />
          <div className="content">
            <p id="text6">Mountain house</p> 
            <LikeButton/>
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
            <button onClick={() => closePreview('mountainHouse')}>Close</button>
          </dialog>
        </div>
      </div>
    </section>

    <div className="thin-line"></div>

    {/*<!-- footer  --> */}
    <footer>
      <div>2024 &copy; Spots</div>
    </footer>
    </>
  )
}

export default InstaSpot
