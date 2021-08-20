import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://i.postimg.cc/j5jY9Bmx/received-803190483866820.jpg",
      id: 1,
      name: "Mavrick Latorilla",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://i.postimg.cc/nzmg6ZTt/Pinayavatar.jpg",
      id: 2,
      name: "Thena",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.postimg.cc/J7xCm7M1/manny-pacquiao.jpg",
      id: 3,
      name: "Bose Link",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.postimg.cc/CxPKKH0x/rene.jpg",
      id: 4,
      name: "Pedro Juan",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.postimg.cc/bwbnDB6w/Karen.jpg",
      id: 5,
      name: "Neneth Sutherburg",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Karen Horla",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
    render() {
        return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>Chat Composer</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chat List</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}