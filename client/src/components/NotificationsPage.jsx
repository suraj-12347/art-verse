import React from "react";

const NotificationsPage = ({ notifications }) => {
  return (
    <div className="p-2 bg-white min-h-screen overflow-y-auto">
     
      {notifications.length > 0 ? (
        notifications.map((item) => (
            <div
            key={item.id}
            className="flex items-center justify-between gap-3 p-1 w-full "
          >
           <div className="flex items-center w-full justify-between gap-2 p-3 bg-[var(--bg)] rounded-lg ">
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
                    className="w-14 h-14 rounded-md object-fill"
                 />
             )}
           </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No notifications</p>
      )}
    </div>
  );
};

export default NotificationsPage;
