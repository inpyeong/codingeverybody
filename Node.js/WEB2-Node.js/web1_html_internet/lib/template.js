module.exports = {
    html: (title, list, body, control) => {
         var template = `
           <!doctype html>
              <html>
                  <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    <link rel="stylesheet" href="../template.css" />
                  </head>
                  <body>
                   <h1><a href="/">WEB</a></h1>
                       ${list}
                       ${control}
                       ${body}
                  </body>
              </html>
        `;
        return template;
    },
    list: (filelist) => {
        var list = "";
        list += "<ul>";
        for (var i = 0; i < filelist.length; i++) {
            list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        list += "</ul>";
        return list;
    }
}


