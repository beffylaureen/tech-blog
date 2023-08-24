const newFormHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector('#blog-title').value.trim();
  const blogBody = document.querySelector('#blog-body').value.trim();

  if (blogTitle && blogBody) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ blogTitle, blogBody }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

