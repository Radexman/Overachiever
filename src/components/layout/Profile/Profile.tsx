import { useState } from "react";

const Profile = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-lg space-y-4 rounded-md bg-secondary-content p-4">
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="h-28 w-28 rounded-full border-2 border-black bg-primary-focus"></div>
          <h2 className="text-lg font-bold">Username</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia cum
          architecto dolor, temporibus saepe eaque debitis repellendus culpa sed
          inventore nostrum rem, quos corporis minus unde voluptas commodi quae
          officia.
        </p>
        <button
          onClick={() => setDisplayForm(!displayForm)}
          className="btn btn-outline btn-sm"
        >
          Edit
        </button>
        <div className="divider"></div>
        <div className={displayForm ? "block" : "hidden"}>
          <form>
            <div>
              <label htmlFor="username">Your Username</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="avatr">Profile Picture</label>
              <input type="file" name="avatar" />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" id="bio"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
