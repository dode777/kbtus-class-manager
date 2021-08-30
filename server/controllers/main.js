const puppeteer = require('puppeteer');
const { createWorker } = require('tesseract.js');
const worker = createWorker();

const getMainData = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });

    const id = process.env.id;
    const pw = process.env.pw;

    const page = (await browser.pages())[0];

    page.setViewport({
      width: 500,
      height: 500,
    });

    const url = 'https://truth.kbtus.ac.kr:8443/KBTUS_HAKSA/index.jsp';
    await page.goto(url);

    // await page.type(String.fromCharCode(13));

    // 보안문자 캡쳐
    await page.screenshot({
      path: `public/captchaImg.png`,
      //   fullPage: true,
      clip: { x: 54, y: 340, width: 81, height: 48 },
    });

    // 캡쳐한 보안문자 인식
    let img = 'captchaImg.png';

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    await worker.setParameters({
      tessedit_char_whitelist: '0123456789',
    });
    const {
      data: { text },
    } = await worker.recognize(img);
    await worker.terminate();

    // 결과값에서 숫자만 추출
    const regex = /[^0-9]/g;
    let result = text.replace(regex, '');

    // 웹에 데이터 입력
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
    await page.click('a[class="btn_login"]');

    await page.waitForTimeout(3000);

    if (page.url() == 'https://truth.kbtus.ac.kr:8443/KBTUS_HAKSA/mainPage.do') {
      await page.click('a.btn_menu_open');
      //   await page.waitForTimeout(500);
      await page.click('li.mn_LESN > a.bgbt');
      //   await page.waitForTimeout(500);
      await page.click('li.mn_LESN > ul > li.fd:nth-child(1)');

      await page.waitForSelector('.content .box_search p input#S_HAKBUN');
      let data = await page.$eval('.content .box_search p input#S_HAKBUN', (element) => {
        return element;
      });

      // 결과값 전송
      res.send(data);
    } else {
      res.status(401).send({ message: 'Login Fail' });

      // 페이지 닫기
      await page.close();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMainData };
