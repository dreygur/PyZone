// Get Result for individual
const basePath = 'https://www.politico.com/interactives/databases/trump-white-house-visitor-logs-and-records/api/';
const search = 'search.json';

fetch(basePath + search)
  .then( (res) => {
      if(res.status != 200) {
        console.log(`Looks like something isn't right. Status: ${res.status}`);
      }
      // Process response Data
      res.json().then( (data) => {
        for(var i in data) {
          var type = '';
          switch(data[i].type) {
            case 'People':
              type = '/visitor/';
              break;
            case 'Organizations':
              type = '/organization/';
              break;
            case 'Industry':
              type = '/industry/';
              break;
            case 'Date':
              type = '/date/';
              break;
            case 'Types':
              type = '/type/';
              break;
            }
          console.log(`Name: ${data[i].name}\nUrl: ${basePath+type+data[i].slug}.json`);
        }
      })
    }
  )
  // Process any error
  .catch( (err) => {
  	console.log('Fetch Error :-S', err);
  });
