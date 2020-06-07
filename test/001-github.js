import { Selector } from "testcafe";

fixture`Access GitHub`.page`http://github.com`;

test("本文にGitHubを含む", async (t) => {
  const body = Selector("body");
  await t.expect(body.innerText).contains("GitHub");
});

test("本文にGitHubを含まない", async (t) => {
  const body = Selector("body");
  await t.expect(body.innerText).notContains("GitHub");
});
