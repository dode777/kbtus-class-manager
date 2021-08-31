const puppeteer = require('puppeteer');
const { createWorker } = require('tesseract.js');
const worker = createWorker();

const getMainData = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });

    const id = process.env.KBTUS_ID;
    const pw = process.env.KBTUS_PW;
    const url = 'https://truth.kbtus.ac.kr:8443/KBTUS_HAKSA/index.jsp';
    let img = 'captchaImg.png';

    let isLoggedIn = false;

    const page = (await browser.pages())[0];

    page.setViewport({
      width: 500,
      height: 500,
    });

    await page.goto(url);
    await worker.load();

    // 로그인 실패 시 While문으로 반복
    while (!isLoggedIn) {
      await page.waitForTimeout(2000);
      // 보안문자 캡쳐
      await page.screenshot({
        path: `./captchaImg.png`,
        clip: { x: 54, y: 340, width: 81, height: 48 },
      });

      // 캡쳐한 보안문자 인식
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789',
      });
      let {
        data: { text },
      } = await worker.recognize(img);

      // 결과값에서 숫자만 추출
      const regex = /[^0-9]/g;
      let result = text.replace(regex, '');

      if (result.length !== 4) {
        console.log('보안문자 4자리 이하');
        await page.reload(url);
        await page.waitForSelector('a[class="btn_login"]');
        continue;
      }

      // 웹에 데이터 입력
      await page.waitForSelector('input[name="V_USER_ID"]', 'input[name="V_USER_PWD"]', 'input[name="txtCaptcha"]');
      // await page.waitForSelector('input[name="V_USER_PWD"]');
      // await page.waitForSelector('input[name="txtCaptcha"]');
      await page.evaluate(
        (id, pw, result) => {
          document.querySelector('input[name="V_USER_ID"]').value = id;
          document.querySelector('input[name="V_USER_PWD"]').value = pw;
          document.querySelector('input[name="txtCaptcha"]').value = result;
        },
        id,
        pw,
        result
      );

      // 로그인 버튼 클릭
      await page.waitForSelector('a[class="btn_login"]');
      await page.click('a[class="btn_login"]');

      await page.waitForTimeout(2000);

      // 로그인 성공 시 데이터 크롤링 작업
      if (page.url() == 'https://truth.kbtus.ac.kr:8443/KBTUS_HAKSA/mainPage.do') {
        isLoggedIn = true;

        await worker.terminate();

        await page.waitForSelector('a.btn_menu_open');
        await page.click('a.btn_menu_open');
        await page.waitForSelector('li.mn_LESN > a.bgbt');
        await page.click('li.mn_LESN > a.bgbt');
        await page.waitForSelector('li.mn_LESN > ul > li.fd:nth-child(1)');
        await page.click('li.mn_LESN > ul > li.fd:nth-child(1)');

        await page.waitForTimeout(2000);

        const frame = page.frames().find((f) => f.name() === 'frame300017');

        // 학번, 이름
        const getHakbun = await frame.$('#S_HAKBUN');
        const getName = await frame.$('#S_NAME');

        // 이번 학기 수업 수강 정보
        let lectures = [];

        await frame.waitForTimeout(3000);
        const getLectures = await frame.$$eval('#dataGrid > tbody > tr > td', (data) => {
          return data.map((data) => data.textContent);
        });

        for (i = 0; getLectures.length > i; i += 9) {
          lectures.push([getLectures[i], getLectures[i + 2], getLectures[i + 3], getLectures[i + 4]]);
        }

        const user_hakbun = await frame.evaluate((getHakbun) => getHakbun.value, getHakbun);
        const user_name = await frame.evaluate((getName) => getName.value, getName);

        // 결과값 전송
        res.send({ 이름: user_name, 학번: user_hakbun, 강의정보: lectures });
        break;
      }
      await page.reload(url);
      continue;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMainData };
