describe('تست لاگین ساده', () => {
    it('ورود موفق', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        // cy.contains('خوش آمدید') // بسته به محتوای سایت
    })
})
// git init
// git remote add origin https://github.com/mozhdeh69/cy-automationexercise.com.git
//     git add .
//     git commit -m "اولین تست Cypress"
// git push -u origin main
