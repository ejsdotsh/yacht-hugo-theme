
'use strict'

window.SearchApp = {
  searchField: document.getElementById("searchField"),
  searchButton: document.getElementById("searchButton"),
  output: document.getElementById("output"),
  searchData: {},
  searchIndex: {}
};

axios.get('/search/index.json')
  .then(response => {
    console.log(response);
    SearchApp.searchData = response.data;
    SearchApp.searchIndex = lunr(function () {
      this.ref('href');
      this.field('title');
      this.field('body');
      response.data.results.forEach(e => {
        // console.log(e);
        this.add(e);
      });
    });
  });

SearchApp.searchButton.addEventListener('click', search);

function search() {
  let searchText = SearchApp.searchField.value;

  let resultList = SearchApp.searchIndex.search(searchText);

  console.log(resultList);

  let list = [];
  let results = resultList.map(entry => {
    SearchApp.searchData.results.filter(d => {
      if (entry.ref == d.ref) {
        console.log(d);
        list.push(d);
      }
    })
  });
  display(list);
  console.log(list);
};

function display(list) {
  console.log(list);

  SearchApp.output.innerText = '';
  if (list.length > 0) {
    const ul = document.createElement("ul");
    list.forEach(el => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = el.href;
      a.text = el.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    SearchApp.output.appendChild(ul);
  } else {
    SearchApp.output.innerHTML = "there is no record of that";
  }
};