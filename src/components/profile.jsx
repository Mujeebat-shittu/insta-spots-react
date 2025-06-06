import { useState } from "react";

function Profile() {
  const [modalOpen, setModalOpen] = useState(false);

  const [profileInfo, setProfileInfo] = useState({
    name: "Bessie Coleman",
    job: "Civil Aviator",
    image: "/assets/images/Bessie-Coleman.png",
  });

  const [formData, setFormData] = useState(profileInfo);

  const openModal = function () {
    setFormData(profileInfo);
    setModalOpen(true);
  };

  const closeModal = function () {
    setModalOpen(false);
  };

  const handleChange = function (e) {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: e.target.type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    setProfileInfo(formData);

    console.log("Form submitted:");
    console.log("Name:", formData.name);
    console.log("Job:", formData.job);
    console.log("Image file:", formData.image);

    closeModal();
  };

  return (
    <>


      <section className="profile">
        <img
          className="profileImage"
          src={
              formData.image instanceof File
                ? URL.createObjectURL(formData.image)
                : "/assets/images/Bessie-Coleman.png"
            }
            alt="Profile"
          
        />

        <div className="profileDetails">
          <div className="profileNameAndJob">
            <h2 className="profileName">{profileInfo.name}</h2>
            <p className="profileJobTitle">{profileInfo.job}</p>
          </div>
          <p className="profileEdit" onClick={openModal}>
            <img
              className="EditIcon"
              src="/assets/icons/Edit-Profile-Icon-Light.svg"
              alt="Edit Image Icon"
            />
            Edit Profile
          </p>
        </div>

    
      </section>

      {modalOpen && (
        <dialog className="modal" id="editModal" open>
          <div className="flex">
            <div className="modal-content">
              <p className="closeBtn" onClick={closeModal}>
                ❌
              </p>
              <h2>Edit Profile</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="editName"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="job">Job Title</label>
                <input
                  type="text"
                  name="job"
                  placeholder="Job Title"
                  id="editJob"
                  required
                  value={formData.job}
                  onChange={handleChange}
                />

                <input
                  type="file"
                  name="image"
                  id="editImage"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />

                <button type="submit" id="saveProfile">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Profile;
