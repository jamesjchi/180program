$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.button-collapse').sideNav({
      menuWidth: 200,
      closeOnClick: true
      }
    );
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.tooltipped').tooltip({delay: 50});

});