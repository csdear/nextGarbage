module.exports = (plop) => {
    // controller generator
    plop.setGenerator("basic scaffold", {
      description: "Generates a index.tsx, sass file and unit test scaffold",
      prompts: [
        {
          type: "input",
          name: "nameTC",
          message: "Component Name -- TitleCase ?",
        },
        {
          type: "input",
          name: "nameKC",
          message: "Component Name -- kebob case ? ",
        },
        {
          type: "list",
          name: "pizzaSize",
          message: "What size pizza you want ? ",
          choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
        },
      ],
      actions: [
        {
          type: "addMany",
          destination: "src/components/{{nameKC}}",
          // path: "src/{{name}}.tsx",
          templateFiles: "plop-templates/*.hbs",
        },
      ],
    });
  };
