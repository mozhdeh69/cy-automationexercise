describe('تست ثبت‌نام', () => {
    it('باید کاربر جدید با موفقیت ثبت‌نام شود', () => {
        cy.visit('https://demoqa.com/automation-practice-form');

        // ورود اطلاعات در فرم ثبت‌نام
        cy.get('input[data-qa="signup-name"]').type('Test User');
        cy.get('input[data-qa="signup-email"]').type('mozhdehsn69@gmail.com');

        // کلیک روی دکمه ثبت‌نام
        cy.get('button[data-qa="signup-button"]').click();

        cy.wait(2000);
        // بررسی اینکه وارد صفحه تکمیل اطلاعات ثبت‌نام شده باشد
        cy.url().should('include', '/signup');
        cy.wait(2000);

        cy.get("#id_gender1").should("exist").check();
    });
});

// describe("Signup Form", () => {
//
//     it("should fill out the form and submit successfully", () => {
//
//         cy.wait(3000);
//         // انتخاب عنوان (Mr)
//         // cy.get("#id_gender1").check();
//         cy.get("#id_gender1").should("exist").check();
//
//
//         // cy.wait(1000);
//         // // وارد کردن نام
//         // cy.get("#name").clear().type("Mozhdeh");
//         //
//         // cy.wait(1000);
//         // // ایمیل بررسی می‌شود که مقدار دارد ولی غیرفعال است
//         // cy.get("#email").should("have.value", "mozhdehsn69@gmail.com").and("be.disabled");
//         //
//         // cy.wait(1000);
//         // // وارد کردن پسورد
//         // cy.get("#password").type("StrongPass123");
//         //
//         // cy.wait(1000);
//         // // انتخاب تاریخ تولد
//         // cy.get("#days").select("15");
//         // cy.wait(1000);
//         // cy.get("#months").select("March");
//         // cy.wait(1000);
//         // cy.get("#years").select("1995");
//         //
//         // cy.wait(2000);
//         // // ارسال فرم
//         // cy.get("form").submit();
//
//         // بررسی پیام موفقیت (در صورت وجود)
//         cy.contains("Account created successfully").should("be.visible");
//         // cy.get('.success-message')
//         //     .invoke('text')
//         //     .then((text) => {
//         //         expect(text.trim()).to.eq('ثبت‌نام شما با موفقیت انجام شد!');
//         //     });
//     });
// });
//
