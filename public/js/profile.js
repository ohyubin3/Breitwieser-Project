const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#product-name').value.trim();
  const price = document.querySelector('#product-price').value.trim();
  const description = document.querySelector('#product-desc').value.trim();
  const artist = document.querySelector('#artistDropdown').value.trim();
  const heat = document.querySelector('#heatDropdown').value;
  const userID = document.querySelector('#user-id').attributes.value.value;
  const link = document.querySelector('#image-link').value.trim();

  if (name && price && description && artist && heat && link) {
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        product_name: name,
        price: price,
        product_desc: description,
        artist_id: artist,
        heat_id: heat,
        user_id: userID,
        image_link: link,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create product');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete product');
    }
  }
};

document
  .querySelector('#submit-art')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.container')
  .addEventListener('click', delButtonHandler);
