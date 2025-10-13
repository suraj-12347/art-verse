import React from "react";

const NotificationsDropdown = ({ notifications }) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg max-h-96 overflow-y-auto p-2">
      {notifications.length > 0 ? (
        notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 p-3 w-full "
          >
           <div className="flex items-center w-full justify-between gap-3 p-3 bg-[var(--bg)] rounded-lg ">
             {/* Text Content */}
             <div className="flex-1 text-left">
              <p className="text-sm text-[var(--dark)]">
                <span className="font-semibold text-[var(--primary)]">{item.user}</span>{" "}
                {item.type === "like"
                  ? "liked your post"
                  : `commented: "${item.text}"`}
              </p>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>

            {/* Post Thumbnail */}
            {item.postImage && (
              <img
                src={item.postImage}
                alt="Post"
                className="w-14 h-14 rounded-md object-fit"
              />
            )}
           </div>
          </div>
        ))
      ) : (
        <p className="p-4 text-center text-gray-500">No notifications</p>
      )}
    </div>
  );
};

export default NotificationsDropdown;
