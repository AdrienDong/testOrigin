describe('template spec', () => {
  it('passes', () => {
    const eSignatureLink =
    "https://2c52a.ota.sign.oodrive.com/calinda/hub/selling/dispatch.html?c_id=6638564&l_id=21768&contractor_id=3651554&j_token=B45388Y0RTeGJofGF1KzN1ZkxsWlpWT1dOeDJDTDFqUUtYSVBhb1ZsT0JXNUFIU1JheUVZYXVhbEZQeXMvQTRFS29HWXdTTmhFa211b2FzY1V6UkNzTGJVemx0TFlSQ3hvcXB5c2FOMzNNVEt2RUVRS1RzZSt6NURhTXJRaUNkMXZQUXNlWjJmdE9w";

  cy.visit("https://www.google.com");
  cy.wait(5000);
  cy.visit(eSignatureLink);
  cy.wait(5000);
  cy.origin("https://2c52a.ota.sign.oodrive.com", () => {
    cy.wait(5000);
    cy.get("button").contains("Suivant").should("be.visible");
  });
  })
})