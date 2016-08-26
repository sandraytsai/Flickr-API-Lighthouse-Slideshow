$.ajax({
  method: 'GET',
  url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8287f7bc8d49d6904d8e1b2b29e0d993&tags=lighthouse&format=json&nojsoncallback=1&auth_token=72157669760426634-0c138102a3ae78c7&api_sig=1c6403c9b2924f0e52138e8186dab3ec',
  dataType: 'json',
}).done(function(response){
  console.log(response.photos);
  var photos = response.photos.photo;
  var gallery = []
  photos.forEach(function(photo){
    gallery.push ('<img src="https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg" style="position: absolute"></img>');
  });
  var i=0
  var showImages = setInterval(function(){
                    if (i<gallery.length) {
                      $(gallery[i]).fadeIn(1000).appendTo('#gallery').delay(1000).fadeOut(1000); 
                      i++;
                    }
                    else {
                      clearInterval(showImages);
                    }
                  }, 2000)
});


