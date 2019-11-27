class SignInPage {

    visit() {
        cy.get('/login/index.php')
    }

    getLoginError() {
        return cy.xpath('//*[@class="alert alert-danger"]');
    }

    fillEmail(value) {
        const field = cy.get('input#username');
        field.clear();
        field.type(value);

        return this;
    }

    fillPassword(value) {
        const field = cy.get('input#password');
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = cy.get('button#loginbtn');
        button.click();
    }

}

export default SignInPage;