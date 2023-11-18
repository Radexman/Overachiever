import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import AppContext from "../../../Context/AppContext";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

const Profile = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [username, setUsername] = useState<string>();
  const [avatar, setAvatar] = useState<File | null | undefined>();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [bio, setBio] = useState<string>();

  const { user, createUser, chartCalculations, theme } = useContext(AppContext);

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

  // Submit Profile Form
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
        className={`space-y-5 rounded-lg p-4 shadow-sm shadow-primary-focus ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        } p-4 py-4 shadow-primary-focus`}
      >
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-secondary lg:w-28">
              {user.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Users avatar"
                  className="rounded-full"
                />
              ) : (
                <div className="flex justify-center">
                  <UserIcon size={120} />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">
              {user.username ? user.username : "User Name"}
            </h1>
            <p className="text-xs text-primary">Tasks completed today</p>
            <div className="space-x-2">
              <Badge
                taskType="important"
                taskAmount={chartCalculations.importantTasksCompleted}
              />
              <Badge
                taskType="regular"
                taskAmount={chartCalculations.regularTasksCompleted}
              />
              <Badge
                taskType="all"
                taskAmount={chartCalculations.completedTasks}
              />
            </div>
          </div>
        </div>
        <p>
          {user.bio
            ? user.bio
            : "I am mysterious individual who hasn't filed their profile section yet."}
        </p>
        <Button
          color="secondary"
          size="sm"
          open={displayForm}
          togglerFunction={setDisplayForm}
          textContent={{
            open: "Edit Profile",
            close: "Hide Form",
          }}
        />
        <div className={displayForm ? "block" : "hidden"}>
          <div className="divider"></div>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-left text-sm font-bold">
                Username
              </label>
              <input
                onChange={handleUsernameInput}
                value={username}
                maxLength={30}
                type="text"
                className="input input-bordered input-secondary input-md"
                placeholder="Enter your username here"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="avatr" className="text-left text-sm font-bold">
                Profile Picture
              </label>
              <input
                onChange={handleAvatarInput}
                type="file"
                accept="image/"
                className="file-input file-input-bordered file-input-info input-secondary w-full text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="bio" className="text-left text-sm font-bold">
                Bio
              </label>
              <textarea
                onChange={handleBioInput}
                value={bio}
                name="bio"
                placeholder="Describe yourself and the goals you want to achieve"
                id="bio"
                className="input input-bordered input-secondary block h-36 p-4 text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={!username}
              className="btn btn-secondary btn-outline w-full md:btn-wide"
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
