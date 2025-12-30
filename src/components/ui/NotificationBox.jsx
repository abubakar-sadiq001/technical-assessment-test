import useDeleteNotif from "../../lib/useDeleteNotif";
import useMarkAll from "../../lib/useMarkAll";
import { useNotification } from "../../lib/useNotifications";
import { useUser } from "../../lib/useUser";
import NotificationList from "../NotificationList";

function NotificationBox({ handleOpenNotification }) {
  const { user } = useUser();
  const { data: notifications } = useNotification();
  const { markAllNotif, isMarking } = useMarkAll();
  const { deleteAll, isDeleting } = useDeleteNotif();

  const length = notifications?.length;
  const markedNotifs = notifications?.filter(
    (notification) => notification.is_read === false,
  )?.length;

  function handleMArkAll(id) {
    markAllNotif(id);
  }

  function handleDeleteAll(id) {
    deleteAll(id);
  }

  return (
    <div className="absolute top-20 right-5 w-full max-w-100 rounded-xl shadow-[0px_8px_15px] shadow-gray-300">
      <header className="flex items-center justify-between rounded-tl-xl rounded-tr-xl bg-[linear-gradient(45deg,#901efe,#ffc5c5)] px-5 py-5">
        <div>
          <h1 className="text-[17px] font-semibold text-white">
            Notifications
          </h1>
        </div>
        <div className="flex gap-5 text-sm">
          <button
            onClick={() => handleMArkAll(user?.id)}
            disabled={isMarking || markedNotifs === 0 || !length}
            className={`cursor-pointer text-[12px] font-semibold ${markedNotifs === 0 ? "text-[#fff9]" : "rounded-sm px-2 py-1 text-white transition-all duration-200 hover:bg-[#edb4f199]"}`}
            style={{
              cursor: isMarking || markedNotifs === 0 ? "no-drop" : "pointer",
            }}
          >
            Mark all as read
          </button>
          <button
            onClick={() => handleDeleteAll(user?.id)}
            disabled={isDeleting || !length}
            className="cursor-pointer rounded-sm px-2 py-1 text-[12px] font-semibold text-white transition-all duration-200 hover:bg-[#edb4f199]"
            style={{
              cursor: isDeleting || !length ? "no-drop" : "pointer",
            }}
          >
            Delete All
          </button>
        </div>
      </header>

      {/* NOTIFICATIONS LIST */}
      <NotificationList handleOpenNotification={handleOpenNotification} />
    </div>
  );
}

export default NotificationBox;
