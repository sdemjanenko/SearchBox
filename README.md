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

    aSearchBox.setData(['one', 'two', 'three']);
    aSearchBox.setData([{"dog": "cat"}, {"plane": "boat"}, {"sun": "moon"}]);

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

## Dependencies
- jQuery
- underscore
