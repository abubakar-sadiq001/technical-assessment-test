import { useUser } from "/src/lib/useUser.js";
import { getUserNotification } from "";

function NotificationBox() {
  const { user, isPending } = useUser();
  const notification = getUserNotification();
  console.log(notification);

  return (
    <div className="absolute top-20 right-5 w-full max-w-100 rounded-xl shadow-[0px_5px_5px] shadow-gray-400">
      <header className="flex items-center justify-between rounded-tl-xl rounded-tr-xl bg-[linear-gradient(45deg,#901efe,#ffc5c5)] px-5 py-5">
        <div>
          <h1 className="text-[17px] font-semibold text-white">
            Notifications
          </h1>
        </div>
        <div className="flex gap-5 text-sm">
          <button className="cursor-pointer text-[#fff9]">
            Mark all as read
          </button>
          <button className="cursor-pointer px-2 py-1 text-white hover:rounded-md hover:bg-[#fff9]">
            Delete All
          </button>
        </div>
      </header>

      <ul className="rounded-br-xl rounded-bl-xl bg-white">
        <li className="flex justify-between p-3">
          <div>
            <div>
              <img
                src="Anonymous_face.jpg"
                width={50}
                className="rounded-full"
              />
            </div>

            <div>
              <h2>Welcome, Sdik!</h2>
              <p>We're thrilled to have you onboard!</p>
              {/* Date */}
              <p className="text-[12px]">3d ago</p>
            </div>
          </div>

          <div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NotificationBox;
