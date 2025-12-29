import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import useDeleteNotification from "../lib/useDeleteNotification";
import { useNotification } from "../lib/useNotifications";
import { useUser } from "../lib/useUser";
import EmptyNotif from "./ui/EmptyNotif";

function NotificationList() {
  const [openDeleteMenuId, setOpenDeleteMenuId] = useState(false);

  const { user } = useUser();
  const { data: notifications } = useNotification();
  const { deleteNotif, isDeleting } = useDeleteNotification();

  function handleOpenNotification(id) {
    console.log(id);
  }

  function handleToggleDeleteMenu(id) {
    setOpenDeleteMenuId((prevId) => (prevId === id ? null : id));
  }

  if (notifications?.length === 0 || null) return <EmptyNotif />;

  return (
    <ul className="rounded-br-xl rounded-bl-xl">
      {notifications?.map((notification, i) => (
        <li
          key={notification.id}
          onClick={() => {
            handleOpenNotification(notification?.id);
          }}
          className={`flex cursor-pointer justify-between ${i + 1 !== notifications.length ? "border-b border-b-[#E9D4FF]" : "rounded-br-xl rounded-bl-xl"} relative p-3 pb-6 ${notification.is_read ? "bg-white" : "border-l-3 border-[#901efe] bg-[#eef2ff]"}`}
        >
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center rounded-full bg-green-200 px-2 py-2">
              <ion-icon
                name="happy-outline"
                style={{
                  color: "blue",
                }}
              ></ion-icon>
            </div>

            <div className="">
              <h2 className="text-sm font-bold text-gray-600">
                {notification?.title}
              </h2>
              <p className="w-full text-xs text-gray-600">
                {`${
                  notification?.message.length >= 50
                    ? notification?.message.slice(0, 50) + "..."
                    : notification?.message
                }`}
              </p>
              <p className="mt-1 text-[12px] text-gray-400">
                {formatDistanceToNow(new Date(notification.created_at), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          <div className="relative">
            <ion-icon
              name="ellipsis-horizontal-outline"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleDeleteMenu(notification?.id);
              }}
              style={{
                backgroundColor: "#e5e7eb",
                padding: "6px 7px",
                borderRadius: "50%",
                fontSize: "12px",
              }}
            ></ion-icon>

            {/* DELETE NOTIFICATION BTN - Only show for this specific notification */}
            {openDeleteMenuId === notification.id && (
              <div
                className="absolute right-0 z-10 cursor-pointer rounded-md bg-white p-1 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="flex w-full cursor-pointer items-center gap-1 px-4 py-1 hover:bg-[#eef2ff] hover:text-red-600"
                  onClick={() => {
                    deleteNotif({
                      notifId: notification?.id,
                      userId: user?.id,
                    });
                  }}
                  disabled={isDeleting}
                >
                  <ion-icon
                    name="trash"
                    style={{
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  ></ion-icon>
                  <p className="cursor-pointer text-xs font-semibold">Delete</p>
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NotificationList;
