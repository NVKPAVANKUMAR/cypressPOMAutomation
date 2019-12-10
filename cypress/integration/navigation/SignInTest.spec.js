import HomePage from '../../pages/HomePage';


describe('Sign In', () => {
    it("should show error in case of empty credentails", () => {
        const home = new HomePage();
        home.visit();

        const signIn = home.goToSignIn();
        signIn.submit();

        signIn.getLoginError()
            .should('exist')
            .contains('Invalid login, please try again');
    });

    it("should not sign in with incorrect credentials" , () =>{
        const home = new HomePage();
        home.visit();

        const signIn = home.goToSignIn();

        signIn.fillEmail("username")
        .fillPassword("waste2020")
        .submit();

        signIn.getLoginError()
            .should('exist')
            .contains('Invalid login, please try again');
    });


    it("should sign in with correct credentails", () => {
        const home = new HomePage();
        home.visit();

        const signIn = home.goToSignIn();

        signIn.fillEmail("admin")
            .fillPassword("sandbox")
            .submit();

        home.getUserAvatar().should('exist');
    });
});