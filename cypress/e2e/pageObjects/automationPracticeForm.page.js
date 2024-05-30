import { BasePage } from "./base.page";

export class AutomationPracticeFormPage extends BasePage {
    static get firstNameInput()
    {
        return cy.get('#firstName');
    }

    static get lastNameInput()
    {
        return cy.get('#lastName');
    }

    static get emailInput()
    {
        return cy.get('#userEmail');
    }

    static get radiosForGender()
    { 
        return cy.get("#genterWrapper .custom-radio");
    }

    static get mobileNumberInput()
    {
        return cy.get('#userNumber');
    }

    static get dateOfBirthInput()
    {
        return cy.get('#dateOfBirthInput');
    }

    static get monthSelect()
    {
        return cy.get('.react-datepicker__month-select');
    }

    static get yearSelect()
    {
        return cy.get('.react-datepicker__year-select');
    }

    static get dayButton()
    {
        return cy.get('.react-datepicker__day');
    }

    static get subjectsMenuList()
    {
        return cy.get('.subjects-auto-complete__menu-list');
    }

    static get subjectsInput()
    {
        return cy.get('#subjectsInput');
    }

    static get hobbiesCheckbox()
    {
        return cy.get("#hobbiesWrapper .custom-checkbox");
    }

    static get uploadPictureInput()
    {
        return cy.get('#uploadPicture');
    }

    static get currentAddressInput()
    {
        return cy.get('#currentAddress');
    }

    static get stateField()
    {
        return cy.get("#state");
    }

    static get stateDropdown()
    {
        return cy.get("#state [id^='react-select-3-option-']");
    }

    static get cityField()
    {
        return cy.get("#city");
    }

    static get cityDropdown()
    {
        return cy.get("#city [id^='react-select-4-option-']");
    }

    static get submitButton() {
        return cy.get('#submit');
    }

    static get successModal() {
        return cy.get('.modal-content');
    }

    static get pictureUpload()
    {
        return cy.get("#uploadPicture");
    }

    static validateTableContent(label, value)
    {
        cy.get('table.table tbody tr').contains('td', label).next('td').should('contain.text', value);
    }

    static generatePhoneNumber()
    {
        let phoneNumber = '';
        for (let i = 0; i < 10; i++)
        {
            phoneNumber += Math.floor(Math.random() * 10);
        }
        return phoneNumber;
    }

    static generateRandomEmail()
    {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let email = '';
        for (let i = 0; i < 10; i++)
        {
            email += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        email += '@gmail.com';
        return email;
    }

    static getRandomGender()
    {
        const genders = ['Male', 'Female', 'Other'];
        const randomIndex = Math.floor(Math.random() * genders.length);
        return genders[randomIndex];
    }
}
