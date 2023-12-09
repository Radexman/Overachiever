import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import AppContext from "../../../context/AppContext";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Profile = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [username, setUsername] = useState<string>();
  const [avatar, setAvatar] = useState<File | null | undefined>();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [bio, setBio] = useState<string>();

  const {
    user,
    createUser,
    chartCalculations,
    theme,
    taskList,
    completed,
    setUserLevel,
    userLevel,
  } = useContext(AppContext);

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

    if (Object.keys(userLevel).length < 2) {
      setUserLevel({
        mainLevel: 1,
        experience: 0,
        requieredExperience: 10,
      });
    }

    setDisplayForm(false);
  };

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <div className="space-y-5 p-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-secondary md:w-20 lg:w-28">
              {user.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Users avatar"
                  className="rounded-full"
                />
              ) : (
                <div className="flex justify-center pt-8 md:pt-0">
                  <UserIcon size={120} />
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 text-center md:text-left">
            <h1 className="text-4xl font-bold md:text-3xl">
              {user.username ? user.username : "User Name"}
            </h1>
            <p className="text-sm text-primary md:text-xs">
              Tasks completed today
            </p>
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
        <p className="w-full text-center md:text-left">
          {user.bio
            ? user.bio
            : "I am mysterious individual who hasn't filed their profile section yet."}
        </p>
        <div className="flex justify-center md:justify-start">
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
          <button
            className={`btn btn-secondary btn-sm ml-2 p-2 ${
              taskList.length === 0 && completed.length === 0 && "btn-disabled"
            }`}
            onClick={() =>
              (
                document.getElementById(
                  "finish-day-modal",
                ) as HTMLDialogElement | null
              )?.showModal()
            }
          >
            Finish Day
          </button>
        </div>
        <Modal />
        <div className={displayForm ? "block" : "hidden"}>
          <div className="divider"></div>
          <form
            className={`space-y-2 rounded-lg p-4 ${
              theme === "emerald"
                ? "shadow-md shadow-slate-500"
                : "shadow-sm shadow-primary-focus"
            }`}
            onSubmit={handleSubmit}
          >
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
