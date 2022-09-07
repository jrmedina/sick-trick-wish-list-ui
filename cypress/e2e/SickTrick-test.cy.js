describe("Sick Trick", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render a controlled form, header, and default trick cards", () => {
    cy.get("h1").contains("Sick Trick Wish List");
    cy.get("form").find("input").should("have.class", "name");
    cy.get("form").find("input").should("have.class", "tutorial");
    cy.get("form").find("select").should("have.class", "stance");
    cy.get("form").find("select").should("have.class", "obstacle");
    cy.get("form").find("button").contains("Send It");
    cy.get(".TrickContainer")
      .find(".TrickCard")
      .first()
      .find(".name")
      .contains("treflip");
    cy.get(".TrickContainer")
      .find(".TrickCard")
      .first()
      .find(".stance")
      .contains("regular");
    cy.get(".TrickContainer")
      .find(".TrickCard")
      .first()
      .find(".obstacle")
      .contains("flat ground");
    cy.get(".TrickContainer")
      .find(".TrickCard")
      .first()
      .find(".tutorial")
      .contains("https://www.youtube.com/watch?v=XGw3YkQmNig");
  });

  it("should recognize form input", () => {
    cy.get('input[name="name"]').type("cool trick");
    cy.get('input[name="name"]').should("have.value", "cool trick");
  });

  it("Should be able to add a new trick", () => {
    cy.get('input[name="tutorial"]').type("cooltrick.com");
    cy.get('input[name="name"]').type("cool trick");
    cy.get('select[name="stance"]').select("Regular");
    cy.get('select[name="obstacle"]').select("Pool");
    cy.get("button").click();
  });

  it("Should be able to POST a new trick", () => {
    cy.get('input[name="tutorial"]').type("cooltrick.com");
    cy.get('input[name="name"]').type("cool trick");
    cy.get('select[name="stance"]').select("Regular");
    cy.get('select[name="obstacle"]').select("Pool");
    cy.get("button").click();
    cy.visit("http://localhost:3000")
      .get(".TrickContainer")
      .find(".TrickCard")
      .last()
      .find(".name")
      .contains("cool trick");
    cy.visit("http://localhost:3000")
      .get(".TrickContainer")
      .find(".TrickCard")
      .last()
      .find(".tutorial")
      .contains("cooltrick.com");
    cy.visit("http://localhost:3000")
      .get(".TrickContainer")
      .find(".TrickCard")
      .last()
      .find(".stance")
      .contains("regular");
    cy.visit("http://localhost:3000")
      .get(".TrickContainer")
      .find(".TrickCard")
      .last()
      .find(".obstacle")
      .contains("pool");
  });
});
