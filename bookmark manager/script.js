// loading part

function getBookmarks(){
  const result = localStorage.getItem('bookmarks');
  if (!result) {
    return [];
  }
  
  try {
    const parsed = JSON.parse(result);
    
    if (Array.isArray(parsed)) {
      const isValidArray = parsed.every(item => 
        typeof item === 'object' && 
        item !== null && 
        'name' in item && 
        'url' in item
      );
      
      return isValidArray ? parsed : [];
    }
  } catch (error) {
    return [];
  }
  
  return [];
}

function displayOrCloseForm(){

  document.getElementById('main-section').classList.toggle('hidden');

  document.getElementById('form-section').classList.toggle('hidden');

}


function displayOrHideCategory(){

  document.getElementById('main-section').classList.toggle('hidden');

  document.getElementById('bookmark-list-section').classList.toggle('hidden');

}



document.getElementById('add-bookmark-button').addEventListener('click', function(){

  let selected = document.getElementById('category-dropdown').value;

  document.querySelectorAll('.category-name').forEach(function(el){

    el.textContent = selected;

  });

  displayOrCloseForm();

});



document.getElementById('close-form-button').addEventListener('click', function(){

  displayOrCloseForm();

});



document.getElementById('add-bookmark-button-form').addEventListener('click', function(){

  let bookmarks = getBookmarks();

  let newBookmark = {

    name: document.getElementById('name').value,

    category: document.getElementById('category-dropdown').value,

    url: document.getElementById('url').value

  };

  bookmarks.push(newBookmark);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  document.getElementById('name').value = '';

  document.getElementById('url').value = '';

  displayOrCloseForm();

});



document.getElementById('view-category-button').addEventListener('click', function(){

  let selected = document.getElementById('category-dropdown').value;

  document.querySelectorAll('.category-name').forEach(function(el){

    el.textContent = selected;

  });

  let bookmarks = getBookmarks();

  let filtered = bookmarks.filter(function(bookmark){

    return bookmark.category === selected;

  });



  let categoryList = document.getElementById('category-list');



  if (filtered.length === 0){

    categoryList.innerHTML = '<p>No Bookmarks Found</p>';

  } else {

    let html = '';

    filtered.forEach(function(bookmark){

      html += `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark">`;

      html += `<label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`;

    });

    categoryList.innerHTML = html;

  }



  displayOrHideCategory();

});



document.getElementById('close-list-button').addEventListener('click', function(){

  displayOrHideCategory();

});


// delteing part
document.getElementById('delete-bookmark-button').addEventListener('click', function(){
  let selectedRadio = document.querySelector('input[name="bookmark"]:checked');
  if(!selectedRadio) return;
  let selectedName = selectedRadio.value;
  let bookmarks = getBookmarks();
  let selectedCategory = document.querySelector('.category-name').textContent;

  bookmarks = bookmarks.filter(function(bookmark){
    return !(bookmark.name === selectedName && bookmark.category === selectedCategory);
  });
  
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  
  // Re-filter for the display update
  let filtered = bookmarks.filter(function(bookmark){
    return bookmark.category === selectedCategory;
  });

  let categoryList = document.getElementById('category-list');

  if (filtered.length === 0){
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    let html = '';
    filtered.forEach(function(bookmark){
      html += `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark">`;
      html += `<label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`;
    });
    categoryList.innerHTML = html;
  }
});