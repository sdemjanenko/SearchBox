# SearchBox
Lightweight search capabilities for an input box

## Usage
### DOM
Add an input element
    <input type="text" id="search-box">

### Create a new SearchBox
    var aSearchBox = new SearchBox($('#search-box'), {timeout: 50});

### Set data
You can set/change the data that the search is run on.
One may want to update the data set whenever new data is obtained from the server

    aSearchBox.set('data', ['one', 'two', 'three']);
    aSearchBox.set('data', [{"dog": "cat"}, {"plane": "boat"}, {"sun": "moon"}]);

### Query
The SearchBox can be queried directly from the JS

    aSearchBox.query("on");

### Search Function
The function used for searching can be customized.  The default search assumes an array of strings or and array of arrays.

    var aSearchBox = new SearchBox($('#search-box'), {
      searchFn: customSearch
    });

    function customSearch(data, query) {
      // example of matching the query against the key
      // data looks like: [{"dog": "cat"}, {"plane": "boat"}, {"sun": "moon"}]

      return _.filter(data, function(value, key) {
        return key.indexOf(term) !== -1;
      });
    }

### Events
You can listen to events on $(aSearchBox) for anything that gets set. I find it super
useful to listen for 'change:result' events which happen whenever a new search result
is obtained

    $(aSearchBox).on('change:result', function(e, val) { console.log('new result', val);})

## Dependencies
- jQuery
- underscore
