module.exports = plop => {
  const componentPrompts = [
    {
      type: "input",
      name: "name",
      message: "What should it be called?"
    }
  ];

  const gameActions = [
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/App.js",
      templateFile: `./game/app.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/App.test.js",
      templateFile: `./game/app.test.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/components/Board.js",
      templateFile: `./game/board.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/components/Board.test.js",
      templateFile: `./game/board.test.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/{{lowerCase name}}/components/Board.css",
      templateFile: `./game/board.css.hbs`,
      abortOnFail: false
    }
  ];

  const commonActions = [
    {
      type: "add",
      path: "../../src/common/{{lowerCase name}}/{{properCase name}}.js",
      templateFile: `./common/component.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/common/{{lowerCase name}}/{{properCase name}}.test.js",
      templateFile: `./common/component.test.hbs`,
      abortOnFail: false
    },
    {
      type: "add",
      path: "../../src/common/{{lowerCase name}}/{{properCase name}}.css",
      templateFile: `./common/component.css.hbs`,
      abortOnFail: false
    }
  ];

  plop.setGenerator("Game", {
    description: "Game app",
    prompts: componentPrompts,
    actions: gameActions
  });

  plop.setGenerator("Common", {
    description: "Common component",
    prompts: componentPrompts,
    actions: commonActions
  });
};
