import React, { useEffect, useState } from "react";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../../services/PostService";
import NewPostModal from "./NewPostModal";

function ContentArea() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [isEditing, setIsEditing] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch all posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await fetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle creating a new post
  const handleCreatePost = async () => {
    try {
      await createPost(newPost);
      setNewPost({ title: "", content: "", author: "" });
      loadPosts(); // Refresh the post list
      setModalOpen(false);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Handle updating a post
  const handleUpdatePost = async (id) => {
    try {
      await updatePost(id, newPost);
      setIsEditing(null);
      setNewPost({ title: "", content: "", author: "" });
      loadPosts(); // Refresh the post list
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Handle deleting a post
  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      loadPosts(); // Refresh the post list
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="w-8/12">
      <div className="flex flex-row justify-between border-2 border-gray-300 p-6">
        <input
          type="text"
          placeholder="Search Bar"
          className="w-5/12 border-2 border-gray-400 rounded-xl p-1 pl-3 pr-3"
        />
        <button
          className="bg-blue-500 rounded-xl p-1 pl-3 pr-3 text-white font-bold"
          onClick={() => setModalOpen(true)}
        >
          + Add New Post
        </button>
      </div>

      <NewPostModal
        isOpen={isModalOpen}
        isEditing={isEditing}
        onClose={() => setModalOpen(false)}
      >
        <h2>{isEditing ? "Edit Post" : "Create Post"}</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <button
          onClick={
            isEditing ? () => handleUpdatePost(isEditing) : handleCreatePost
          }
        >
          {isEditing ? "Update" : "Create"}
        </button>
      </NewPostModal>

      <div className="bg-gray-200 p-8 px-24">
        <div>
          {posts.map((post) => (
            <div
              key={post._id}
              className="rounded-xl bg-white p-2 mb-4 shadow-2xl"
            >
              <div className="border-b-2 border-gray-400">
                <h3 className="font-bold text-xl">{post.title}</h3>
              </div>
              <p>{post.content}</p>
              <p>
                <strong className="font-semibold">Author:</strong> {post.author}
              </p>
              <button
                onClick={() => {
                  setIsEditing(post._id);
                  setNewPost(post); // Fill form with post details for editing
                  setModalOpen(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
