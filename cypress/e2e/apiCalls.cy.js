it("Should be able to successfully fetch data", () => {
  cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
    statusCode: 200,
    body: [
      {
        stance: "regular",
        name: "treflip",
        obstacle: "flat ground",
        tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
        id: 1,
      },
    ],
  });
  cy.visit("http://localhost:3000")
    .get("main")
    .find(".TrickContainer")
    .find(".TrickCard")
    .find(".name")
    .contains("treflip");
});

it("Should be able to successfully fetch data", () => {
  cy.intercept("POST", "http://localhost:3001/api/v1/tricks", {
    statusCode: 200,
    body: [
      {
        stance: "regular",
        name: "treflip",
        obstacle: "pool",
        tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig111",
        id: 99,
      },
    ],
  });
  cy.visit("http://localhost:3000")
    .get("main")
    .find(".TrickContainer")
    .find(".TrickCard")
    .last()
    .find(".name")
    .contains("treflip");
});




