import { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import AppContext from "../../../context/AppContext";

const Profile = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [username, setUsername] = useState<string>();
  const [avatar, setAvatar] = useState<File | null | undefined>();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [bio, setBio] = useState<string>();

  const { user, createUser } = useContext(AppContext);

  useEffect(() => {
    if (avatar) {
      setImageUrl(URL.createObjectURL(avatar));
    }
  }, [avatar]);

  const handleUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleAvatarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setAvatar(files[0]);
    } else {
      setAvatar(null);
      console.error("No file selected");
    }
  };

  const handleBioInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      username,
      imageUrl,
      bio,
    };

    createUser(user);

    setDisplayForm(false);
  };

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <div
        className={`space-y-4 rounded-lg bg-secondary-content p-4 shadow-md shadow-primary-focus`}
      >
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary">
              <img
                src={user?.imageUrl}
                alt="Users avatar"
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold">
            {user?.username ? user.username : "User Name"}
          </h2>
        </div>
        <p className="text-lg">
          {user?.bio
            ? user.bio
            : "I am mysterious individual who hasn't filed their profile section yet."}
        </p>
        <button
          onClick={() => setDisplayForm(!displayForm)}
          className="btn btn-primary btn-sm p-2"
        >
          Edit Profile
        </button>
        <div className="divider"></div>
        <div className={displayForm ? "block" : "hidden"}>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-left text-sm font-bold text-primary-focus"
              >
                Your Username
              </label>
              <input
                onChange={handleUsernameInput}
                value={username}
                type="text"
                className="input input-bordered input-md"
                placeholder="Enter your username here"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="avatr"
                className="text-left text-sm font-bold text-primary-focus"
              >
                Profile Picture
              </label>
              <input
                onChange={handleAvatarInput}
                type="file"
                accept="image/"
                className="file-input file-input-bordered w-full"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="bio"
                className="text-left text-sm font-bold text-primary-focus"
              >
                Bio
              </label>
              <textarea
                onChange={handleBioInput}
                value={bio}
                name="bio"
                placeholder="Describe yourself and the goals you want to achieve"
                id="bio"
                className="input input-bordered block h-24 p-4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={!username || !bio}
              className="btn  btn-primary w-full md:btn-wide"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
