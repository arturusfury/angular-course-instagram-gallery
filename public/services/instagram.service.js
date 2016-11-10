angular.module('galPhoto')
  .factory('instagram', function($resource) {
    return {
      fetchPopular: function (callback) {
        var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
          client_id: '9f326f69cf664217a677be8a003977d9'
        }, {
          fetch: {method: 'JSONP'}
        });

        api.fetch(function(response){
          callback(response.data)
        })
      }
    }
  })
