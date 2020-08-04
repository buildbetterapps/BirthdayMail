function birthdayWisher() {
  var today = new Date();
  var month = today.getMonth();
  var m;
  switch(month){
    case 0:
      m = ContactsApp.Month.JANUARY;
      break;
    case 1:
      m = ContactsApp.Month.FEBRUARY;
      break;
      case 2:
      m = ContactsApp.Month.MARCH;
      break;
      case 3:
      m = ContactsApp.Month.APRIL;
      break;
      case 4:
      m = ContactsApp.Month.MAY;
      break;
      case 5:
      m = ContactsApp.Month.JUNE;
      break;
    case 6:
      m = ContactsApp.Month.JULY;
      break;
      case 7:
      m = ContactsApp.Month.AUGUST;
      break;
      case 8:
      m = ContactsApp.Month.SEPTEMBER;
      break;
      case 9:
      m = ContactsApp.Month.OCTOBER;
      break;
      case 10:
      m = ContactsApp.Month.NOVEMBER;
      break;
      case 11:
      m = ContactsApp.Month.DECEMBER;
      break;
      
  }
  var contactsHavingBirthdayToday = ContactsApp.getContactsByDate(m, today.getDate(),ContactsApp.Field.BIRTHDAY);
 
  
  for(var i in  contactsHavingBirthdayToday){
    
    var email = contactsHavingBirthdayToday[i].getEmails();
    
    for (var j in email) {
    var gotEmail = email[j].getAddress();
      if(gotEmail !== ""){
        break;
      }
  }

    try{
      //GmailApp.sendEmail(email[0], "Happy Birthday" , "Hi , " +contactsHavingBirthdayToday[i].getGivenName()+ " Happy birthday");
      
      MailApp.sendEmail({
        to: gotEmail,
        cc: "youremail@gmail.com",
        subject: "Happy birthday",
        htmlBody: "<h3>Happy birthday to you , "+contactsHavingBirthdayToday[i].getGivenName()+" 🎂 <br/> </h3>"
     }
     );
    }catch(e) {
      GmailApp.sendEmail("youremail@gmail.com", "Happy Birthday" , "Following contact dont have email address" +contactsHavingBirthdayToday[i].getGivenName()+ "\n  "+contactsHavingBirthdayToday[i].getFullName());
    }
  }
  
}
