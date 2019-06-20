function AddressBook() 
{
  this.contacts = []
}
// contacts list

function Contact(first_name, second_name, phone_number, email, address) /*The constructor function */
 {
	 
  // The properties of this object
  this.first_name = first_name,
  this.second_name = second_name,
  this.phone_number = phone_number,
  this.email = email,
  this.address = address
}

Contact.prototype.full_name = function()  //Sets new object's prototype property to be the constructor function's prototype object and returns the newly created object.


{
	
  console.log("MY Fullname:"  + this.first_name + " " + this.second_name + " " + "Telephone:" +this.phone_number + " " + "Email:" +this.email+ " " + "Address:" +this.address);
	}
var Contact = new Contact ("Muhereza", "Amon", "774953848","muherezaamon75@gmail.com","kanungu, Kampala, Uganda");
Contact.full_name(); // This populates the object with elements


