import React from "react";

const commentsData = [
  {
    name: "Anant Singh",
    text: "Lorem epsum heloo bisum soduin contruvtor",
    replies: [
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [
          {
            name: "Anant Singh",
            text: "Lorem epsum heloo bisum soduin contruvtor",
            replies: [
              {
                name: "Anant Singh",
                text: "Lorem epsum heloo bisum soduin contruvtor",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
    ],
  },
  {
    name: "Anant Singh",
    text: "Lorem epsum heloo bisum soduin contruvtor",
    replies: [],
  },
  {
    name: "Anant Singh",
    text: "Lorem epsum heloo bisum soduin contruvtor",
    replies: [
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
      {
        name: "Anant Singh",
        text: "Lorem epsum heloo bisum soduin contruvtor",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt=""
        className="w-12 h-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black mx-5">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
