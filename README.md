# Docker-TestCafe-ExternalMonitoring

---

## USAGE

```sh
$ docker-compose up

Creating network "docker-testcafe-externalmonitoring_default" with the default driver
Creating docker-testcafe-externalmonitoring_testcafe_1 ... done
Attaching to docker-testcafe-externalmonitoring_testcafe_1
testcafe_1  |  Running tests in:
testcafe_1  |  - Chrome 81.0.4044.138 / Linux 0.0
testcafe_1  |
testcafe_1  |  Access GitHub
testcafe_1  |  ✓ 本文にGitHubを含む
testcafe_1  |  ✖ 本文にGitHubを含まない
testcafe_1  |
testcafe_1  |    1) AssertionError: expected 'Skip to content\nWhy GitHub?
testcafe_1  |       \nTeam\nEnterprise\nExplore \nMarketplace\nPricing \nSign in\nSign
testcafe_1  |       up\nBuilt for developers\n\nGitHub is a development platform
testcafe_1  |       inspired by the way you work. From open source to business, you can
testcafe_1  |       host and review code, manage projects, and build software alongside
testcafe_1  |       50 million developers.\n\nUsername\nEmail\nPassword\n\nMake sure
testcafe_1  |       it\'s at least 15 characters OR at least 8 characters including a
testcafe_1  |       number and a lowercase letter. Learn more.\n\nSign up for
testcafe_1  |       GitHub\n\nBy clicking “Sign up for GitHub”, you agree to our Terms
testcafe_1  |       of Service and Privacy Statement. We’ll occasionally send you
testcafe_1  |       account related emails.\n\nGet started with GitHub
testcafe_1  |       Enterprise\n\nTake collaboration to the next level with security and
testcafe_1  |       administrative features built for teams.\n\nEnterprise\n\nDeploy to
testcafe_1  |       your environment or the cloud.\n\nStart a free trial\nTalk to
testcafe_1  |       us\n\nNeed help?\n\nContact Sales →\nNEW\nGitHub is now free for
testcafe_1  |       teams\n\nGitHub Free gives teams private repositories with unlimited
testcafe_1  |       collaborators at no cost. GitHub Team is now reduced to $4 per
testcafe_1  |       user/month.\n\nTry GitHub Free\n\nMore than 2.9 million businesses
testcafe_1  |       and organizations use GitHub\nGitHub for teams\n\nA better way to
testcafe_1  |       work together\n\nGitHub brings teams together to work through
testcafe_1  |       problems, move ideas forward, and learn from each other along the
testcafe_1  |       way.\n\nSign up your team →\nWrite better code\n\nCollaboration
testcafe_1  |       makes perfect. The conversations and code reviews that happen in
testcafe_1  |       pull requests help your team share the weight of your work and
testcafe_1  |       improve the software you build. Learn about code review.\n\nManage
testcafe_1  |       your chaos\n\nTake a deep breath. On GitHub, project management
testcafe_1  |       happens in issues and project boards, right alongside your code. All
testcafe_1  |       you have to do is mention a teammate to get them involved. Learn
testcafe_1  |       about project management.\n\nFind the right tools\n\nBrowse and buy
testcafe_1  |       apps from GitHub Marketplace with your GitHub account. Find the
testcafe_1  |       tools you like or discover new favorites—then start using them in
testcafe_1  |       minutes. Learn about integrations.\n\nSee how the world\'s leading
testcafe_1  |       companies use GitHub Enterprise.\n↗\nMGM Resorts
testcafe_1  |       International\n\nHospitality\n\nRead
testcafe_1  |       more\n→\n↗\nNationwide\n\nInsurance\n\nRead
testcafe_1  |       more\n→\n↗\nSAP\n\nBusiness Software\n\nRead
testcafe_1  |       more\n→\n↗\nSpotify\n\nTechnology / Streaming\n\nRead
testcafe_1  |       more\n→\nSecurity and administration\n\nYour business needs,
testcafe_1  |       met\n\nFrom flexible hosting to granular access controls, we’ve got
testcafe_1  |       your security requirements covered.\n\nLearn how GitHub Enterprise
testcafe_1  |       works →\n\nCode security\n\nPrevent problems before they happen.
testcafe_1  |       Protected branches, signed commits, and required status checks
testcafe_1  |       protect your work and help you maintain a high standard for your
testcafe_1  |       code.\n\nAccess controlled\n\nEncourage teams to work together while
testcafe_1  |       limiting access to those who need it with granular permissions and
testcafe_1  |       authentication through SAML/SSO and LDAP.\n\nHosted where you need
testcafe_1  |       it\n\nSecurely and reliably host your work on GitHub using GitHub
testcafe_1  |       Enterprise Cloud. Or deploy GitHub Enterprise Server in your own
testcafe_1  |       data centers or in a private cloud using Amazon Web Services, Azure,
testcafe_1  |       or Google Cloud Platform.\n\nCompare plans →\nContact Sales for more
testcafe_1  |       information →\nIntegrations\n\nBuild on GitHub\n\nCustomize your
testcafe_1  |       process with GitHub apps and an intuitive API. Integrate the tools
testcafe_1  |       you already use or discover new favorites to create a happier, more
testcafe_1  |       efficient way of working.\n\nLearn about integrations
testcafe_1  |       →\n\nSometimes, there’s more than one tool for the job. Why not try
testcafe_1  |       something new?\n\nBrowse GitHub Marketplace
testcafe_1  |       →\n\nCommunity\n\nWelcome home,\ndevelopers\n\nGitHub is home to the
testcafe_1  |       world’s largest community of developers and their
testcafe_1  |       projects...\n\n↗\nRussell Keith-Magee\n\nRussell Keith-Magee created
testcafe_1  |       BeeWare to fill a gap in his own process. Today, BeeWare is the
testcafe_1  |       go-to project for supporting Python on every platform.\n\nRead
testcafe_1  |       more\n→\n↗\nKris Nova\n\nKris Nova quickly developed a passion for
testcafe_1  |       open source software. Now she gets to work on open source tooling at
testcafe_1  |       her day job, which includes maintaining Kubernetes Operations
testcafe_1  |       (kops).\n\nRead more\n→\n↗\nEvan You\n\nIn 2013, Evan You founded
testcafe_1  |       Vue, a Javascript framework funded by the community on Patreon. In
testcafe_1  |       2016, Vue reached 2,000,000 downloads.\n\nRead more\n→\n↗\nJess
testcafe_1  |       Frazelle\n\nJess Frazelle works on Kubernetes full-time. Previously
testcafe_1  |       she maintained Docker, a software containerization platform used by
testcafe_1  |       thousands of teams.\n\nRead more\n→\n\n...whether you’re making your
testcafe_1  |       first commit or sending a Rover to Mars, there’s room for you here,
testcafe_1  |       too.\n\n100M*\nrepositories worldwide\n\nGitHub’s users create and
testcafe_1  |       maintain influential technologies alongside the world’s largest open
testcafe_1  |       source community.\n\n \n50M*\ndevelopers worldwide\n\nDevelopers use
testcafe_1  |       GitHub for personal projects, from experimenting with new
testcafe_1  |       programming languages to hosting their life’s work.\n\n
testcafe_1  |       \n2.9M*\nbusinesses & organizations worldwide\n\nBusinesses of all
testcafe_1  |       sizes use GitHub to support their development process and to
testcafe_1  |       securely build software.\n\n* As of August 2019\nGet started for
testcafe_1  |       free — join the millions of developers already using GitHub to share
testcafe_1  |       their code, work together, and build amazing
testcafe_1  |       things.\nUsername\nEmail\nPassword\nSign up for GitHub\n\nBy
testcafe_1  |       clicking “Sign up for GitHub”, you agree to our terms of service and
testcafe_1  |       privacy statement. We’ll occasionally send you account related
testcafe_1  |       emails.\n\nProduct\nFeatures\nSecurity\nTeam\nEnterprise\nCustomer
testcafe_1  |       stories\nPricing\nResources\nPlatform\nDeveloper
testcafe_1  |       API\nPartners\nAtom\nElectron\nGitHub
testcafe_1  |       Desktop\nSupport\nHelp\nCommunity Forum\nProfessional
testcafe_1  |       Services\nLearning Lab\nStatus\nContact
testcafe_1  |       GitHub\nCompany\nAbout\nBlog\nCareers\nPress\nSocial Impact\nShop\n©
testcafe_1  |       2020 GitHub, Inc.\nTerms\nPrivacy\nSite Map\nWhat is Git?\nWaiting
testcafe_1  |       for assertion execution...\nAccess GitHub - 本文にGitHubを含まない\nChrome
testcafe_1  |       81.0.4044.138 / Linux 0.0' to not include 'GitHub'
testcafe_1  |
testcafe_1  |       Browser: Chrome 81.0.4044.138 / Linux 0.0
testcafe_1  |
testcafe_1  |           7 |  await t.expect(body.innerText).contains("GitHub");
testcafe_1  |           8 |});
testcafe_1  |           9 |
testcafe_1  |          10 |test("本文にGitHubを含まない", async (t) => {
testcafe_1  |          11 |  const body = Selector("body");
testcafe_1  |        > 12 |  await t.expect(body.innerText).notContains("GitHub");
testcafe_1  |          13 |});
testcafe_1  |          14 |
testcafe_1  |
testcafe_1  |          at <anonymous> (/usr/src/001-github.js:12:34)
testcafe_1  |          at <anonymous> (/usr/src/001-github.js:10:1)
testcafe_1  |          at <anonymous>
testcafe_1  |       (/usr/lib/node_modules/testcafe/src/api/wrap-test-function.js:17:28)
testcafe_1  |          at TestRun._executeTestFn
testcafe_1  |       (/usr/lib/node_modules/testcafe/src/test-run/index.js:296:19)
testcafe_1  |          at TestRun.start
testcafe_1  |       (/usr/lib/node_modules/testcafe/src/test-run/index.js:346:24)
testcafe_1  |
testcafe_1  |
testcafe_1  |
testcafe_1  |  1/2 failed (8s)
docker-testcafe-externalmonitoring_testcafe_1 exited with code 1
```
