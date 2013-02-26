var SearchBox = (function($, _) {
  var defaults = {
    timeout: 100, // doesn't run the search till at least 100ms after the last keystroke
    searchFn: defaultSearch
  };

  var ctor = function(input, options) {
    this.data = [];
    this.result = [];
    this.value = '';
    this.input = $(input);

    this.options = _.extend({}, defaults, options);

    _.bindAll(this);
    this.input.on('input', _.debounce(this.updateQueryFromInput, this.options.timeout));
    $(this).on('change:value', function(e, val) { // update the input element's value if querying from the JS
      this.input.val(val);
    });
    $(this).on('change:data change:value', this.run);

    this.updateQueryFromInput();
  };

  ctor.prototype = {
    updateQueryFromInput: function() {
      this.query(this.input.val());
    },
    query: function(new_value) {
      this.set('value', new_value);
    },
    set: function(attr, val) {
      this[attr] = val;
      $(this).trigger('change:' + attr, [val]);
    },
    run: function() {
      var res = this.options.searchFn(this.data, this.value);

      if (this.result.length !== res.length || !_.isEqual(this.result, res))
        this.set('result', res);
    }
  };

  function defaultSearch(data, term) {
    return _.filter(data, function(val) { return val.indexOf(term) !== -1; });
  }

  return ctor;
})(jQuery, _);