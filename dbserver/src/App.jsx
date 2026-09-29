import React, { useState } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Football",
      category: "Sports",
      date: "28 Sep 2026",
      image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      description:
        "Football is one of the most popular sports in the world, known for teamwork, skill, speed and exciting matches.",
    },
    {
      id: 2,
      title: "Cricket",
      category: "Sports",
      date: "27 Sep 2026",
      image:"https://images.unsplash.com/photo-1531415074968-036ba1b575da",
      description:
        "Cricket is a popular bat-and-ball sport played in different formats, including Test, ODI and T20 matches.",
    },
    {
      id: 3,
      title: "Basketball",
      category: "Sports",
      date: "26 Sep 2026",
      image:"https://images.unsplash.com/photo-1546519638-68e109498ffc",
      description:
        "Basketball is a fast-paced team sport that focuses on shooting, passing, dribbling and strong teamwork.",
    },
    {
      id: 4,
      title: "Tennis",
      category: "Sports",
      date: "25 Sep 2026",
      image:"https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0",
      description:
        "Tennis is a competitive racket sport that can be played individually or between two teams of two players.",
    },
    {
      id: 5,
      title: "Badminton",
      category: "Sports",
      date: "24 Sep 2026",
      image:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
      description:
        "Badminton is a fast racket sport played with a shuttlecock and requires speed, accuracy and quick reflexes.",
    },
    {
      id: 6,
      title: "Volleyball",
      category: "Sports",
      date: "23 Sep 2026",
      image:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1",
      description:
        "Volleyball is a team sport where players work together to send the ball over a net and score points.",
    },
    {
      id: 7,
      title: "Formula 1",
      category: "Motorsport",
      date: "22 Sep 2026",
      image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
      description:
        "Formula 1 is a high-speed motorsport featuring advanced racing cars, talented drivers and challenging circuits.",
    },
    {
      id: 8,
      title: "Boxing",
      category: "Combat Sport",
      date: "21 Sep 2026",
      image:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
      description:
        "Boxing is a combat sport that requires strength, fitness, speed, technique and excellent defensive skills.",
    },
    {
      id: 9,
      title: "Swimming",
      category: "Water Sport",
      date: "20 Sep 2026",
      image:"https://images.unsplash.com/photo-1530549387789-4c1017266635",
      description:
        "Swimming is a popular sport and fitness activity that develops endurance, strength and overall body coordination.",
    },
    {
      id: 10,
      title: "Athletics",
      category: "Sports",
      date: "19 Sep 2026",
      image:  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      description:
        "Athletics includes running, jumping and throwing events that test speed, strength, endurance and technique.",
    },
  ]);

  const [form, setForm] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    date: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
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

    if (editingId !== null) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === editingId
            ? {
                ...form,
                id: Number(form.id),
              }
          : blog
        )
      );
    } else {
      setBlogs([
        ...blogs,
        {
          ...form,
          id: Number(form.id),
        },
      ]);
    }
    clearForm();
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

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
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
        <h1>Sports Blog</h1>
      </header>

      <div className="main-layout">
        <aside className="form-section">
          <div className="form-card">

            <h2>
              {editingId !== null
                ? "Edit Blog"
                : "Add New Blog"}
            </h2>

            <form onSubmit={handleSubmit}>

              <label>Blog ID</label>
              <input
                type="number"
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="Enter blog ID"/>

              <label>Blog Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter sports title"/>

              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Enter image URL"/>

              <label>Category</label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Example: Sports"/>

              <label>Date</label>
              <input
                type="text"
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="Example: 28 Sep 2026"/>

              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter blog description"/>

              <button className="submit-btn" type="submit">
                {editingId !== null
                  ? "Update Blog"
                  : "Add Blog"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={clearForm}>
                  Cancel
                </button>
              )}
            </form>
          </div>
        </aside>

        <main className="blogs-section">
          <div className="section-title">
            <h2>Latest Sports Blogs</h2>
            <span>{blogs.length} Blogs</span>
          </div>

          <div className="blog-container">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.id}>

                <img
                  src={blog.image}
                  alt={blog.title}/>

                <div className="blog-content">
                  <span className="category">
                    {blog.category}
                  </span>

                  <h2>{blog.title}</h2>

                  <div className="blog-info">
                    <span>ID: {blog.id}</span>
                    <span>{blog.date}</span>
                  </div>

                  <p>{blog.description}</p>

                  <div className="button-group">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(blog)}>
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(blog.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;