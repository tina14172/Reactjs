import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/blogs";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    date: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Get blogs from db.json
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
      alert("API connect nahi ho rahi. Please json-server check kare.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.id ||
      !form.title ||
      !form.image ||
      !form.category ||
      !form.date ||
      !form.description
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const blogData = {
        id: String(form.id),
        title: form.title,
        image: form.image,
        category: form.category,
        date: form.date,
        description: form.description,
      };

      if (editingId !== null) {
        const response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });

        if (!response.ok) {
          throw new Error("Failed to update blog");
        }

        alert("Blog updated successfully!");
      } else {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });

        if (!response.ok) {
          throw new Error("Failed to add blog");
        }

        alert("Blog added successfully!");
      }

      clearForm();
      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const handleEdit = (blog) => {
    setForm({
      id: blog.id,
      title: blog.title,
      image: blog.image,
      category: blog.category,
      date: blog.date,
      description: blog.description,
    });

    setEditingId(blog.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book blog?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      alert("Blog deleted successfully!");
      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert("Delete failed!");
    }
  };

  const clearForm = () => {
    setForm({
      id: "",
      title: "",
      image: "",
      category: "",
      date: "",
      description: "",
    });

    setEditingId(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="header-small">BOOKS & STORIES</p>
          <h1>Book Blog</h1>
          <p className="header-text">
            Discover inspiring books, authors and stories.
          </p>
        </div>

        <div className="blog-count">
          <strong>{blogs.length}</strong>
          <span>Blogs</span>
        </div>
      </header>

      <div className="main-layout">
        {/* Add / Edit Form */}
        <aside className="form-section">
          <div className="form-card">
            <div className="form-heading">
              <span className="form-icon">📚</span>
              <div>
                <h2>{editingId !== null ? "Edit Blog" : "Add New Blog"}</h2>
                <p>
                  {editingId !== null
                    ? "Update your book blog"
                    : "Create a new book blog"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Blog ID</label>
              <input
                type="text"
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="Enter blog ID"
              />

              <label>Book Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter book title"
              />

              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Paste image URL"
              />

              <label>Category</label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Example: Fiction"
              />

              <label>Date</label>
              <input
                type="text"
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="Example: 29 Sep 2026"
              />

              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write book description..."
                rows="5"
              />

              <button className="submit-btn" type="submit">
                {editingId !== null ? "Update Blog" : "Add Blog"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={clearForm}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </aside>

        {/* Blog Cards */}
        <main className="blogs-section">
          <div className="section-title">
            <div>
              <p className="section-label">LATEST COLLECTION</p>
              <h2>Latest Book Blogs</h2>
            </div>

            <span>{blogs.length} Books</span>
          </div>

          {loading ? (
            <div className="loading">Loading book blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="empty">
              <h3>No blogs found</h3>
              <p>Add your first book blog using the form.</p>
            </div>
          ) : (
            <div className="blog-container">
              {blogs.map((blog) => (
                <article className="blog-card" key={blog.id}>
                  <div className="image-wrapper">
                    <img src={blog.image} alt={blog.title} />
                    <span className="category">{blog.category}</span>
                  </div>

                  <div className="blog-content">
                    <div className="blog-info">
                      <span>Blog #{blog.id}</span>
                      <span>{blog.date}</span>
                    </div>

                    <h2>{blog.title}</h2>

                    <p>{blog.description}</p>

                    <div className="button-group">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(blog)}
                      >
                        ✏️ Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(blog.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
