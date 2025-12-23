function NotificationBox() {
  return (
    <div className="absolute top-20 right-5 rounded-xl bg-red-500 shadow-2xs">
      <header className="flex items-center justify-between p-4">
        <div>
          <h1>Notifications</h1>
        </div>
        <div className="flex gap-3">
          <button>Mark all as read</button>
          <button>Delete All</button>
        </div>
      </header>

      <ul>
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
