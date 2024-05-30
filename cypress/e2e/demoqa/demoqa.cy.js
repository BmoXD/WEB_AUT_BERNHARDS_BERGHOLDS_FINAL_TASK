import { AutomationPracticeFormPage } from "../pageObjects/automationPracticeForm.page";

describe("Demoqa", () => {
    context("Selectable Grid", () => 
    {

        beforeEach(() =>
        {
            // a. Open the website
            cy.visit('https://demoqa.com/automation-practice-form');
        });

        it("Fill out the form and validate the information", () =>
        {   
            var firstName = 'Bob';
            var lastName = 'Smith'
            var email = AutomationPracticeFormPage.generateRandomEmail();
            var gender = AutomationPracticeFormPage.getRandomGender();
            var phoneNr = AutomationPracticeFormPage.generatePhoneNumber();
            var year = '1930';
            var month = 'February';
            var day = '28';
            var validationDateString = day + ' ' + month + ',' + year;
            var subject = 'Economics';
            var hobby = 'Music';
            var pictureFileName = 'hat.webp';
            var picturePath = 'cypress/files/' + pictureFileName;
            var state = 'NCR';
            var city = 'Delhi';
            var address = '311, Saffron Complex, Fatehgunj';

            // b. Input all the necessary information
            AutomationPracticeFormPage.firstNameInput.type(firstName);
            AutomationPracticeFormPage.lastNameInput.type(lastName);
            AutomationPracticeFormPage.emailInput.type(email);
            AutomationPracticeFormPage.radiosForGender.contains(gender).click();
            AutomationPracticeFormPage.mobileNumberInput.type(phoneNr);
            AutomationPracticeFormPage.currentAddressInput.type(address);

            // c. Set Date of Birth with Calendar widget to 28th of February, 1930
            AutomationPracticeFormPage.dateOfBirthInput.click();
            AutomationPracticeFormPage.monthSelect.select('February');
            AutomationPracticeFormPage.yearSelect.select('1930');
            AutomationPracticeFormPage.dayButton.contains(day).click();

            // d. Set Subjects to Economics
            AutomationPracticeFormPage.subjectsInput.type(subject);
            AutomationPracticeFormPage.subjectsMenuList.contains(subject).click();

            // e. Set Hobbies to Music
            AutomationPracticeFormPage.hobbiesCheckbox.contains(hobby).click();

            // f. Upload an image
            AutomationPracticeFormPage.pictureUpload.selectFile(picturePath);

            // g. Set State to NCR
            AutomationPracticeFormPage.stateField.click();
            AutomationPracticeFormPage.stateDropdown.contains(state).click();

            // h. Set City to Delhi
            AutomationPracticeFormPage.cityField.click();
            AutomationPracticeFormPage.cityDropdown.contains(city).click();

            // i. Click Submit
            AutomationPracticeFormPage.submitButton.click();

            // j. Validate that each Labeled row contains the correct information
            AutomationPracticeFormPage.successModal.should('be.visible');
            AutomationPracticeFormPage.validateTableContent('Student Name', firstName + ' ' + lastName);
            AutomationPracticeFormPage.validateTableContent('Student Email', email);
            AutomationPracticeFormPage.validateTableContent('Gender', gender);
            AutomationPracticeFormPage.validateTableContent('Mobile', phoneNr);
            AutomationPracticeFormPage.validateTableContent('Date of Birth', day + ' ' + month + ',' + year);
            AutomationPracticeFormPage.validateTableContent('Subjects', subject);
            AutomationPracticeFormPage.validateTableContent('Hobbies', hobby);
            AutomationPracticeFormPage.validateTableContent('Picture', pictureFileName);
            AutomationPracticeFormPage.validateTableContent('Address', address);
            AutomationPracticeFormPage.validateTableContent('State and City', state);
        });
    });
});
