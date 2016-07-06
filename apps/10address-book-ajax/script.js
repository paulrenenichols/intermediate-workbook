'use strict';

$(document).ready(function() {
    // You code here
    $.ajax({
      url: 'https://reqres-api.herokuapp.com/api/users',
      method: 'GET',
      success: function (data, status) {
        console.log('success');
        data.forEach(function (user) {
          $('tbody').append('<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a href="#" data-id="' + user.id + '">view</a></td></tr>');
        });

        $('a').click(function (event) {
          event.preventDefault();
          var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');
          $.ajax({
            url:    url,
            method: 'GET',
            success: function (user) {
              console.log('inner success');
              console.log(user);
              $('#details').html('<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '">');
            }
          });
        });
      }
    });
});
