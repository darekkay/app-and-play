module.exports = plop => {
  const componentPrompts = [
    {
      type: "input",
      name: "name",
      message: "What should it be called?"
    }
  ];

  const componentActions = [
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/App.js",
      templateFile: `./component/app.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/App.test.js",
      templateFile: `./component/app.test.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/components/Board.js",
      templateFile: `./component/board.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/components/Board.test.js",
      templateFile: `./component/board.test.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/components/Board.css",
      templateFile: `./component/board.css.hbs`,
      abortOnFail: false
    }
  ];

  plop.setGenerator("Game", {
    description: "Game app",
    prompts: componentPrompts,
    actions: componentActions
  });
};
