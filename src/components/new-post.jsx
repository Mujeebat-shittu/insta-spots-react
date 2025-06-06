import { useState } from "react";

function Post() {
  const [postOpen, setPostOpen] = useState(false);

  const [profileInfo, setProfileInfo] = useState({
    name: "",
    image: "",
    imageUrl: "",
  });

  const [postData, setPostData] = useState(profileInfo);

  const openPost = function () {;
    setPostOpen(true);
  };

  const closeModal = function () {
    setPostOpen(false);
  };

  const handleChange = function (e) {
  const { name, type, value, files } = e.target;

  setPostData((prev) => {
    if (type === "file") {
      return {
        ...prev,
        image: files[0],
        imageUrl: "", // clear URL if file selected
      };
    }

    if (type === "url") {
      return {
        ...prev,
        imageUrl: value,
        image: "", // clear file if URL entered
      };
    }

    return {
      ...prev,
      [name]: value,
    };
  });
};

  const handleSubmit = function (e) {
    e.preventDefault();

    setProfileInfo(postData);

    console.log("Form submitted:");
    console.log("Name:", postData.name);
    console.log("Image file:", postData.image);
    console.log("Image URL:", postData.imageUrl);

    closeModal();
  };

  return (
   <>

      <button onClick={openPost} className="profileBtn">
        <img
          className="newPostIcon"
          src="/assets/icons/New-Post-Icon.svg"
          alt="New Post Icon"
        />
        New Post
      </button> 
       


        {/* <!-- ============NEW POST MODAL================= --> */}
        {postOpen && (
           <>
          <div id="newPostDialog" className="modalBackdrop">
            <button onClick={closeModal} type="button" className="closeDialog">
              ✖
            </button>
            <div className="wrapperrr">
              <h2>New Post</h2>
              <span style={{ fontSize: "1rem" }}>Upload Image or Paste URL</span>
              <form onSubmit={handleSubmit} className="formm" id="newPostForm">
                <input
                  type="text"
                  name="name"
                placeholder="Enter name"
                required
                onChange={handleChange}
                />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                disabled={postData.imageUrl}
              />
              <input
                type="url"
                name="imageUrl"
                placeholder="Image URL"
                onChange={handleChange}
                disabled={postData.image}
              />
              <button className="submitBtn" type="submit">
                Add Card
              </button>
            </form>
          </div> 
          </div>
         
    </>
        )}
    </>
  );
}
  

export default Post;
