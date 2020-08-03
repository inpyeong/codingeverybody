module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/author">author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topic){
    var list = '<ul>';
    var i = 0;
    while(i < topic.length){
      list = list + `<li><a href="/?id=${topic[i].id}">${topic[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }, authors:function(authors, author_id) {
    var authorsHTML = `<select name="author">`;
    var i = 0;
    while(i < authors.length) {
      var selected = '';
      if (authors[i].id === author_id) {
        selected = ' selected';
      }
      authorsHTML += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i = i + 1;
    }
    authorsHTML += '</select>';
    return authorsHTML;
  },authorTable: function(authors) {
    var tag = '<table>';
    var i = 0;
    while (i < authors.length) {
      tag += `
        <tr>
          <td>${authors[i].name}</td>
          <td>${authors[i].profile}</td>
          <td><a href="/author/update?id=${authors[i].id}">update</a></td>
          <td>
            <form action="/author/delete_process" method="post">
              <input type="hidden" name="id" value="${authors[i].id}">
              <input type="submit" value="delete">
            </form>
          </td>
        </tr>
      `
      i++;
    }
    tag += '</table>';
    return tag;
  }
}

