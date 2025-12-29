import { useNotification } from "../lib/useNotifications";

function Notification({ setOpenBox }) {
  const { data: notifications } = useNotification();
  const unreadNotifs =
    notifications?.filter((notification) => notification.is_read === false)
      ?.length || 0;

  return (
    <button
      onClick={() => setOpenBox((open) => !open)}
      className="relative flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-300 hover:text-[#901efe]"
    >
      <ion-icon
        name="notifications"
        style={{
          fontSize: "18px",
        }}
      ></ion-icon>

      {/* Notification count */}
      {unreadNotifs > 0 && (
        <div className="absolute -top-1 right-0 flex h-4 w-4 animate-bounce items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
          {unreadNotifs}
        </div>
      )}
    </button>
  );
}

export default Notification;
