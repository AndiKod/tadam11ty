// Grabbing data from https://www.nocodb.com/docs
// with the API token from the .env file
export default async function () {
	const options = {
    method: 'GET',
    headers: {
      'xc-token': process.env.NOCO
    }
  };

  let colors = {};

  await fetch('https://app.nocodb.com/api/v2/tables/megezbvfx5tzua1/records?offset=0&limit=25&where=&viewId=vw82yc783pmxbrmj', options)
    .then(response => response.json())
    .then(response => colors = response.list)
    .catch(err => console.error(err));

  return colors;

};

/**
 * Then, in any template, you can use it like this:
 * 
 * {% for color in colors %}
    <li>{{ color.Color }}</li>
   {% endfor %}
 * 
 */