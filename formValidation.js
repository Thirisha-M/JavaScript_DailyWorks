function validPassword(password) {

   if (password.length < 8) {
       console.log("Password must be at least 8 characters long.");
       return false; 
   }
   
   
   if (!/[a-zA-Z]/.test(password)) {
       console.log("Password must contain at least one letter.");
       return false;
   }

   if (!/[0-9]/.test(password)) {
       console.log("Password must contain at least one number.");
       return false;
   }

   console.log("Password is valid.");
   return true;
}

const password = "abc210";
validPassword(password);
