describe("index", () => {
  it("renders without crashing", () => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);
    require("./index");
    expect(document.getElementById("root")._reactRootContainer).toBeTruthy();
  });
});
