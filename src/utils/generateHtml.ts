import handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';

// generates html string from handlebars template
export const generateTemplate = (data: any, templateName) => {
  const filepath = path.join(__dirname, `../views/${templateName}.hbs`); //__dirname means /src/utils
  const html = fs.readFileSync(filepath).toString();
  const template = handlebars.compile(html);

  // complete html string. i.e. data + template html
  return template({
    displayName: data.name,
  });
};
