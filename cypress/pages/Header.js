class Header {
    getSignInLink() {
        return cy.get(".login > a");
    }
}

export default Header;