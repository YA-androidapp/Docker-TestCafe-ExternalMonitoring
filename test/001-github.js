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

test("検索", async (t) => {
  await t.typeText(Selector("input[name=q]"), "Yumura").pressKey("enter");

  const list = Selector("ul.repo-list");
  const listitem = list.child(0);
  const listitemExists = listitem.exists;
  await t.expect(listitemExists).ok();
  await t.expect(listitem.innerText).contains("YA-androidapp/Yumura");
});
