import pic1 from "./assets/avatars/abs/abs-07.svg";
import pic2 from "./assets/avatars/abs/abs-03.svg";
import pic3 from "./assets/avatars/abs/abs-04.svg";
import pic4 from "./assets/avatars/abs/abs-02.svg";

export const allComments = [
  {
    id: "1",
    username: "hesam",
    userId: "1",
    body: "My First Comment",
    parentId: null,
    createdAt: "2023-07-14T08:10:33.010+02:00",
  },
  {
    id: "2",
    username: "elham",
    userId: "2",
    body: "It is Mine :D",
    parentId: null,
    createdAt: "2023-07-14T08:12:33.010+02:00",
  },
  {
    id: "3",
    username: "elham",
    userId: "2",
    body: "Rep for you",
    parentId: "1",
    createdAt: "2023-07-14T08:14:33.010+02:00",
  },
  {
    id: "4",
    username: "elham",
    userId: "2",
    body: "are you happy?",
    parentId: "1",
    createdAt: "2023-07-14T08:14:53.010+02:00",
  },
  {
    id: "5",
    username: "hesam",
    userId: "1",
    body: "that is required sprit!!",
    parentId: "1",
    createdAt: "2023-07-14T08:14:57.010+02:00",
  },
  {
    id: "6",
    username: "elham",
    userId: "2",
    body: "i am here!",
    parentId: "2",
    createdAt: "2023-07-14T08:18:33.010+02:00",
  },
  {
    id: "7",
    username: "hesam",
    userId: "1",
    body: "wtf!",
    parentId: "2",
    createdAt: "2023-07-14T08:19:33.010+02:00",
  },
];

export const allUsers = [
  {
    id: "1",
    name: "hesam",
    avatar: pic1,
  },
  {
    id: "2",
    name: "elham",
    avatar: pic2,
  },
  {
    id: "3",
    name: "ava",
    avatar: pic3,
  },
  {
    id: "4",
    name: "rama",
    avatar: pic4,
  },
];
