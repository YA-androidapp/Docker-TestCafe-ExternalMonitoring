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

test("リポジトリ検索", async (t) => {
  await t.typeText(Selector("input[name=q]"), "Yumura").pressKey("enter");

  const list = Selector("ul.repo-list");
  const listitem = list.child(0);
  const listitemExists = listitem.exists;
  await t.expect(listitemExists).ok();
  await t.expect(listitem.innerText).contains("YA-androidapp/Yumura");

  // スクリーンショットを撮影
  await t.takeScreenshot({
    path: "Yumura.png",
    fullPage: true,
  });
});

test("ユーザー検索", async (t) => {
  await t.navigateTo("https://github.com/search?q=YA-androidapp&type=Users");

  const list = Selector("div.user-list");
  const listitem = list.find("em");
  const listitemExists = listitem.exists;
  await t.expect(listitemExists).ok();
  await t.expect(listitem.innerText).contains("YA-androidapp");

  // スクリーンショットを撮影
  await t.takeScreenshot({
    path: "YA_list.png",
    fullPage: true,
  });

  await t.click(listitem.parent());

  // スクリーンショットを撮影
  await t.takeScreenshot({
    path: "YA_detail.png",
    fullPage: true,
  });
});

// 環境変数の利用
//   テスト実行前に、.envに環境変数を設定しておく
test("環境変数の利用", async (t) => {
  // console.log("process.env.USER_NAME: " + process.env.USER_NAME);
  await t.navigateTo(
    "https://github.com/" + (process.env.USER_NAME ? process.env.USER_NAME : "")
  );
  await t.takeScreenshot({
    path: "YA_env.png",
    fullPage: true,
  });
});
