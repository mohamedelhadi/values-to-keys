// Example: Real-world usage of values-to-keys
import { replace } from 'values-to-keys';

// Define a sample translation file (this would usually be loaded from a JSON file)
const translationFile = {
  common: {
    buttons: {
      submit: 'Submit',
      cancel: 'Cancel',
      reset: 'Reset Form'
    },
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address'
    }
  },
  pages: {
    home: {
      title: 'Welcome to our application',
      subtitle: 'Getting started is easy'
    },
    about: {
      title: 'About Us',
      content: 'We are a team of developers'
    }
  }
};

// Replace all translation values with their keys
replace(translationFile);

console.log('Transformed translation file:');
console.log(JSON.stringify(translationFile, null, 2));

// This would output:
/*
{
  "common": {
    "buttons": {
      "submit": "common.buttons.submit",
      "cancel": "common.buttons.cancel",
      "reset": "common.buttons.reset"
    },
    "errors": {
      "required": "common.errors.required",
      "invalidEmail": "common.errors.invalidEmail"
    }
  },
  "pages": {
    "home": {
      "title": "pages.home.title",
      "subtitle": "pages.home.subtitle"
    },
    "about": {
      "title": "pages.about.title",
      "content": "pages.about.content"
    }
  }
}
*/

// To use this in a real application, you might:
// 1. Write the transformed file to disk for reference
// fs.writeFileSync(
//   path.join(__dirname, 'translation-keys.json'), 
//   JSON.stringify(translationFile, null, 2)
// );

// 2. Use the keys in your application code like:
// import { t } from 'some-i18n-library';
// const submitButton = document.getElementById('submit-btn');
// submitButton.textContent = t('common.buttons.submit');
