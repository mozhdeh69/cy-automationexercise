describe('تست فرم در demoqa', () => {
    it('باید فرم را با موفقیت پر و ارسال کند', () => {

        cy.visit('https://sadgan.com/');
        cy.get('.elementor-element-8763728 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click({ force: true });
        // cy.get('#firstName').type('Mozhdeh');
        // cy.get('#lastName').type('Sanati');
        // cy.get('#userEmail').type('mozhdeh@example.com');
        // cy.get('input[name="gender"][value="Female"]').check({ force: true });
        // cy.get('#userNumber').type('09123456789');
        //
        // // تاریخ تولد انتخابی (با کلیک روی input)
        // cy.get('#dateOfBirthInput').click();
        // cy.get('.react-datepicker__year-select').select('1995');
        // cy.get('.react-datepicker__month-select').select('March');
        // cy.get('.react-datepicker__day--015').click();
        //
        // // موضوعات (Subjects)
        // cy.get('.subjects-auto-complete__value-container').type('Math{enter}');
        //
        // // علاقه‌مندی‌ها (Hobbies)
        // cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
        // cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
        //
        // // آدرس
        // cy.get('#currentAddress').type('Mashhad, Iran');
        //
        // // ارسال فرم
        // cy.get('#submit').click({ force: true });
        //
        // // بررسی پیام موفقیت
        // cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
    });
});
