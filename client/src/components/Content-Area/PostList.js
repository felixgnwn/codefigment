// client/src/components/PostList.js
import React, { useEffect, useState } from "react";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../../services/PostService";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [isEditing, setIsEditing] = useState(null);

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
    <div>
      {posts.map((post) => (
        <div key={post._id} className="rounded-xl bg-white p-2 mb-4">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>
            <strong>Author:</strong> {post.author}
          </p>
          <button
            onClick={() => {
              setIsEditing(post._id);
              setNewPost(post); // Fill form with post details for editing
            }}
          >
            Edit
          </button>
          <button onClick={() => handleDeletePost(post._id)}>Delete</button>
        </div>
      ))}

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
    </div>
  );
};

export default PostList;
