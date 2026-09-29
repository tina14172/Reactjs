
import { useEffect, useState } from "react";

function App() {
  const API = "http://localhost:3000/Bookblogs";

  const [Bookblogs, setBookblogs] = useState([]);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [date, setdate] = useState("");
  const [id, setid] = useState(null);

  fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    res.json().then((data) => {
      setBookblogs(data);
    });
  });

  const handleClick = (e) => {
    // e.preventDefault();

    const blog = {
      title,
      name,
      desc,
      date,
      img,
    };

    if (!id) {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
    } else {
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
    }
  };

  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleEdit = (blog) => {
    setid(blog.id);
    setTitle(blog.title);
    setname(blog.name);
    setdesc(blog.desc);
    setdate(blog.date);
    setImg(blog.img);
  };

  useEffect(() => {

  }, [Bookblogs])

  return (
    <>

      <div className="bg-dark text-white text-center py-4 mb-4">
        <h1 className="fw-bold mb-1">📚 Book Blog</h1>
        <p className="mb-0 text-secondary">
          Explore interesting books and their stories
        </p>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">

            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">

                <h3 className="text-center fw-bold mb-4">
                  {id ? "Edit Blog" : "Add Blog"}
                </h3>

                <form>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Title</label>
                    <input type="text" className="form-control" value={title} placeholder="Enter blog title" onChange={(e) => setTitle(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input type="text" className="form-control" value={name} placeholder="Enter author name" onChange={(e) => setname(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Description</label>
                    <input type="text" className="form-control" value={desc} placeholder="Enter description" onChange={(e) => setdesc(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Date</label>
                    <input type="date" className="form-control" value={date} onChange={(e) => setdate(e.target.value)} />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Image URL</label>
                    <input type="url" className="form-control" value={img} placeholder="Add Image URL" onChange={(e) => setImg(e.target.value)} />
                  </div>

                  <div className="d-grid">
                    <button type="button" onClick={handleClick} className={`btn btn-lg rounded-3 ${id ? "btn-warning" : "btn-primary"}`}> {id ? "Edit" : "ADD"}
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="text-center fw-bold mb-4">
          📖 All Book Blogs
        </h2>

        <div className="row g-4">
          {Bookblogs.map((element, index) => {
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <img src={element.img} alt={element.title} className="card-img-top" style={{ height: "250px", objectFit: "cover", }} />

                  <div className="card-body">
                    <span className="badge bg-secondary mb-2"> Blog : {index + 1}</span>

                    <h4 className="card-title fw-bold"> {element.title}</h4>

                    <h6 className="text-primary fw-bold">Author : {element.name}</h6>

                    <p className="card-text text-muted"> {element.desc}</p>

                    <p className="mb-0"><strong>Date : </strong>
                      <span className="text-secondary"> {element.date}</span>
                    </p>
                  </div>

                  <div className="card-footer bg-white border-0 p-3">
                    <div className="d-flex gap-2">
                      <button onClick={() => handleEdit(element)} className="btn btn-warning w-50 fw-bold"> EDIT
                      </button>

                      <button onClick={() => handleDelete(element.id)} className="btn btn-danger w-50 fw-bold"> DELETE
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

