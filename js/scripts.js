function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}
function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
  }

  Address.prototype.fullAddress = function() {
    return this.street + ", " + this.city + ", " + this.county;
  }
  Contact.prototype.fullName = function(){
      return this.firstName + " " + this.lastName;
  }
$(document).ready(function(){

    $("form#new-contact").submit(function(){

        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var newContact = new Contact(inputtedFirstName,inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $("#contacts").last().click(function(){
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
    
            $("ul#addresses").text("");
            newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
            });
        });

        $(".new-address").each(function() {
            var inputtedStreet = $(this).find(".new-street").val();
            var inputtedCity = $(this).find(".new-city").val();
            var inputtedCounty = $(this).find(".new-county").val();
            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
            newContact.addresses.push(newAddress);
        });

        $("form").trigger('reset');
    });

    $("#add-address").click(function() {
        $("#new-addresses").append('<div class="new-address">' +
                                     '<div class="form-group">' +
                                       '<label for="new-street">Street</label>' +
                                       '<input type="text" class="form-control new-street">' +
                                     '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-city">City</label>' +
                                       '<input type="text" class="form-control new-city">' +
                                     '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-county">County</label>' +
                                       '<input type="text" class="form-control new-county">' +
                                     '</div>' +
                                   '</div>');
      });
});